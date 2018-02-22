import * as types from '../constants/types';

export const setBaseLevel = level => ({ type: types.SET_BASE_LEVEL, level });
export const setJobLevel = level => ({ type: types.SET_JOB_LEVEL, level });
export const setJob = job => ({ type: types.SET_JOB, job });
export const setStat = (key, stat) => ({ type: types.SET_STAT, key, stat });
export const setOtherStat = (key, stat) => ({ type: types.SET_OTHER_STAT, key, stat });

export const loadSaveData = data => ({ type: types.LOAD_SAVE_DATA, data });

export const updateAspdWeaponId = weaponId => ({
  type: types.UPDATE_ASPD_WEAPON_ID, weaponId,
});
export const updateAspdLefthandId = lefthandId => ({
  type: types.UPDATE_ASPD_LEFTHAND_ID, lefthandId,
});
export const updateAspdEquipMod = equipMod => ({
  type: types.UPDATE_ASPD_EQUIP_MOD, equipMod,
});
export const updateAspdEquipFixed = equipFixed => ({
  type: types.UPDATE_ASPD_EQUIP_FIXED, equipFixed,
});
export const updateAspdSkillMod = skillMod => ({
  type: types.UPDATE_ASPD_SKILL_MOD, skillMod,
});
export const updateAspdPotionMod = potionMod => ({
  type: types.UPDATE_ASPD_POTION_MOD, potionMod,
});
