import range from 'lodash/range';
import mapValues from 'lodash/mapValues';
import jobStatBonuses from '../constants/bonuses';

export const getAvailableStatsPoint = level => range(1, +level)
  .map((lv) => {
    if (lv < 100) {
      return Math.floor((lv / 5) + 3);
    } else if (lv < 151) {
      return Math.floor((lv / 10) + 13);
    }

    return Math.floor(((lv - 150) / 7) + 28);
  })
  .reduce((prev, curr) => prev + curr, 48);

export const getRemainingStatsPoint = (level, stats) => {
  const statsPoint = getAvailableStatsPoint(level);
  const raises = mapValues(stats, stat => range(1, stat).map(s => ((s < 100) ?
    Math.floor((s - 1) / 10) + 2 :
    (4 * Math.floor((s - 100) / 5)) + 16
  )).reduce((prev, curr) => prev + curr, 0));
  const totalRaise = Object.keys(raises).reduce((previous, key) => previous + raises[key], 0);

  return statsPoint - totalRaise;
};

export const getJobBonusStats = (jobLevel, jobId) => {
  const { bonuses } = jobStatBonuses.find(({ id }) => id === jobId);
  return bonuses.find(({ level }) => level === jobLevel);
};
