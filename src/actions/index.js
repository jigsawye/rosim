import {
  SET_BASE_LEVEL,
  SET_JOB_LEVEL,
  SET_JOB,
  SET_STAT,
  LOAD_SAVE_DATA,
} from '../constants/types';

export const setBaseLevel = level => ({ type: SET_BASE_LEVEL, level });
export const setJobLevel = level => ({ type: SET_JOB_LEVEL, level });
export const setJob = job => ({ type: SET_JOB, job });
export const setStat = (key, stat) => ({ type: SET_STAT, key, stat });

export const loadSaveData = data => ({ type: LOAD_SAVE_DATA, data });
