import {
  ASSASSIN,
  ASSASSIN_CROSS,
  GUILLOTINE_CROSS,
  ROGUE,
  SECOND,
  SHADOW_CHASER,
  STALKER,
  THIEF,
  THIRD,
  TRANSCENDENT_SECOND,
} from './classNames';

export default {
  value: THIEF,
  label: '盜賊',
  children: [
    {
      value: ASSASSIN,
      type: SECOND,
      label: '刺客',
    },
    {
      value: ROGUE,
      type: SECOND,
      label: '流氓',
    },
    {
      value: ASSASSIN_CROSS,
      type: TRANSCENDENT_SECOND,
      label: '十字刺客',
    },
    {
      value: STALKER,
      type: TRANSCENDENT_SECOND,
      label: '神行太保',
    },
    {
      value: GUILLOTINE_CROSS,
      type: THIRD,
      label: '十字斬首者',
    },
    {
      value: SHADOW_CHASER,
      type: THIRD,
      label: '魅影追蹤者',
    },
  ],
};
