import { find, floor } from 'lodash';
import aspdTable from '../constants/aspdTable';

export const getAspdFrequency = aspd => floor(50 / (200 - Number(aspd)), 2);

const getLefthandBaseAspd = (lefthandId, lefthand, shieldAspd) => {
  if (lefthandId === 100) {
    return 0;
  } else if (lefthandId === 101) {
    return shieldAspd
  }
  return find(lefthand, ['id', lefthandId]).baseAspd;
}

const getAgiModifier = (hasLefthandWeapon, weaponId) => {
  if (hasLefthandWeapon) {
    return 10.01;
  } else if (weaponId === 10) {
    return 10;
  }
  return 1120 / 111;
}

const getAspdPenalty = (hasLefthandWeapon, baseAspd) => {
  if (hasLefthandWeapon) {
    return 1.04518;
  } else if (baseAspd >= 145) {
    return 1 - (baseAspd - 144) / 50;
  }
  return 1;
}

export default (job, agi, dex, aspd) => {
  const { weaponId, lefthandId, equipMod, equipFixed, skillMod, potionMod } = aspd;
  const { weapons, shieldAspd, lefthand = [] } = find(aspdTable, ['job', job[1]]);
  const { baseAspd } = find(weapons, ['id', weaponId]);

  const lefthandBaseAspd = getLefthandBaseAspd(lefthandId, lefthand, shieldAspd);
  const aspdModifier = potionMod + skillMod;
  const hasLefthandWeapon = lefthandBaseAspd > 0;
  const lefthandPenalty = hasLefthandWeapon ? (lefthandBaseAspd - 194) / 4 : lefthandBaseAspd;
  const agiModifier = getAgiModifier(hasLefthandWeapon, weaponId);
  const aspdPenalty = getAspdPenalty(hasLefthandWeapon, baseAspd);

  const aspdA = baseAspd + lefthandPenalty + Math.sqrt(agi * agiModifier + dex * 11 / 60) * aspdPenalty;
  const aspdB = 200 - (200 - aspdA) * (1 - aspdModifier / 100);
  const finalAspd = 195 - (195 - aspdB) * (1 - equipMod / 100) + equipFixed;
  return floor(finalAspd, 2);
};
