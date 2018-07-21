import { find, findIndex, remove } from 'lodash';
import handleActions from '../utils/handleActions';
import * as types from '../constants/types';
import { getJobType } from '../constants/classes';
import { THIRD } from '../constants/classes/classNames';
import {
  getMaxBaseLevel,
  getMaxJobLevel,
  getMaxStats,
} from '../constants/ranges';
import weapons from '../constants/weapons';
import formatOldData from '../utils/formatOldData';

const initialState = {
  baseLevel: 1,
  jobLevel: 1,
  job: ['SWORDMAN', 'KNIGHT'],
  stats: {
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
  },
  otherStats: {
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
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
    additionalMod: [],
  },
  skills: [],
};

export default handleActions(
  {
    [types.SET_BASE_LEVEL]: (state, { payload }) => {
      state.baseLevel = Number(payload);
    },
    [types.SET_JOB_LEVEL]: (state, { payload }) => {
      state.jobLevel = Number(payload);
    },
    [types.SET_JOB]: (state, { payload }) => {
      const { str, agi, vit, int, dex, luk } = state.stats;
      const type = getJobType(payload);
      const maxBaseLevel = getMaxBaseLevel(payload);
      const maxJobLevel = getMaxJobLevel(payload);
      const maxStats = getMaxStats(payload);

      let { baseLevel } = state;
      const jobLevel =
        state.jobLevel <= maxJobLevel ? state.jobLevel : maxJobLevel;
      if (state.baseLevel > maxBaseLevel) {
        baseLevel = maxBaseLevel;
      } else if (type === THIRD && state.baseLevel < 99) {
        baseLevel = 99;
      }

      state.baseLevel = baseLevel;
      state.jobLevel = jobLevel;
      state.job = payload;
      state.stats.str = str <= maxStats ? str : maxStats;
      state.stats.agi = agi <= maxStats ? agi : maxStats;
      state.stats.vit = vit <= maxStats ? vit : maxStats;
      state.stats.int = int <= maxStats ? int : maxStats;
      state.stats.dex = dex <= maxStats ? dex : maxStats;
      state.stats.luk = luk <= maxStats ? luk : maxStats;
      state.aspd.weaponId = 0;
      state.aspd.lefthandId = 100;
    },
    [types.SET_STAT]: (state, { payload }) => {
      state.stats[payload.key] = Number(payload.stat);
    },
    [types.SET_OTHER_STAT]: (state, { payload }) => {
      state.otherStats[payload.key] = Number(payload.stat);
    },
    [types.LOAD_SAVE_DATA]: formatOldData,
    [types.UPDATE_ASPD_WEAPON_ID]: (state, { payload }) => {
      const { lefthand } = find(weapons, ['id', payload]);
      const lefthandId = lefthand ? state.aspd.lefthandId : 100;

      state.aspd.lefthandId = lefthandId;
      state.aspd.weaponId = payload;
    },
    [types.UPDATE_ASPD_LEFTHAND_ID]: (state, { payload }) => {
      state.aspd.lefthandId = payload;
    },
    [types.UPDATE_ASPD_EQUIP_MOD]: (state, { payload }) => {
      state.aspd.equipMod = payload;
    },
    [types.UPDATE_ASPD_EQUIP_FIXED]: (state, { payload }) => {
      state.aspd.equipFixed = payload;
    },
    [types.UPDATE_ASPD_SKILL_MOD]: (state, { payload }) => {
      state.aspd.skillMod = payload;
    },
    [types.UPDATE_ASPD_POTION_MOD]: (state, { payload }) => {
      state.aspd.potionMod = payload;
    },
    [types.UPDATE_ASPD_ADDITIONAL_MOD]: (state, { payload }) => {
      state.aspd.additionalMod = payload;
    },

    [types.UPDATE_HP_ADD_MOD]: (state, { payload }) => {
      state.hpsp.hpAddMod = payload;
    },
    [types.UPDATE_HP_MULTI_MOD]: (state, { payload }) => {
      state.hpsp.hpMultiMod = payload;
    },
    [types.UPDATE_SP_ADD_MOD]: (state, { payload }) => {
      state.hpsp.spAddMod = payload;
    },
    [types.UPDATE_SP_MULTI_MOD]: (state, { payload }) => {
      state.hpsp.spMultiMod = payload;
    },

    [types.UPDATE_BUFF_SKILL]: (state, { payload }) => {
      const { key, value } = payload;
      const existIndex = findIndex(state.skills, { key });
      const isExist = existIndex >= 0;
      if (isExist && !value) {
        remove(state.skills, { key });
      } else if (!isExist) {
        state.skills.push({ key, value });
      } else {
        state.skills[existIndex].value = value;
      }
    },
  },
  initialState
);
