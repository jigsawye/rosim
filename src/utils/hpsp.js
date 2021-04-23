import { compose, includes, prop } from 'lodash/fp';
import { find, floor, range, round } from 'lodash';

import { SECOND, THIRD } from '../constants/classes/classNames';
import { getJobType } from '../constants/classes';
import {
  secondHpTable,
  secondSpTable,
  thirdHpTable,
  thirdSpTable,
} from '../constants/hpspTable';

const findTable = (table, job) =>
  find(table, compose(includes(job[1]), prop('job')));

const getTransMod = type => (type === SECOND ? 1 : 1.25);

const getSecondBaseHp = (baseLevel, job) => {
  const { hpJobA, hpJobB } = findTable(secondHpTable, job);
  const baseHp = 35 + baseLevel * hpJobB;
  return range(2, baseLevel + 1).reduce(
    (currentBaseHp, level) => currentBaseHp + round(hpJobA * level),
    baseHp
  );
};

const getSecondBaseSp = (baseLevel, job) => {
  const { spJob } = findTable(secondSpTable, job);
  return 10 + baseLevel * spJob;
};

const getThirdBaseHp = (baseLevel, job) => {
  const { hpTable } = findTable(thirdHpTable, job);
  return hpTable[baseLevel - 99];
};

const getThirdBaseSp = (baseLevel, job) => {
  const { spTable } = findTable(thirdSpTable, job);
  return spTable[baseLevel - 99];
};

export const getMaxHp = (baseLevel, job, vit, { hpAddMod, hpMultiMod }) => {
  const type = getJobType(job);
  const transMod = getTransMod(type);
  const getBaseHp = type === THIRD ? getThirdBaseHp : getSecondBaseHp;
  const baseHp = getBaseHp(baseLevel, job);
  const maxHp = floor(floor(baseHp * (1 + vit * 0.01)) * transMod) + hpAddMod;
  return floor(maxHp * (1 + hpMultiMod * 0.01));
};

export const getMaxSp = (baseLevel, job, int, { spAddMod, spMultiMod }) => {
  const type = getJobType(job);
  const transMod = getTransMod(type);
  const getBaseSp = type === THIRD ? getThirdBaseSp : getSecondBaseSp;
  const baseSp = getBaseSp(baseLevel, job);
  const maxSp = floor(floor(baseSp * (1 + int * 0.01)) * transMod) + spAddMod;
  return floor(maxSp * (1 + spMultiMod * 0.01));
};
