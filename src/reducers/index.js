import * as types from '../constants/types';
import { weapons } from '../constants/weapons';

const initialState = {
  baseLevel: 1,
  jobLevel: 1,
  job: 7,
  stats: {
    str: 1, agi: 1, vit: 1, int: 1, dex: 1, luk: 1,
  },
  aspd: {
    weaponId: 0,
    lefthandId: 100,
    equltmentsAddition: 0,
    skillsAddition: 0,
    potionAddition: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_BASE_LEVEL:
      return { ...state, baseLevel: Number(action.level) };
    case types.SET_JOB_LEVEL:
      return { ...state, jobLevel: Number(action.level) };
    case types.SET_JOB:
      return {
        ...state,
        job: Number(action.job),
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
    case types.LOAD_SAVE_DATA:
      return { ...action.data };
    case types.UPDATE_ASPD_WEAPON_ID:
      const { lefthand } = weapons.find(({ id }) => id === action.weaponId);
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
    case types.UPDATE_ASPD_EQULTMENTS_ADDITION:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          equltmentsAddition: action.equltmentsAddition,
        },
      };
    case types.UPDATE_ASPD_SKILLS_ADDITION:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          skillsAddition: action.skillsAddition,
        },
      };
    case types.UPDATE_ASPD_POTION_ADDITION:
      return {
        ...state,
        aspd: {
          ...state.aspd,
          potionAddition: action.potionAddition,
        },
      };
    default:
      return state;
  }
};
