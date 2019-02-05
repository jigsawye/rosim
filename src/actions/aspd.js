import useAction from '../hooks/useAction';
import {
  UPDATE_ASPD_ADDITIONAL_MOD,
  UPDATE_ASPD_EQUIP_FIXED,
  UPDATE_ASPD_EQUIP_MOD,
  UPDATE_ASPD_LEFTHAND_ID,
  UPDATE_ASPD_POTION_MOD,
  UPDATE_ASPD_SKILL_MOD,
  UPDATE_ASPD_WEAPON_ID,
} from '../constants/types';

export const useUpdateAspdWeaponId = () => useAction(UPDATE_ASPD_WEAPON_ID);
export const useUpdateAspdLefthandId = () => useAction(UPDATE_ASPD_LEFTHAND_ID);
export const useUpdateAspdEquipMod = () => useAction(UPDATE_ASPD_EQUIP_MOD);
export const useUpdateAspdEquipFixed = () => useAction(UPDATE_ASPD_EQUIP_FIXED);
export const useUpdateAspdSkillMod = () => useAction(UPDATE_ASPD_SKILL_MOD);
export const useUpdateAspdPotionMod = () => useAction(UPDATE_ASPD_POTION_MOD);
export const useUpdateAspdAdditialalMod = () =>
  useAction(UPDATE_ASPD_ADDITIONAL_MOD);
