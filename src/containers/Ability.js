import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { getJobBonusStats } from '../utils/stats';

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

const Ability = ({ atk, matk, def, mdef, hit, flee, dodge, cri }) => (
  <Card title="Ability" className="ant-card-contain-grid">
    <AbilityGrid label="ATK">{atk} + ___ ± __</AbilityGrid>
    <AbilityGrid label="MATK">{matk} + ___ ± __</AbilityGrid>
    <AbilityGrid label="CRI">{cri}</AbilityGrid>
    <AbilityGrid label="DEF">{def} + ___</AbilityGrid>
    <AbilityGrid label="MDEF">{def} + ___</AbilityGrid>
    <AbilityGrid label="ASPD">___</AbilityGrid>
    <AbilityGrid label="HIT">{hit}</AbilityGrid>
    <AbilityGrid label="FLEE">{flee} + {dodge}</AbilityGrid>
  </Card>
);

const mapStateToProps = ({ stats, baseLevel, jobLevel, job }) => {
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
  };
};

export default connect(mapStateToProps)(Ability);
