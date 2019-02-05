import useAction from '../hooks/useAction';
import {
  UPDATE_HP_ADD_MOD,
  UPDATE_HP_MULTI_MOD,
  UPDATE_SP_ADD_MOD,
  UPDATE_SP_MULTI_MOD,
} from '../constants/types';

export const useUpdateHpAddMod = () => useAction(UPDATE_HP_ADD_MOD);
export const useUpdateHpMultiMod = () => useAction(UPDATE_HP_MULTI_MOD);
export const useUpdateSpAddMod = () => useAction(UPDATE_SP_ADD_MOD);
export const useUpdateSpMultiMod = () => useAction(UPDATE_SP_MULTI_MOD);
