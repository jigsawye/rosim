import { isNumber, defaultTo } from 'lodash';

export default (data) => {
  const { baseLevel, jobLevel, job, stats, otherStats, aspd } = data;
  const { weaponId, lefthandId } = aspd;
  return {
    baseLevel,
    jobLevel,
    job: isNumber(job) ? ['SWORDMAN', 'KNIGHT'] : job,
    stats,
    otherStats,
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
