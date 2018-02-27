import React from 'react';
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
