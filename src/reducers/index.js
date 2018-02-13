import {
  SET_BASE_LEVEL,
  SET_JOB_LEVEL,
  SET_JOB,
  SET_STAT,
} from '../constants/types';

const initialState = {
  baseLevel: 1,
  jobLevel: 1,
  job: 7,
  stats: {
    str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE_LEVEL:
      return { ...state, baseLevel: Number(action.level) };
    case SET_JOB_LEVEL:
      return { ...state, jobLevel: Number(action.level) };
    case SET_JOB:
      return { ...state, job: Number(action.job) };
    case SET_STAT:
      return {
        ...state,
        stats: {
          ...state.stats,
          [action.key]: Number(action.stat),
        },
      };
    default:
      return state;
  };
};
