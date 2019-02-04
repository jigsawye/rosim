import { createAction } from 'redux-actions';

import {
  UPDATE_HP_ADD_MOD,
  UPDATE_HP_MULTI_MOD,
  UPDATE_SP_ADD_MOD,
  UPDATE_SP_MULTI_MOD,
} from '../constants/types';

export const updateHpAddMod = createAction(UPDATE_HP_ADD_MOD);
export const updateHpMultiMod = createAction(UPDATE_HP_MULTI_MOD);
export const updateSpAddMod = createAction(UPDATE_SP_ADD_MOD);
export const updateSpMultiMod = createAction(UPDATE_SP_MULTI_MOD);
