import { createAction } from 'redux-actions';
import { SET_STAT, SET_OTHER_STAT } from '../constants/types';

export const setStat = createAction(SET_STAT);
export const setOtherStat = createAction(SET_OTHER_STAT);
