import useAction from '../hooks/useAction';
import { SET_BASE_LEVEL, SET_JOB, SET_JOB_LEVEL } from '../constants/types';

export const useSetBaseLevel = () => useAction(SET_BASE_LEVEL);
export const useSetJobLevel = () => useAction(SET_JOB_LEVEL);
export const useSetJob = () => useAction(SET_JOB);
