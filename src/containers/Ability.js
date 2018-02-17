import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { floor } from 'lodash';

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
  <Card title="Ability" className="ant-card-contain-grid" style={{ marginTop: 15 }}>
    <AbilityGrid label="ATK">{atk} + ___</AbilityGrid>
    <AbilityGrid label="MATK">{matk} + ___</AbilityGrid>
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

const mapStateToProps = ({ stats, otherStats, baseLevel, jobLevel, job, aspd }) => {
  const jobBonusStats = getJobBonusStats(jobLevel, job);
  const { weaponId } = aspd;
  const statusKeys = ['str', 'agi', 'vit', 'int', 'dex', 'luk'];
  const [str, agi, vit, int, dex, luk] = statusKeys.map(key => stats[key] + jobBonusStats[key] + otherStats[key]);
  const [mainAtkStat, subAtkStat] = weaponId === 10 ? [dex, str] : [str, dex];

  return {
    atk: mainAtkStat + floor(baseLevel / 4 + luk / 3 + subAtkStat / 5),
    matk: floor(baseLevel / 4) + floor(int * 1.5) + floor(luk / 3) + floor(dex / 5),
    hit: floor(luk / 3) + dex + baseLevel + 175,
    flee: floor(luk / 5) + agi + baseLevel + 100,
    dodge: floor(luk / 10) + 1,
    cri: floor(luk / 3) + 1,
    def: floor(agi / 5 + (baseLevel + vit) / 2),
    mdef: int + floor(baseLevel / 4 + (vit + dex) / 5),
    aspd: getAspd(job, agi, dex, aspd),
  };
};

export default connect(mapStateToProps)(Ability);
