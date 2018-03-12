import { range } from 'lodash';

const maxLevel10 = range(10, 0, -1);

export const acolyteSkills = [
  {
    key: 'BLESSING',
    name: '天使之賜福',
    maxLevel: maxLevel10,
    isToggle: false,
    buffs: maxLevel10.map(level => ({ level, status: { str: level, int: level, dex: level } })),
  },
  {
    key: 'INCREASE_AGI',
    name: '加速術',
    maxLevel: maxLevel10,
    isToggle: false,
    buffs: maxLevel10.map(level => ({ level, status: { agi: level + 2 } })),
  },
  {
    key: 'GLORIA',
    name: '幸運之頌歌',
    isToggle: true,
    buffs: { luk: 30 },
  },
];
