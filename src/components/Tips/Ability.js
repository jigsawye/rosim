import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputNumber, Switch } from 'antd';
import { round } from 'lodash';

import { getAspdFrequency } from '../../utils/aspd';

function ASPD({ aspd }) {
  return (
    <div>
      <p>每秒攻擊次數：{getAspdFrequency(aspd)}</p>
    </div>
  );
}

ASPD.propTypes = {
  aspd: PropTypes.number.isRequired,
};

ASPD.title = 'ASPD (攻擊速度)';

function MaxHP() {
  return <div>角色之最大生命值</div>;
}

MaxHP.title = 'Max HP (最大生命值)';

function MaxSP() {
  return <div>角色之最大魔力值</div>;
}

MaxSP.title = 'Max SP (最大魔力值)';

function ATK() {
  return (
    <div>
      <p>以此數值造成物理傷害</p>
    </div>
  );
}

ATK.title = 'ATK (物理攻擊力)';

function MATK() {
  return (
    <div>
      <p>以此數值造成魔法傷害</p>
    </div>
  );
}

MATK.title = 'MATK (魔法攻擊力)';

function DEF() {
  return (
    <div>
      <p>前段為減算防禦力</p>
      <p>後段為乘算防禦力 [(4000 + def) / (4000 + def * 10)]</p>
    </div>
  );
}

DEF.title = 'DEF (物理防禦力)';

function MDEF() {
  return (
    <div>
      <p>前段為減算防禦力</p>
      <p>後段為乘算防禦力 [(1000 + def) / (1000 + def * 10)]</p>
    </div>
  );
}

MDEF.title = 'MDEF (魔法防禦力)';

function CRI() {
  return (
    <div>
      <p>每次攻擊造成必殺攻擊的機率</p>
      <p>此為正確的爆擊率，RO 內的面板上顯示有誤</p>
    </div>
  );
}

CRI.title = 'CRI (必殺攻擊率)';

function HIT() {
  return (
    <div>
      <p>以此數值與攻擊對象的迴避率算出命中的機率</p>
    </div>
  );
}

HIT.title = 'HIT (命中率)';

function FLEE() {
  return (
    <div>
      <p>前段為基礎迴避率，後段為完全迴避率</p>
      <p>以基礎迴避率與攻擊對象的命中率算出迴避的機率</p>
      <p>以完全迴避率不計攻擊對象命中直接迴避</p>
    </div>
  );
}

FLEE.title = 'FLEE (迴避率)';

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

CastTime.title = 'Case Time (詠唱時間)';

export { MaxHP, MaxSP, ASPD, ATK, MATK, CRI, DEF, MDEF, HIT, FLEE, CastTime };
