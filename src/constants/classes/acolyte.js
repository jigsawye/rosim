import { SECOND, TRANSCENDENT_SECOND, THIRD } from './classNames';
import { ACOLYTE, PRIEST, MONK, HIGH_PRIEST, CHAMPION, ARCH_BISHOP, SURA } from './classNames';

export default {
  value: ACOLYTE,
  label: '服事',
  children: [{
    value: PRIEST,
    type: SECOND,
    label: '祭司',
  }, {
    value: MONK,
    type: SECOND,
    label: '武道家',
  }, {
    value: HIGH_PRIEST,
    type: TRANSCENDENT_SECOND,
    label: '神官',
  }, {
    value: CHAMPION,
    type: TRANSCENDENT_SECOND,
    label: '武術宗師',
  }, {
    value: ARCH_BISHOP,
    type: THIRD,
    label: '大主教',
  }, {
    value: SURA,
    type: THIRD,
    label: '修羅',
  }],
};
