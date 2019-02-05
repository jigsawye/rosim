import { useReducer } from 'react';

import storeReducer from '../reducers/storeReducer';

const initialState = {
  baseLevel: 1,
  jobLevel: 1,
  job: ['SWORDMAN', 'KNIGHT'],
  stats: {
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
  },
  otherStats: {
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
  },
  hpsp: {
    hpAddMod: 0,
    hpMultiMod: 0,
    spAddMod: 0,
    spMultiMod: 0,
  },
  aspd: {
    weaponId: 0,
    lefthandId: 100,
    equipFixed: 0,
    equipMod: 0,
    skillMod: 0,
    potionMod: 0,
    additionalMod: [],
  },
  skills: [],
};

const useStoreReducer = () => useReducer(storeReducer, initialState);

export default useStoreReducer;
