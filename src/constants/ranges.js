import { includes } from 'lodash';
import { SECOND, TRANSCENDENT_SECOND, THIRD } from './classes/classNames';
import { getClass } from './classes';

export const getBaseLevelRange = (job) => {
  const { type } = getClass(job);
  if (includes([SECOND, TRANSCENDENT_SECOND], type)) {
    return 100;
  }
  return 176;
};

export const getJobLevelRange = (job) => {
  const { type } = getClass(job);
  const jobLevelMap = {
    [SECOND]: 51,
    [TRANSCENDENT_SECOND]: 71,
    [THIRD]: 61,
  };

  return jobLevelMap[type];
};

export const getStatsRange = (job) => {
  const { type } = getClass(job);
  if (includes([SECOND, TRANSCENDENT_SECOND], type)) {
    return 100;
  }
  return 131;
};
