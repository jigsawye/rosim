import { handleActions } from 'redux-actions';
import { find } from 'lodash';
import * as types from '../constants/types';
import { getJobType } from '../constants/classes';
import { THIRD } from '../constants/classes/classNames';
import { getMaxBaseLevel, getMaxJobLevel, getMaxStats } from '../constants/ranges';
import weapons from '../constants/weapons';
import formatOldData from '../utils/formatOldData';

const initialState = {
  baseLevel: 1,
  jobLevel: 1,
  job: ['SWORDMAN', 'KNIGHT'],
  stats: {
    str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1,
  },
  otherStats: {
    str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0,
  },
  hpsp: {
    hpAddMod: 0,
    hpMultiMod: 0,
    spAddMod: 0,
    spMultiMod: 0,
  },
  aspd: {
    weaponId: 0,
    lefthandId: 100,
    equipFixed: 0,
    equipMod: 0,
    skillMod: 0,
    potionMod: 0,
  },
};

export default handleActions({
  [types.SET_BASE_LEVEL]: (state, action) => ({
    ...state, baseLevel: Number(action.payload),
  }),
  [types.SET_JOB_LEVEL]: (state, action) => ({
    ...state, jobLevel: Number(action.payload),
  }),
  [types.SET_JOB]: (state, action) => {
    const { str, agi, vit, int, dex, luk } = state.stats;
    const type = getJobType(action.payload);
    const maxBaseLevel = getMaxBaseLevel(action.payload);
    const maxJobLevel = getMaxJobLevel(action.payload);
    const maxStats = getMaxStats(action.payload);
    const baseLevel = state.baseLevel > maxBaseLevel ? maxBaseLevel :
      (type === THIRD && state.baseLevel < 99) ? 99 : state.baseLevel;
    const jobLevel = state.jobLevel <= maxJobLevel ? state.jobLevel : maxJobLevel;
    return {
      ...state,
      baseLevel,
      jobLevel,
      job: action.payload,
      stats: {
        str: str <= maxStats ? str : maxStats,
        agi: agi <= maxStats ? agi : maxStats,
        vit: vit <= maxStats ? vit : maxStats,
        int: int <= maxStats ? int : maxStats,
        dex: dex <= maxStats ? dex : maxStats,
        luk: luk <= maxStats ? luk : maxStats,
      },
      aspd: {
        ...state.aspd,
        weaponId: 0,
        lefthandId: 100,
      },
    };
  },
  [types.SET_STAT]: (state, action) => ({
    ...state,
    stats: {
      ...state.stats,
      [action.payload.key]: Number(action.payload.stat),
    },
  }),
  [types.SET_OTHER_STAT]: (state, action) => ({
    ...state,
    otherStats: {
      ...state.otherStats,
      [action.payload.key]: Number(action.payload.stat),
    },
  }),
  [types.LOAD_SAVE_DATA]: (state, action) => formatOldData(action.payload),
  [types.UPDATE_ASPD_WEAPON_ID]: (state, action) => {
    const { lefthand } = find(weapons, ['id', action.payload]);
    const lefthandId = lefthand ? state.aspd.lefthandId : 100;
    return {
      ...state,
      aspd: {
        ...state.aspd,
        lefthandId,
        weaponId: action.payload,
      },
    };
  },
  [types.UPDATE_ASPD_LEFTHAND_ID]: (state, action) => ({
    ...state,
    aspd: {
      ...state.aspd,
      lefthandId: action.payload,
    },
  }),
  [types.UPDATE_ASPD_EQUIP_MOD]: (state, action) => ({
    ...state,
    aspd: {
      ...state.aspd,
      equipMod: action.payload,
    },
  }),
  [types.UPDATE_ASPD_EQUIP_FIXED]: (state, action) => ({
    ...state,
    aspd: {
      ...state.aspd,
      equipFixed: action.payload,
    },
  }),
  [types.UPDATE_ASPD_SKILL_MOD]: (state, action) => ({
    ...state,
    aspd: {
      ...state.aspd,
      skillMod: action.payload,
    },
  }),
  [types.UPDATE_ASPD_POTION_MOD]: (state, action) => ({
    ...state,
    aspd: {
      ...state.aspd,
      potionMod: action.payload,
    },
  }),
  [types.UPDATE_HP_ADD_MOD]: (state, action) => ({
    ...state,
    hpsp: {
      ...state.hpsp,
      hpAddMod: action.payload,
    },
  }),
  [types.UPDATE_HP_MULTI_MOD]: (state, action) => ({
    ...state,
    hpsp: {
      ...state.hpsp,
      hpMultiMod: action.payload,
    },
  }),
  [types.UPDATE_SP_ADD_MOD]: (state, action) => ({
    ...state,
    hpsp: {
      ...state.hpsp,
      spAddMod: action.payload,
    },
  }),
  [types.UPDATE_SP_MULTI_MOD]: (state, action) => ({
    ...state,
    hpsp: {
      ...state.hpsp,
      spMultiMod: action.payload,
    },
  }),
}, initialState);
