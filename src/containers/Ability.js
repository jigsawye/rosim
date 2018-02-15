import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { getJobBonusStats } from '../utils/stats';
import { jobUsableWeapons } from '../constants/weapons';

const AbilityText = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const AbilityGrid = ({ label, children }) => (
  <Card.Grid style={{ textAlign: 'center' }}>
    <div>{label}</div>
    <AbilityText>{children}</AbilityText>
  </Card.Grid>
);

const Ability = ({ atk, matk, def, mdef, hit, flee, dodge, cri, aspd }) => (
  <Card title="Ability" className="ant-card-contain-grid">
    <AbilityGrid label="ATK">{atk} + ___ ± __</AbilityGrid>
    <AbilityGrid label="MATK">{matk} + ___ ± __</AbilityGrid>
    <AbilityGrid label="CRI">{cri}</AbilityGrid>
    <AbilityGrid label="DEF">{def} + ___</AbilityGrid>
    <AbilityGrid label="MDEF">{mdef} + ___</AbilityGrid>
    <AbilityGrid label="ASPD">{aspd}</AbilityGrid>
    <AbilityGrid label="HIT">{hit}</AbilityGrid>
    <AbilityGrid label="FLEE">{flee} + {dodge}</AbilityGrid>
  </Card>
);

const getAspd = (job, agi, dex, { weaponId, lefthandId, equltmentsAddition, skillsAddition, potionAddition }) => {
  const { weapons, shieldAspd, lefthand = [] } = jobUsableWeapons.find(({ jobId }) => jobId === job);
  const { baseAspd } = weapons.find(({ id }) => id === weaponId);
  const lefthandBaseAspd = lefthandId === 100 ? 0 :
    lefthandId === 101 ? shieldAspd : lefthand.find(({ id }) => id === lefthandId).baseAspd;
  const aspdUpA = potionAddition + skillsAddition;
  const aspdUpB = equltmentsAddition;
  const aspdUpPoint = 0;
  const hasLefthandWeapon = lefthandBaseAspd > 0;
  const lefthandAdjust = hasLefthandWeapon ? (lefthandBaseAspd - 194) / 4 : lefthandBaseAspd;
  const agiAdjust = hasLefthandWeapon ? 10.01 :
    weaponId === 10 ? 10 : 1120 / 111;
  const aspdMultiplier = hasLefthandWeapon ? 1.04518 :
    baseAspd >= 145 ? (1 - (baseAspd - 144) / 50) : 1;

  const aspdA = baseAspd + lefthandAdjust + Math.sqrt(agi * agiAdjust + dex * 11 / 60) * aspdMultiplier;
  const aspdB = 200 - (200 - aspdA) * (1 - aspdUpA / 100);
  const finalAspd = 195 - (195 - aspdB) * (1 - aspdUpB / 100) + aspdUpPoint;
  return finalAspd.toFixed(2);
};

const mapStateToProps = ({ stats, baseLevel, jobLevel, job, aspd }) => {
  const jobBonusStats = getJobBonusStats(jobLevel, job);
  return {
    atk: stats.str + jobBonusStats.str +
      Math.floor(baseLevel / 4) +
      Math.floor((stats.luk + jobBonusStats.luk) / 3) +
      Math.floor((stats.dex + jobBonusStats.dex) / 5),
    matk: Math.floor(baseLevel / 4) +
      Math.floor((stats.int + jobBonusStats.int) * 1.5) +
      Math.floor((stats.luk + jobBonusStats.luk) / 3) +
      Math.floor((stats.dex + jobBonusStats.dex) / 5),
    hit: Math.floor((stats.luk + jobBonusStats.luk) / 3) +
      stats.dex + jobBonusStats.dex + baseLevel + 175,
    flee: Math.floor((stats.luk + jobBonusStats.luk) / 5) +
      stats.agi + jobBonusStats.agi + baseLevel + 100,
    dodge: Math.floor((stats.luk + jobBonusStats.luk) / 10) + 1,
    cri: Math.floor((stats.luk + jobBonusStats.luk) * 0.3) + 1,
    def: Math.floor((stats.agi + jobBonusStats.agi) / 5) +
      Math.floor((baseLevel + stats.vit + jobBonusStats.vit) / 2),
    mdef: stats.int + jobBonusStats.int +
      Math.floor(baseLevel / 4) +
      Math.floor((stats.vit + jobBonusStats.vit) / 5) +
      Math.floor((stats.dex + jobBonusStats.dex) / 5),
    aspd: getAspd(job, stats.agi + jobBonusStats.agi, stats.dex + jobBonusStats.dex, aspd),
  };
};

export default connect(mapStateToProps)(Ability);
