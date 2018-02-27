import { round, floor, find } from 'lodash';
import { compose, prop, includes } from 'lodash/fp';
import { getClass } from '../constants/classes';
import { SECOND, THIRD } from '../constants/classes/classNames';
import { secondTable, thirdTable } from '../constants/hpspTable';

const jobInclude = job => compose(includes(job[1]), prop('job'));

const getSecondBaseHp = (baseLevel, job) => {
  const { hpJobA, hpJobB } = find(secondTable, jobInclude(job));
  let baseHp = 35;

  baseHp += baseLevel * hpJobB;

  for (var i = 2; i <= baseLevel; i++) {
    baseHp += round(hpJobA * i);
  }

  return baseHp;
}

const getThirdBaseHp = (baseLevel, job) => {
  const { hpTable } = find(thirdTable, jobInclude(job));
  return hpTable[baseLevel - 99];
};

export const getMaxHp = (baseLevel, job, vit, { hpAddMod, hpMultiMod }) => {
  const { type } = getClass(job)
  const transMod = type === SECOND ? 1 : 1.25;
  const getBaseHp = type === THIRD ? getThirdBaseHp : getSecondBaseHp;
  const baseHp = getBaseHp(baseLevel, job);

  let maxHp = floor(baseHp * (1 + vit * 0.01) * transMod);

  maxHp += hpAddMod;

  return floor(maxHp * (1 + hpMultiMod * 0.01));
};
