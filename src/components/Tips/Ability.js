import React, { Component } from 'react';
import { InputNumber, Switch } from 'antd';
import { round } from 'lodash';
import { getAspdFrequency } from '../../utils/aspd';

export const ASPD = {
  title: 'ASPD (攻擊速度)',
  content: ({ aspd }) => (
    <div>
      <p>每秒攻擊次數：{ getAspdFrequency(aspd) }</p>
    </div>
  ),
};

export const MaxHP = {
  title: 'Max HP (最大生命值)',
  content: () => (
    <div>角色之最大生命值</div>
  ),
};

export const MaxSP = {
  title: 'Max SP (最大魔力值)',
  content: () => (
    <div>角色之最大魔力值</div>
  ),
};

export const ATK = {
  title: 'ATK (物理攻擊力)',
  content: () => (
    <div>
      <p>以此數值造成物理傷害</p>
    </div>
  ),
};

export const MATK = {
  title: 'MATK (魔法攻擊力)',
  content: () => (
    <div>
      <p>以此數值造成魔法傷害</p>
    </div>
  ),
};

export const DEF = {
  title: 'DEF (物理防禦力)',
  content: () => (
    <div>
      <p>前段為減算防禦力</p>
      <p>後段為乘算防禦力 [(4000 + def) / (4000 + def * 10)]</p>
    </div>
  ),
};

export const MDEF = {
  title: 'MDEF (魔法防禦力)',
  content: () => (
    <div>
      <p>前段為減算防禦力</p>
      <p>後段為乘算防禦力 [(1000 + def) / (1000 + def * 10)]</p>
    </div>
  ),
};

export const CRI = {
  title: 'CRI (必殺攻擊率)',
  content: () => (
    <div>
      <p>每次攻擊造成必殺攻擊的機率</p>
      <p>此為正確的爆擊率，RO 內的面板上顯示有誤</p>
    </div>
  ),
};

export const HIT = {
  title: 'HIT (命中率)',
  content: () => (
    <div>
      <p>以此數值與攻擊對象的迴避率算出命中的機率</p>
    </div>
  ),
};

export const FLEE = {
  title: 'FLEE (迴避率)',
  content: () => (
    <div>
      <p>前段為基礎迴避率，後段為完全迴避率</p>
      <p>以基礎迴避率與攻擊對象的命中率算出迴避的機率</p>
      <p>以完全迴避率不計攻擊對象命中直接迴避</p>
    </div>
  ),
};

class CastTimePopover extends Component {
  state = {
    skillCastTime: 0,
    equipCastTime: 0,
    isSource: true,
  }

  handleSkillCastTime = skillCastTime => this.setState({ skillCastTime });

  handleEquipCastTime = equipCastTime => this.setState({ equipCastTime });

  handleIsSource = isSource => this.setState({ isSource });

  render() {
    const { skillCastTime, equipCastTime, isSource } = this.state;
    const castTime = round(
      skillCastTime *
      (1 - equipCastTime / 100) *
      (isSource ? 0.6 : 1) *
      this.props.castTime, 2
    );
    return (
      <div>
        <p>以此百分比進行變詠減免</p>
        <div style={{ marginBottom: 5 }}>
          起源 <Switch size="small" checked={isSource} onChange={this.handleIsSource} />
        </div>
        <div style={{ marginBottom: 5 }}>
          <span>原始變詠 : </span>
          <InputNumber
            size="small"
            min={0}
            max={30}
            value={skillCastTime}
            onChange={this.handleSkillCastTime}/>
        </div>
        <div style={{ marginBottom: 5 }}>
          <span>卡裝減免 : </span>
          <InputNumber
            size="small"
            min={0}
            max={100}
            value={equipCastTime}
            onChange={this.handleEquipCastTime}/>
            %
        </div>
        <p>最終變詠 : {castTime}</p>
      </div>
    );
  }
}

export const CastTime = {
  title: 'Case Time (詠唱時間)',
  content: CastTimePopover,
};
