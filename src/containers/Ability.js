import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { floor } from 'lodash';

import { getJobBonusStats } from '../utils/stats';
import getAspd from '../utils/aspd';
import { statsMap } from '../constants/bonus';

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

const mapStateToProps = ({ stats, otherStats, baseLevel, jobLevel, job, aspd }) => {
  const jobBonusStats = getJobBonusStats(jobLevel, job);
  const { weaponId } = aspd;
  const [str, agi, vit, int, dex, luk] = statsMap.map(key => stats[key] + jobBonusStats[key] + otherStats[key]);
  const [mainAtkStat, subAtkStat] = weaponId === 10 ? [dex, str] : [str, dex];

  return {
    atk: mainAtkStat + floor(baseLevel / 4 + luk / 3 + subAtkStat / 5),
    matk: floor(baseLevel / 4 + int * 1.5 + luk / 3 + dex / 5),
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
