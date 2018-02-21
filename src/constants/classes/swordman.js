import { SECOND, TRANSCENDENT_SECOND, THIRD } from './classNames';
import { SWORDMAN, KNIGHT, CRUSADER, LORD_KNIGHT, PALADIN, RUNE_KNIGHT, ROYAL_GUARD } from './classNames';

export default {
  value: SWORDMAN,
  label: '劍士',
  children: [{
    value: KNIGHT,
    type: SECOND,
    label: '騎士',
  }, {
    value: CRUSADER,
    type: SECOND,
    label: '十字軍',
  }, {
    value: LORD_KNIGHT,
    type: TRANSCENDENT_SECOND,
    label: '騎士領主',
  }, {
    value: PALADIN,
    type: TRANSCENDENT_SECOND,
    label: '聖殿十字軍',
  }, {
    value: RUNE_KNIGHT,
    type: THIRD,
    label: '盧恩騎士',
  }, {
    value: ROYAL_GUARD,
    type: THIRD,
    label: '皇家禁衛隊',
  }],
};
