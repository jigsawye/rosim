import { isNumber, defaultTo } from 'lodash';

export default (data) => {
  const { baseLevel, jobLevel, job, stats, otherStats, aspd, hpsp } = data;
  const { weaponId, lefthandId } = aspd;
  return {
    baseLevel,
    jobLevel,
    job: isNumber(job) ? ['SWORDMAN', 'KNIGHT'] : job,
    stats,
    otherStats,
    hpsp: {
      hpAddMod: defaultTo(hpsp.hpAddMod, 0),
      hpMultiMod: defaultTo(hpsp.hpMultiMod, 0),
      spAddMod: defaultTo(hpsp.spAddMod, 0),
      spMultiMod: defaultTo(hpsp.spMultiMod, 0),
    },
    aspd: {
      weaponId,
      lefthandId,
      equipFixed: 0,
      equipMod: defaultTo(aspd.equltmentsAddition, aspd.equipMod),
      skillMod: defaultTo(aspd.skillsAddition, aspd.skillMod),
      potionMod: defaultTo(aspd.potionAddition, aspd.potionMod),
    },
  };
};
