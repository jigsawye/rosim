import PropTypes from 'prop-types';
import React from 'react';
import { Popover } from 'antd';
import { floor, round } from 'lodash';

import getAspd from '../utils/aspd';
import useStoreContext from '../hooks/useStoreContext';
import { Card, CardGrid, CardText } from '../components/Layouts/CardLayout';
import { getJobBonusStats, getSkillBuffStats } from '../utils/stats';
import { getMaxHp, getMaxSp } from '../utils/hpsp';
import { statsMap } from '../constants/bonus';
import * as AbilityTips from '../components/Tips/Ability';

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

const AbilityGrid = ({ label, children, ...props }) => {
  const ContentComponent = AbilityTips[label];
  return (
    <CardGrid>
      <Popover
        title={ContentComponent.title}
        content={<ContentComponent {...props} />}
      >
        <div>{label}</div>
      </Popover>
      <CardText>{children}</CardText>
    </CardGrid>
  );
};

AbilityGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  label: PropTypes.string.isRequired,
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
    <Card title="Ability" className="ant-card-contain-grid">
      <AbilityGrid label="MaxHP">{maxHp}</AbilityGrid>
      <AbilityGrid label="MaxSP">{maxSp}</AbilityGrid>
      <AbilityGrid label="ASPD" aspd={aspd}>
        {aspd}
      </AbilityGrid>
      <AbilityGrid label="ATK">{atk} + ___</AbilityGrid>
      <AbilityGrid label="MATK">{matk} + ___</AbilityGrid>
      <AbilityGrid label="CRI">{cri}</AbilityGrid>
      <AbilityGrid label="DEF">{def} + ___</AbilityGrid>
      <AbilityGrid label="MDEF">{mdef} + ___</AbilityGrid>
      <AbilityGrid label="HIT">{hit}</AbilityGrid>
      <AbilityGrid label="FLEE">
        {flee} + {dodge}
      </AbilityGrid>
      <AbilityGrid label="CastTime" castTime={castTime}>
        {round(castTime * 100, 3)} %
      </AbilityGrid>
    </Card>
  );
}

export default Ability;
