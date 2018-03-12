import { isNumber, defaultTo } from 'lodash';

export default (state, { payload }) => {
  const { baseLevel, jobLevel, job, stats, otherStats, aspd, hpsp = {} } = payload;
  const { weaponId, lefthandId } = aspd;
  state.baseLevel = baseLevel;
  state.jobLevel = jobLevel;
  state.job = isNumber(job) ? ['SWORDMAN', 'KNIGHT'] : job;
  state.stats = stats;
  state.otherStats = otherStats;
  state.hpsp = {
    hpAddMod: defaultTo(hpsp.hpAddMod, 0),
    hpMultiMod: defaultTo(hpsp.hpMultiMod, 0),
    spAddMod: defaultTo(hpsp.spAddMod, 0),
    spMultiMod: defaultTo(hpsp.spMultiMod, 0),
  };
  state.aspd = {
    weaponId,
    lefthandId,
    equipFixed: 0,
    equipMod: defaultTo(aspd.equltmentsAddition, aspd.equipMod),
    skillMod: defaultTo(aspd.skillsAddition, aspd.skillMod),
    potionMod: defaultTo(aspd.potionAddition, aspd.potionMod),
  };
};
