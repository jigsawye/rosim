import React from 'react';
import { connect } from 'react-redux';
import { Popover } from 'antd';
import { floor } from 'lodash';

import { Card, CardText, CardGrid } from '../components/Layouts/CardLayout';
import * as AbilityTips from '../components/Tips/Ability';
import { getJobBonusStats } from '../utils/stats';
import getAspd from '../utils/aspd';
import { getMaxHp } from '../utils/hpsp';
import { statsMap } from '../constants/bonus';

const AbilityGrid = ({ label, children, ...props }) => {
  const ContentComponent = AbilityTips[label].content;
  return (
    <CardGrid>
      <Popover title={AbilityTips[label].title} content={<ContentComponent {...props} />}>
        <div>{label}</div>
      </Popover>
      <CardText>{children}</CardText>
    </CardGrid>
  );
};

const Ability = ({ maxHp, maxSp, atk, matk, def, mdef, hit, flee, dodge, cri, aspd }) => (
  <Card title="Ability" className="ant-card-contain-grid">
    <AbilityGrid label="MaxHP">{maxHp}</AbilityGrid>
    <AbilityGrid label="MaxSP">{maxSp}</AbilityGrid>
    <AbilityGrid label="ASPD" aspd={aspd}>{aspd}</AbilityGrid>
    <AbilityGrid label="ATK">{atk} + ___</AbilityGrid>
    <AbilityGrid label="MATK">{matk} + ___</AbilityGrid>
    <AbilityGrid label="CRI">{cri}</AbilityGrid>
    <AbilityGrid label="DEF">{def} + ___</AbilityGrid>
    <AbilityGrid label="MDEF">{mdef} + ___</AbilityGrid>
    <AbilityGrid label="HIT">{hit}</AbilityGrid>
    <AbilityGrid label="FLEE">{flee} + {dodge}</AbilityGrid>
  </Card>
);

const mapStateToProps = ({ stats, otherStats, baseLevel, jobLevel, job, aspd, hpsp }) => {
  const jobBonusStats = getJobBonusStats(jobLevel, job);
  const { weaponId } = aspd;
  const [str, agi, vit, int, dex, luk] = statsMap.map(key => stats[key] + jobBonusStats[key] + otherStats[key]);
  const [mainAtkStat, subAtkStat] = weaponId === 10 ? [dex, str] : [str, dex];

  return {
    maxHp: getMaxHp(baseLevel, job, vit, hpsp),
    maxSp: 'TODO',
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
