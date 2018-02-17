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
export const updateAspdEqultmentAddition = equltmentsAddition => ({
  type: types.UPDATE_ASPD_EQULTMENTS_ADDITION, equltmentsAddition,
});
export const updateAspdSkillAddition = skillsAddition => ({
  type: types.UPDATE_ASPD_SKILLS_ADDITION, skillsAddition,
});
export const updateAspdPotionAddition = potionAddition => ({
  type: types.UPDATE_ASPD_POTION_ADDITION, potionAddition,
});
