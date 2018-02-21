import { find } from 'lodash';
import { prop, compose } from 'lodash';
import swordman from './swordman';
import mage from './mage';
import archer from './archer';
import merchant from './merchant';
import thief from './thief';
import acolyte from './acolyte';

const classes = [
  swordman,
  mage,
  archer,
  merchant,
  thief,
  acolyte,
];

export const getClass = ([firstClass, secondClass]) => {
  const { children } = find(classes, ['value', firstClass]);
  return find(children, ['value', secondClass]);
};

export const getClassName = compose(prop('label'), getClass);

export default classes;
