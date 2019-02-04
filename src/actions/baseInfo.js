import { createAction } from 'redux-actions';

import { SET_BASE_LEVEL, SET_JOB, SET_JOB_LEVEL } from '../constants/types';

export const setBaseLevel = createAction(SET_BASE_LEVEL);
export const setJobLevel = createAction(SET_JOB_LEVEL);
export const setJob = createAction(SET_JOB);
