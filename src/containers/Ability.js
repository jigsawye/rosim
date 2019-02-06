import React from 'react';
import { floor, round } from 'lodash';

import getAspd from '../utils/aspd';
import useStoreContext from '../hooks/useStoreContext';
import { AbilityTip } from '../components/Tips/Ability';
import { Card } from '../components/Layouts/CardLayout';
import { getJobBonusStats, getSkillBuffStats } from '../utils/stats';
import { getMaxHp, getMaxSp } from '../utils/hpsp';
import { statsMap } from '../constants/bonus';

const useAbilityStore = () => {
  const [
    { stats, otherStats, baseLevel, jobLevel, job, aspd, hpsp, skills },
  ] = useStoreContext();

  const jobBonusStats = getJobBonusStats(jobLevel, job);
  const skillBuffStats = getSkillBuffStats(skills);
  const { weaponId } = aspd;
  const [str, agi, vit, int, dex, luk] = statsMap.map(
    key =>
      stats[key] + jobBonusStats[key] + otherStats[key] + skillBuffStats[key]
  );
  const [mainAtkStat, subAtkStat] = weaponId === 10 ? [dex, str] : [str, dex];
  const castTime = 1 - round(Math.sqrt((dex * 2 + int) / 530), 5);

  return {
    maxHp: getMaxHp(baseLevel, job, vit, hpsp),
    maxSp: getMaxSp(baseLevel, job, int, hpsp),
    atk: mainAtkStat + floor(baseLevel / 4 + luk / 3 + subAtkStat / 5),
    matk: floor(baseLevel / 4 + int * 1.5 + luk / 3 + dex / 5),
    hit: floor(luk / 3) + dex + baseLevel + 175,
    flee: floor(luk / 5) + agi + baseLevel + 100,
    dodge: floor(luk / 10) + 1,
    cri: round(luk * 0.3 + 2.2, 2),
    def: floor(agi / 5 + (baseLevel + vit) / 2),
    mdef: int + floor(baseLevel / 4 + (vit + dex) / 5),
    castTime: castTime < 0 ? 0 : castTime,
    aspd: getAspd(job, agi, dex, aspd),
  };
};

function Ability() {
  const {
    maxHp,
    maxSp,
    atk,
    matk,
    def,
    mdef,
    hit,
    flee,
    dodge,
    cri,
    aspd,
    castTime,
  } = useAbilityStore();

  return (
    <Card className="ant-card-contain-grid">
      <AbilityTip label="MaxHP">{maxHp}</AbilityTip>
      <AbilityTip label="MaxSP">{maxSp}</AbilityTip>
      <AbilityTip label="ASPD" aspd={aspd}>
        {aspd}
      </AbilityTip>
      <AbilityTip label="ATK" suffix="+ ___">
        {atk}
      </AbilityTip>
      <AbilityTip label="MATK" suffix="+ ___">
        {matk}
      </AbilityTip>
      <AbilityTip label="CRI">{cri}</AbilityTip>
      <AbilityTip label="DEF" suffix="+ ___">
        {def}
      </AbilityTip>
      <AbilityTip label="MDEF" suffix="+ ___">
        {mdef}
      </AbilityTip>
      <AbilityTip label="HIT">{hit}</AbilityTip>
      <AbilityTip label="FLEE" suffix={`+ ${dodge}`}>
        {flee}
      </AbilityTip>
      <AbilityTip label="CastTime" castTime={castTime} suffix="%">
        {round(castTime * 100, 3)}
      </AbilityTip>
    </Card>
  );
}

export default Ability;
