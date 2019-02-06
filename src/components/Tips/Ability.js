import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputNumber, Popover, Statistic, Switch } from 'antd';
import { round } from 'lodash';

import { CardGrid } from '../Layouts/CardLayout';
import { getAspdFrequency } from '../../utils/aspd';

const MarginDiv = styled.div`
  margin-bottom: 5px;
`;

function CastTime({ castTime }) {
  const [skillCastTime, setSkillCastTime] = useState(0);
  const [equipCastTime, setEquipCastTime] = useState(0);
  const [isSource, setIsSource] = useState(true);

  return (
    <div>
      <p>以此百分比進行變詠減免</p>
      <MarginDiv>
        起源{' '}
        <Switch
          size="small"
          checked={isSource}
          onChange={checked => setIsSource(checked)}
        />
      </MarginDiv>
      <MarginDiv>
        <span>原始變詠 : </span>
        <InputNumber
          size="small"
          min={0}
          max={30}
          value={skillCastTime}
          onChange={setSkillCastTime}
        />
      </MarginDiv>
      <MarginDiv>
        <span>卡裝減免 : </span>
        <InputNumber
          size="small"
          min={0}
          max={100}
          value={equipCastTime}
          onChange={setEquipCastTime}
        />
        %
      </MarginDiv>
      <p>
        最終變詠 :{' '}
        {round(
          skillCastTime *
            (1 - equipCastTime / 100) *
            (isSource ? 0.6 : 1) *
            castTime,
          2
        )}
      </p>
    </div>
  );
}

CastTime.propTypes = {
  castTime: PropTypes.number.isRequired,
};

const getPopoverProps = ({ label, aspd, castTime }) => {
  switch (label) {
    default:
    case 'ASPD':
      return {
        title: 'ASPD (攻擊速度)',
        content: `每秒攻擊次數：${getAspdFrequency(aspd)}`,
      };

    case 'MaxHP':
      return {
        title: 'Max HP (最大生命值)',
        content: '角色之最大生命值',
      };

    case 'MaxSP':
      return {
        title: 'Max SP (最大魔力值)',
        content: '角色之最大魔力值',
      };

    case 'ATK':
      return {
        title: 'ATK (物理攻擊力)',
        content: '以此數值造成物理傷害',
      };

    case 'MATK':
      return {
        title: 'MATK (魔法攻擊力)',
        content: '以此數值造成魔法傷害',
      };

    case 'DEF':
      return {
        title: 'DEF (物理防禦力)',
        content: (
          <>
            <p>前段為減算防禦力</p>
            <p>後段為乘算防禦力 [(4000 + def) / (4000 + def * 10)]</p>
          </>
        ),
      };

    case 'MDEF':
      return {
        title: 'MDEF (魔法防禦力)',
        content: (
          <>
            <p>前段為減算防禦力</p>
            <p>後段為乘算防禦力 [(1000 + def) / (1000 + def * 10)]</p>
          </>
        ),
      };

    case 'CRI':
      return {
        title: 'CRI (必殺攻擊率)',
        content: (
          <>
            <p>每次攻擊造成必殺攻擊的機率</p>
            <p>此為正確的爆擊率，RO 內的面板上顯示有誤</p>
          </>
        ),
      };

    case 'HIT':
      return {
        title: 'HIT (命中率)',
        content: '以此數值與攻擊對象的迴避率算出命中的機率',
      };

    case 'FLEE':
      return {
        title: 'FLEE (迴避率)',
        content: (
          <>
            前段為基礎迴避率，後段為完全迴避率
            <br />
            以基礎迴避率與攻擊對象的命中率算出迴避的機率
            <br />
            以完全迴避率不計攻擊對象命中直接迴避
          </>
        ),
      };

    case 'CastTime':
      return {
        title: 'Case Time (詠唱時間)',
        content: <CastTime castTime={castTime} />,
      };
  }
};

function AbilityTip({ label, children, suffix, ...props }) {
  return (
    <CardGrid>
      <Statistic
        title={
          <Popover {...getPopoverProps({ label, ...props })}>{label}</Popover>
        }
        value={children}
        suffix={suffix}
      />
    </CardGrid>
  );
}

AbilityTip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  suffix: PropTypes.node,
};

AbilityTip.defaultProps = {
  suffix: null,
};

export { AbilityTip };
