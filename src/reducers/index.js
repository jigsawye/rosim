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

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BASE_LEVEL:
      return { ...state, baseLevel: Number(action.level) };
    case types.SET_JOB_LEVEL:
      return { ...state, jobLevel: Number(action.level) };
    case types.SET_JOB:
      const { str, agi, vit, int, dex, luk } = state.stats;
      const type = getJobType(action.job);
      const maxBaseLevel = getMaxBaseLevel(action.job);
      const maxJobLevel = getMaxJobLevel(action.job);
      const maxStats = getMaxStats(action.job);
      const baseLevel = state.baseLevel > maxBaseLevel ? maxBaseLevel :
        (type === THIRD && state.baseLevel < 99) ? 99 : state.baseLevel;
      const jobLevel = state.jobLevel <= maxJobLevel ? state.jobLevel : maxJobLevel;
      return {
        ...state,
        baseLevel,
        jobLevel,
        job: [...action.job],
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
    case types.SET_STAT:
      return {
        ...state,
        stats: {
          ...state.stats,
          [action.key]: Number(action.stat),
        },
      };
    case types.SET_OTHER_STAT:
      return {
        ...state,
        otherStats: {
          ...state.otherStats,
          [action.key]: Number(action.stat),
        },
      };
    case types.LOAD_SAVE_DATA:
      return formatOldData(action.data);
    case types.UPDATE_ASPD_WEAPON_ID:
      const { lefthand } = find(weapons, ['id', action.weaponId]);
      const lefthandId = lefthand ? state.aspd.lefthandId : 100;
      return {
        ...state,
        aspd: {
          ...state.aspd,
          lefthandId,
          weaponId: action.weaponId,
        },
      };
    case types.UPDATE_ASPD_LEFTHAND_ID:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          lefthandId: action.lefthandId,
        },
      };
    case types.UPDATE_ASPD_EQUIP_MOD:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          equipMod: action.equipMod,
        },
      };
    case types.UPDATE_ASPD_EQUIP_FIXED:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          equipFixed: action.equipFixed,
        },
      };
    case types.UPDATE_ASPD_SKILL_MOD:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          skillMod: action.skillMod,
        },
      };
    case types.UPDATE_ASPD_POTION_MOD:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          potionMod: action.potionMod,
        },
      };
    case types.UPDATE_HP_ADD_MOD:
      return {
        ...state,
        hpsp: {
          ...state.hpsp,
          hpAddMod: action.hpAddMod,
        },
      };
    case types.UPDATE_HP_MULTI_MOD:
      return {
        ...state,
        hpsp: {
          ...state.hpsp,
          hpMultiMod: action.hpMultiMod,
        },
      };
    case types.UPDATE_SP_ADD_MOD:
      return {
        ...state,
        hpsp: {
          ...state.hpsp,
          spAddMod: action.spAddMod,
        },
      };
    case types.UPDATE_SP_MULTI_MOD:
      return {
        ...state,
        hpsp: {
          ...state.hpsp,
          spMultiMod: action.spMultiMod,
        },
      };
    default:
      return state;
  }
};
