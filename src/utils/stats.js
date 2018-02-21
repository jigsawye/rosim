import { range, mapValues, find } from 'lodash';
import jobStatBonus, { statsMap } from '../constants/bonus';
import { getClass } from '../constants/classes';
import { SECOND } from '../constants/classes/classNames';

export const getAvailableStatsPoint = (level, isTranscendent) => range(1, +level)
  .map((lv) => {
    if (lv < 100) {
      return Math.floor((lv / 5) + 3);
    } else if (lv < 151) {
      return Math.floor((lv / 10) + 13);
    }

    return Math.floor(((lv - 150) / 7) + 28);
  })
  .reduce((prev, curr) => prev + curr, isTranscendent ? 100 : 48);

export const getRemainingStatsPoint = (level, stats, job) => {
  const { type } = getClass(job);
  const isTranscendent = type !== SECOND;
  const statsPoint = getAvailableStatsPoint(level, isTranscendent);
  const raises = mapValues(stats, stat => range(1, stat).map(s => ((s < 100) ?
    Math.floor((s - 1) / 10) + 2 :
    (4 * Math.floor((s - 100) / 5)) + 16
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
    }, { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 });
};
