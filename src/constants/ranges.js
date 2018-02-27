import { range } from 'lodash';
import { SECOND, TRANSCENDENT_SECOND, THIRD } from './classes/classNames';
import { getClass } from './classes';

export const getMaxBaseLevel = (job) => {
  const { type } = getClass(job);
  return type === THIRD ? 175 : 99;
};

export const getMaxJobLevel = (job) => {
  const { type } = getClass(job);
  const jobLevelMap = {
    [SECOND]: 50,
    [TRANSCENDENT_SECOND]: 70,
    [THIRD]: 60,
  };

  return jobLevelMap[type];
};

export const getMaxStats = (job) => {
  const { type } = getClass(job);
  return type === THIRD ? 130 : 99;
};

export const getBaseLevelRange = (job) => {
  const { type } = getClass(job);
  return type === THIRD ? range(99, 176) : range(1, 100);
};
export const getJobLevelRange = job => range(1, getMaxJobLevel(job));
export const getStatsRange = job => range(1, getMaxStats(job) + 1);
