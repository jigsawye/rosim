export const weapons = [
  { id: 0, name: '空手', lefthand: true },
  { id: 1, name: '短劍', lefthand: true },
  { id: 2, name: '單手劍', lefthand: true },
  { id: 3, name: '雙手劍', lefthand: false },
  { id: 4, name: '單手槍', lefthand: true },
  { id: 5, name: '雙手槍', lefthand: false },
  { id: 6, name: '單手斧', lefthand: true },
  { id: 7, name: '雙手斧', lefthand: false },
  { id: 8, name: '鈍器', lefthand: true },
  { id: 9, name: '單手杖', lefthand: true },
  { id: 10, name: '弓', lefthand: false },
  { id: 11, name: '拳刃', lefthand: false },
  { id: 12, name: '書', lefthand: true },
  { id: 13, name: '拳套', lefthand: true },
  { id: 14, name: '樂器', lefthand: true },
  { id: 15, name: '鞭子', lefthand: true },
];

export const jobUsableWeapons = [
  {
    jobId: 7,
    shieldAspd: -5,
    weapons: [
      { id: 0, baseAspd: 154 },
      { id: 1, baseAspd: 145 },
      { id: 2, baseAspd: 149 },
      { id: 3, baseAspd: 142 },
      { id: 4, baseAspd: 139 },
      { id: 5, baseAspd: 134 },
      { id: 6, baseAspd: 144 },
      { id: 7, baseAspd: 139 },
      { id: 8, baseAspd: 149 },
    ],
  },
  {
    jobId: 8,
    shieldAspd: -5,
    weapons: [
      { id: 0, baseAspd: 154 },
      { id: 8, baseAspd: 151 },
      { id: 9, baseAspd: 134 },
      { id: 12, baseAspd: 150 },
      { id: 13, baseAspd: 134 },
    ],
  },
  {
    jobId: 9,
    shieldAspd: -5,
    weapons: [
      { id: 0, baseAspd: 144 },
      { id: 1, baseAspd: 140 },
      { id: 9, baseAspd: 141 },
    ],
  },
  {
    jobId: 10,
    shieldAspd: -5,
    weapons: [
      { id: 0, baseAspd: 154 },
      { id: 1, baseAspd: 144 },
      { id: 2, baseAspd: 144 },
      { id: 6, baseAspd: 148 },
      { id: 7, baseAspd: 141 },
      { id: 8, baseAspd: 146 },
    ],
  },
  {
    jobId: 11,
    shieldAspd: -9,
    weapons: [
      { id: 0, baseAspd: 154 },
      { id: 1, baseAspd: 141 },
      { id: 10, baseAspd: 146 },
    ],
  },
  {
    jobId: 12,
    shieldAspd: -6,
    weapons: [
      { id: 0, baseAspd: 154 },
      { id: 1, baseAspd: 152 },
      { id: 2, baseAspd: 144 },
      { id: 6, baseAspd: 143 },
      { id: 11, baseAspd: 152 },
    ],
    lefthand: [
      { id: 1, baseAspd: 152 },
      { id: 2, baseAspd: 144 },
      { id: 6, baseAspd: 143 },
    ],
  },
];
