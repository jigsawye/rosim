import { compose, prop } from 'lodash/fp';
import { find } from 'lodash';

import acolyte from './acolyte';
import archer from './archer';
import mage from './mage';
import merchant from './merchant';
import swordman from './swordman';
import thief from './thief';

const classes = [swordman, mage, archer, merchant, thief, acolyte];

export const getJob = ([firstClass, secondClass]) => {
  const { children } = find(classes, ['value', firstClass]);
  return find(children, ['value', secondClass]);
};

export const getJobName = compose(
  prop('label'),
  getJob
);

export const getJobType = compose(
  prop('type'),
  getJob
);

export default classes;
