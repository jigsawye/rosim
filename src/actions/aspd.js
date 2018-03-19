import { createAction } from 'redux-actions';
import {
  UPDATE_ASPD_WEAPON_ID,
  UPDATE_ASPD_LEFTHAND_ID,
  UPDATE_ASPD_EQUIP_MOD,
  UPDATE_ASPD_EQUIP_FIXED,
  UPDATE_ASPD_SKILL_MOD,
  UPDATE_ASPD_POTION_MOD,
} from '../constants/types';

export const updateAspdWeaponId = createAction(UPDATE_ASPD_WEAPON_ID);
export const updateAspdLefthandId = createAction(UPDATE_ASPD_LEFTHAND_ID);
export const updateAspdEquipMod = createAction(UPDATE_ASPD_EQUIP_MOD);
export const updateAspdEquipFixed = createAction(UPDATE_ASPD_EQUIP_FIXED);
export const updateAspdSkillMod = createAction(UPDATE_ASPD_SKILL_MOD);
export const updateAspdPotionMod = createAction(UPDATE_ASPD_POTION_MOD);
