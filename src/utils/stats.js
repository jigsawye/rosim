import { range, mapValues, find, floor } from 'lodash';
import { reduce } from 'lodash/fp';
import jobStatBonus, { statsMap } from '../constants/bonus';
import { getJobType } from '../constants/classes';
import { SECOND } from '../constants/classes/classNames';
import { acolyteSkills } from '../constants/skills';

const initialStats = () => ({
  str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0,
});

export const getAvailableStatsPoint = (level, isTranscendent) => range(1, level)
  .map((lv) => {
    if (lv < 100) {
      return floor((lv / 5) + 3);
    } else if (lv < 151) {
      return floor((lv / 10) + 13);
    }

    return floor(((lv - 150) / 7) + 28);
  })
  .reduce((prev, curr) => prev + curr, isTranscendent ? 100 : 48);

export const getRemainingStatsPoint = (level, stats, job) => {
  const isTranscendent = getJobType(job) !== SECOND;
  const statsPoint = getAvailableStatsPoint(level, isTranscendent);
  const raises = mapValues(stats, stat => range(1, stat).map(s => ((s < 100) ?
    floor((s - 1) / 10) + 2 :
    (4 * floor((s - 100) / 5)) + 16
  )).reduce((prev, curr) => prev + curr, 0));
  const totalRaise = Object.keys(raises).reduce((previous, key) => previous + raises[key], 0);

  return statsPoint - totalRaise;
};

export const getJobBonusStats = (jobLevel, job) => {
  const jobBonus = find(jobStatBonus, ['key', job[1]]);
  return jobBonus.bonus.filter(r => r[0] <= jobLevel)
    .reduce((prev, next) => {
      const nextBouns = { ...prev };
      nextBouns[statsMap[next[1]]] += 1;
      return nextBouns;
    }, initialStats());
};

export const getSkillBuffStats = reduce((status, { key, value }) => {
  const { isToggle, buffs } = find(acolyteSkills, { key });
  const buff = isToggle ? buffs : find(buffs, ['level', value]).status;
  return { ...status, ...buff };
}, initialStats());
