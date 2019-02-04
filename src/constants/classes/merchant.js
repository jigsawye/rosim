import {
  ALCHEMIST,
  BLACKSMITH,
  CREATOR,
  GENETIC,
  MECHANIC,
  MERCHANT,
  SECOND,
  THIRD,
  TRANSCENDENT_SECOND,
  WHITESMITH,
} from './classNames';

export default {
  value: MERCHANT,
  label: '商人',
  children: [
    {
      value: BLACKSMITH,
      type: SECOND,
      label: '鐵匠',
    },
    {
      value: ALCHEMIST,
      type: SECOND,
      label: '鍊金術師',
    },
    {
      value: WHITESMITH,
      type: TRANSCENDENT_SECOND,
      label: '神工匠',
    },
    {
      value: CREATOR,
      type: TRANSCENDENT_SECOND,
      label: '創造者',
    },
    {
      value: MECHANIC,
      type: THIRD,
      label: '機械工匠',
    },
    {
      value: GENETIC,
      type: THIRD,
      label: '基因學者',
    },
  ],
};
