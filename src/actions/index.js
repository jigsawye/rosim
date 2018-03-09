import { createAction } from 'redux-actions';
import * as types from '../constants/types';

export const setBaseLevel = createAction(types.SET_BASE_LEVEL);
export const setJobLevel = createAction(types.SET_JOB_LEVEL);
export const setJob = createAction(types.SET_JOB);
export const setStat = createAction(types.SET_STAT);
export const setOtherStat = createAction(types.SET_OTHER_STAT);

export const loadSaveData = createAction(types.LOAD_SAVE_DATA);

export const updateAspdWeaponId = createAction(types.UPDATE_ASPD_WEAPON_ID);
export const updateAspdLefthandId = createAction(types.UPDATE_ASPD_LEFTHAND_ID);
export const updateAspdEquipMod = createAction(types.UPDATE_ASPD_EQUIP_MOD);
export const updateAspdEquipFixed = createAction(types.UPDATE_ASPD_EQUIP_FIXED);
export const updateAspdSkillMod = createAction(types.UPDATE_ASPD_SKILL_MOD);
export const updateAspdPotionMod = createAction(types.UPDATE_ASPD_POTION_MOD);

export const updateHpAddMod = createAction(types.UPDATE_HP_ADD_MOD);
export const updateHpMultiMod = createAction(types.UPDATE_HP_MULTI_MOD);
export const updateSpAddMod = createAction(types.UPDATE_SP_ADD_MOD);
export const updateSpMultiMod = createAction(types.UPDATE_SP_MULTI_MOD);
