import useAction from '../hooks/useAction';
import { SET_OTHER_STAT, SET_STAT } from '../constants/types';

export const useSetStat = () => useAction(SET_STAT);
export const useSetOtherStat = () => useAction(SET_OTHER_STAT);
