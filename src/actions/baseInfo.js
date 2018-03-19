import { createAction } from 'redux-actions';
import {
  SET_BASE_LEVEL,
  SET_JOB_LEVEL,
  SET_JOB,
} from '../constants/types';

export const setBaseLevel = createAction(SET_BASE_LEVEL);
export const setJobLevel = createAction(SET_JOB_LEVEL);
export const setJob = createAction(SET_JOB);
