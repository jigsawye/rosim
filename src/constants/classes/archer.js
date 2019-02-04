import {
  ARCHER,
  BARD,
  DANCER,
  GYPSY,
  HUNTER,
  MAESTRO,
  MINSTREL,
  RANGER,
  SECOND,
  SNIPER,
  THIRD,
  TRANSCENDENT_SECOND,
  WANDERER,
} from './classNames';

export default {
  value: ARCHER,
  label: '弓箭手',
  children: [
    {
      value: HUNTER,
      type: SECOND,
      label: '獵人',
    },
    {
      value: BARD,
      type: SECOND,
      label: '詩人',
    },
    {
      value: DANCER,
      type: SECOND,
      label: '舞孃',
    },
    {
      value: SNIPER,
      type: TRANSCENDENT_SECOND,
      label: '神射手',
    },
    {
      value: MINSTREL,
      type: TRANSCENDENT_SECOND,
      label: '搞笑藝人',
    },
    {
      value: GYPSY,
      type: TRANSCENDENT_SECOND,
      label: '冷豔舞姬',
    },
    {
      value: RANGER,
      type: THIRD,
      label: '遊俠',
    },
    {
      value: MAESTRO,
      type: THIRD,
      label: '宮廷樂師',
    },
    {
      value: WANDERER,
      type: THIRD,
      label: '浪跡舞者',
    },
  ],
};
