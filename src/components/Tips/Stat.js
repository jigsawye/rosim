import React from 'react';

export const str = {
  title: 'STR (力量)',
  content: (
    <div>
      <p>每 +1 武器 ATK +0.5% (弓箭、樂器、鞭子、槍砲以外)</p>
      <p>每 +1 素質 ATK +1 (弓箭、樂器、鞭子、槍砲以外)</p>
      <p>每 +5 素質 ATK +1 (弓箭、樂器、鞭子、槍砲)</p>
      <p>每 +1 負重 +30 (純素質，不含加成)</p>
      <p>近戰系的傷害來源</p>
      <p>負重 50% 以上無法自然回復 HP、SP</p>
      <p>負重 90% 以上無法攻擊與使用技能</p>
    </div>
  ),
};

export const agi = {
  title: 'AGI (敏捷)',
  content: (
    <div>
      <p>每 +1 Flee+1</p>
      <p>每 +5 減算物理防禦+1</p>
      <p>每 +1 睡眠抗性+1% 時間-1%</p>
      <p>每 +1 出血抗性+1% 時間-1%</p>
      <p>攻擊速度增加</p>
    </div>
  ),
};

export const vit = {
  title: 'VIT (體質)',
  content: (
    <div>
      <p>每 +2 減算物理防禦+1</p>
      <p>每 +5 減算魔法防御+1</p>
      <p>每 +5 HP回復力+1</p>
      <p>(HP回復力=[Vit÷5]+[MHP÷200])</p>
      <p>每 +1 MAXHP +1%</p>
      <p>每 +1 HP回復道具回復量 +2%</p>
      <p>每 +1 暈眩抗性 +1% 時間 -1%</p>
      <p>每 +1 中毒抗性 +1% 時間 -1%</p>
    </div>
  ),
};
export const int = {
  title: 'INT (智力)',
  content: (
    <div>
      <p>每 +1 MATK +1</p>
      <p>每 +2 MATK +1</p>
      <p>每 +1 減算魔法防禦 +1</p>
      <p>每 +6 SP回復力 +1</p>
      <p>(INT 超過 120 時 SP 回復力加成 = 1 + (INT - 120) / 2 + 4)</p>
      <p>每 +1 MAXSP +1%</p>
      <p>每 +1 SP回復道具回復量 +2%</p>
      <p>每 +1 變動詠唱時間減少 (效果為 DEX 的一半)</p>
      <p>(INT / 2 + DEX = 265 就是無變動詠唱)</p>
      <p>每+1 沉默抗性+1% 時間-1%</p>
    </div>
  ),
};
export const dex = {
  title: 'DEX (靈巧)',
  content: (
    <div>
      <p>每 +1 武器 ATK + 0.5% (弓箭、樂器、鞭子、槍砲)</p>
      <p>每 +1 素質 ATK +1 (弓箭、樂器、鞭子、槍砲)</p>
      <p>每 +5 素質 ATK +1 (弓箭、樂器、鞭子、槍砲以外)</p>
      <p>每 +1 Hit +1</p>
      <p>每 +5 MATK +1</p>
      <p>每 +5 減算魔法防禦 +1</p>
      <p>每 +1 變動詠唱時間減少 (INT / 2 + DEX = 265就是無變動詠唱)</p>
      <p>ASPD 增加 (影響度極小)</p>
    </div>
  ),
};
export const luk = {
  title: 'LUK (幸運)',
  content: (
    <div>
      <p>每 +1 CRI +0.3</p>
      <p>每 +3 素質 ATK +1</p>
      <p>每 +3 MATK +1</p>
      <p>每 +3 Hit +1</p>
      <p>每 +5 Flee +1</p>
      <p>每 +5 抗 CRI +1</p>
      <p>每 +10 完全迴避率 +1</p>
      <p>每 +1 詛咒抗性 +1% 時間 -1%</p>
      <p>每 +1 混亂抗性 +1% 時間 -1%</p>
      <p>每 +3 增加 1% 獵鷹/狼出擊率</p>
    </div>
  ),
};
