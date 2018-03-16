import * as classes from './classes/classNames';

export const statsMap = ['str', 'agi', 'vit', 'int', 'dex', 'luk'];

export default [
  {
    key: classes.NOVICE,
    bonus: [],
  },
  {
    key: classes.SWORDMAN,
    bonus: [
      [2, 0],
      [6, 2],
      [10, 4],
      [14, 0],
      [18, 2],
      [22, 4],
      [26, 5],
      [30, 1],
      [33, 0],
      [36, 4],
      [38, 2],
      [40, 0],
      [42, 2],
      [44, 5],
      [46, 1],
      [47, 0],
      [49, 0],
      [50, 0],
    ],
  },
  {
    key: classes.THIEF,
    bonus: [
      [2, 1],
      [6, 0],
      [10, 4],
      [14, 2],
      [18, 3],
      [22, 4],
      [26, 5],
      [30, 0],
      [33, 1],
      [36, 1],
      [38, 0],
      [40, 5],
      [42, 4],
      [44, 2],
      [46, 5],
      [47, 0],
      [49, 4],
      [50, 1],
    ],
  },
  {
    key: classes.ACOLYTE,
    bonus: [
      [2, 5],
      [6, 2],
      [10, 3],
      [14, 4],
      [18, 5],
      [22, 1],
      [26, 0],
      [30, 2],
      [33, 3],
      [36, 4],
      [38, 5],
      [40, 1],
      [42, 0],
      [44, 2],
      [46, 3],
      [47, 4],
      [49, 0],
      [50, 5],
    ],
  },
  {
    key: classes.ARCHER,
    bonus: [
      [2, 4],
      [6, 0],
      [10, 3],
      [14, 4],
      [18, 4],
      [22, 5],
      [26, 1],
      [30, 4],
      [33, 1],
      [36, 4],
      [38, 0],
      [40, 0],
      [42, 4],
      [44, 5],
      [46, 2],
      [47, 3],
      [49, 1],
      [50, 4],
    ],
  },
  {
    key: classes.MAGE,
    bonus: [
      [2, 3],
      [6, 4],
      [10, 4],
      [14, 3],
      [18, 1],
      [22, 3],
      [26, 1],
      [30, 5],
      [33, 3],
      [36, 4],
      [38, 3],
      [40, 1],
      [42, 5],
      [44, 3],
      [46, 3],
      [47, 1],
      [49, 5],
      [50, 3],
    ],
  },
  {
    key: classes.MERCHANT,
    bonus: [
      [2, 2],
      [6, 4],
      [10, 0],
      [14, 4],
      [18, 2],
      [22, 0],
      [26, 3],
      [30, 2],
      [33, 1],
      [36, 5],
      [38, 4],
      [40, 0],
      [42, 4],
      [44, 0],
      [46, 5],
      [47, 2],
      [49, 0],
      [50, 4],
    ],
  },
  {
    key: classes.KNIGHT,
    bonus: [
      [1, 2],
      [3, 2],
      [4, 0],
      [5, 5],
      [8, 2],
      [10, 0],
      [11, 4],
      [12, 2],
      [13, 1],
      [15, 0],
      [17, 2],
      [18, 2],
      [19, 4],
      [20, 5],
      [21, 0],
      [23, 2],
      [27, 0],
      [28, 5],
      [29, 2],
      [31, 4],
      [33, 0],
      [36, 2],
      [37, 5],
      [38, 1],
      [40, 4],
      [43, 2],
      [46, 0],
      [47, 0],
      [48, 4],
      [49, 4],
    ],
  },
  {
    key: classes.ASSASSIN,
    bonus: [
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 3],
      [6, 2],
      [8, 2],
      [9, 4],
      [11, 0],
      [14, 3],
      [15, 1],
      [16, 1],
      [17, 1],
      [18, 1],
      [19, 1],
      [20, 1],
      [21, 1],
      [24, 4],
      [25, 0],
      [27, 0],
      [30, 4],
      [31, 4],
      [32, 0],
      [38, 3],
      [40, 4],
      [41, 4],
      [42, 3],
      [45, 0],
      [46, 4],
      [48, 0],
      [50, 4],
    ],
  },
  {
    key: classes.PRIEST,
    bonus: [
      [1, 5],
      [3, 5],
      [4, 0],
      [6, 1],
      [7, 2],
      [8, 3],
      [9, 3],
      [10, 5],
      [11, 0],
      [14, 2],
      [16, 4],
      [17, 0],
      [20, 4],
      [21, 5],
      [22, 3],
      [25, 4],
      [27, 0],
      [29, 1],
      [31, 5],
      [32, 4],
      [34, 2],
      [35, 0],
      [36, 2],
      [37, 1],
      [39, 5],
      [42, 3],
      [43, 3],
      [45, 2],
      [48, 1],
      [50, 5],
    ],
  },
  {
    key: classes.HUNTER,
    bonus: [
      [1, 4],
      [3, 3],
      [4, 4],
      [5, 0],
      [7, 5],
      [8, 4],
      [10, 0],
      [11, 0],
      [12, 1],
      [14, 4],
      [15, 5],
      [17, 2],
      [19, 1],
      [20, 1],
      [21, 4],
      [23, 2],
      [27, 4],
      [29, 5],
      [31, 1],
      [33, 4],
      [34, 3],
      [38, 4],
      [39, 1],
      [41, 3],
      [42, 5],
      [43, 4],
      [44, 0],
      [46, 3],
      [47, 1],
      [49, 4],
    ],
  },
  {
    key: classes.WIZARD,
    bonus: [
      [1, 3],
      [2, 4],
      [4, 3],
      [5, 4],
      [6, 1],
      [9, 3],
      [10, 1],
      [12, 0],
      [13, 4],
      [15, 5],
      [18, 3],
      [22, 3],
      [24, 1],
      [26, 4],
      [29, 3],
      [31, 3],
      [32, 4],
      [33, 3],
      [34, 1],
      [36, 5],
      [38, 2],
      [39, 4],
      [40, 3],
      [41, 1],
      [43, 1],
      [45, 3],
      [46, 1],
      [47, 1],
      [48, 3],
      [50, 3],
    ],
  },
  {
    key: classes.BLACKSMITH,
    bonus: [
      [1, 4],
      [3, 0],
      [4, 4],
      [5, 4],
      [7, 2],
      [8, 0],
      [9, 4],
      [11, 5],
      [12, 4],
      [13, 2],
      [16, 0],
      [19, 4],
      [20, 2],
      [21, 3],
      [23, 0],
      [26, 4],
      [28, 4],
      [29, 1],
      [31, 0],
      [32, 2],
      [34, 3],
      [36, 4],
      [37, 2],
      [38, 1],
      [39, 4],
      [40, 4],
      [44, 0],
      [46, 5],
      [47, 4],
      [49, 2],
    ],
  },
  {
    key: classes.CRUSADER,
    bonus: [
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [5, 5],
      [7, 0],
      [9, 3],
      [11, 0],
      [12, 2],
      [14, 4],
      [15, 2],
      [17, 0],
      [20, 3],
      [21, 3],
      [22, 2],
      [23, 0],
      [25, 0],
      [28, 4],
      [30, 1],
      [32, 0],
      [34, 4],
      [35, 3],
      [36, 1],
      [38, 3],
      [40, 2],
      [41, 2],
      [44, 3],
      [46, 2],
      [48, 0],
      [50, 2],
    ],
  },
  {
    key: classes.ROGUE,
    bonus: [
      [1, 1],
      [2, 2],
      [3, 4],
      [5, 0],
      [6, 2],
      [7, 1],
      [9, 2],
      [11, 4],
      [14, 2],
      [15, 2],
      [16, 1],
      [18, 4],
      [20, 4],
      [23, 1],
      [25, 0],
      [26, 2],
      [27, 0],
      [29, 1],
      [30, 0],
      [33, 4],
      [34, 4],
      [36, 0],
      [38, 3],
      [39, 1],
      [42, 0],
      [43, 3],
      [45, 1],
      [47, 3],
      [48, 3],
      [50, 4],
    ],
  },
  {
    key: classes.MONK,
    bonus: [
      [1, 0],
      [2, 0],
      [4, 4],
      [6, 1],
      [7, 2],
      [10, 1],
      [12, 0],
      [13, 0],
      [14, 5],
      [16, 3],
      [18, 1],
      [20, 2],
      [21, 1],
      [22, 4],
      [23, 1],
      [25, 2],
      [26, 0],
      [27, 0],
      [30, 4],
      [32, 5],
      [33, 2],
      [35, 1],
      [38, 3],
      [40, 5],
      [41, 2],
      [43, 4],
      [44, 1],
      [46, 2],
      [49, 0],
      [50, 0],
    ],
  },
  {
    key: classes.BARD,
    bonus: [
      [1, 4],
      [2, 1],
      [3, 0],
      [5, 3],
      [6, 5],
      [7, 4],
      [9, 5],
      [10, 1],
      [11, 1],
      [13, 3],
      [15, 4],
      [16, 4],
      [17, 2],
      [19, 4],
      [20, 5],
      [21, 3],
      [24, 1],
      [28, 0],
      [30, 1],
      [32, 4],
      [33, 2],
      [35, 1],
      [38, 4],
      [40, 3],
      [41, 5],
      [43, 2],
      [46, 4],
      [47, 3],
      [48, 1],
      [50, 4],
    ],
  },
  {
    key: classes.DANCER,
    bonus: [
      [1, 5],
      [2, 1],
      [3, 0],
      [5, 3],
      [6, 4],
      [7, 5],
      [9, 4],
      [10, 1],
      [11, 1],
      [13, 3],
      [15, 5],
      [16, 4],
      [17, 2],
      [19, 5],
      [20, 4],
      [21, 3],
      [24, 1],
      [28, 0],
      [30, 1],
      [32, 5],
      [33, 2],
      [35, 1],
      [38, 5],
      [40, 3],
      [41, 4],
      [43, 2],
      [46, 5],
      [47, 3],
      [48, 1],
      [50, 5],
    ],
  },
  {
    key: classes.SAGE,
    bonus: [
      [1, 3],
      [3, 1],
      [4, 2],
      [6, 1],
      [8, 3],
      [11, 2],
      [13, 1],
      [15, 3],
      [17, 5],
      [18, 2],
      [20, 4],
      [22, 1],
      [24, 3],
      [25, 4],
      [27, 4],
      [30, 3],
      [32, 4],
      [33, 1],
      [35, 5],
      [37, 3],
      [38, 3],
      [39, 4],
      [40, 5],
      [42, 0],
      [44, 0],
      [45, 3],
      [46, 0],
      [47, 0],
      [48, 0],
      [50, 3],
    ],
  },
  {
    key: classes.ALCHEMIST,
    bonus: [
      [1, 3],
      [2, 4],
      [3, 4],
      [6, 0],
      [8, 4],
      [9, 3],
      [11, 1],
      [13, 4],
      [14, 1],
      [15, 0],
      [17, 3],
      [19, 4],
      [20, 2],
      [21, 4],
      [23, 3],
      [24, 3],
      [25, 4],
      [26, 0],
      [28, 4],
      [29, 3],
      [31, 2],
      [32, 4],
      [34, 0],
      [36, 2],
      [38, 3],
      [40, 1],
      [43, 0],
      [45, 1],
      [49, 1],
      [50, 1],
    ],
  },
  {
    key: classes.SUPER_NOVICE,
    bonus: [
      [1, 0],
      [3, 1],
      [5, 2],
      [7, 3],
      [9, 4],
      [11, 5],
      [13, 0],
      [15, 1],
      [17, 2],
      [19, 3],
      [21, 4],
      [23, 5],
      [25, 0],
      [27, 1],
      [29, 2],
      [31, 3],
      [33, 4],
      [35, 5],
      [37, 0],
      [39, 1],
      [41, 2],
      [43, 3],
      [45, 4],
      [47, 5],
      [49, 0],
      [52, 1],
      [56, 2],
      [60, 3],
      [64, 4],
      [68, 5],
    ],
  },
  {
    key: classes.LORD_KNIGHT,
    bonus: [
      [1, 0],
      [2, 1],
      [2, 5],
      [4, 4],
      [5, 2],
      [6, 0],
      [7, 0],
      [8, 0],
      [10, 1],
      [11, 4],
      [12, 2],
      [13, 3],
      [14, 1],
      [16, 4],
      [17, 1],
      [19, 0],
      [22, 2],
      [25, 0],
      [27, 5],
      [28, 4],
      [29, 2],
      [31, 4],
      [33, 0],
      [36, 4],
      [37, 1],
      [38, 5],
      [40, 2],
      [41, 0],
      [43, 2],
      [44, 4],
      [46, 0],
      [47, 0],
      [49, 4],
      [52, 0],
      [53, 1],
      [56, 0],
      [57, 0],
      [58, 2],
      [60, 1],
      [62, 4],
      [64, 0],
      [65, 1],
      [67, 3],
      [68, 2],
      [70, 0],
    ],
  },
  {
    key: classes.ASSASSIN_CROSS,
    bonus: [
      [1, 1],
      [2, 0],
      [3, 5],
      [4, 1],
      [6, 1],
      [7, 0],
      [8, 5],
      [9, 2],
      [10, 4],
      [12, 0],
      [15, 1],
      [16, 5],
      [18, 5],
      [20, 1],
      [21, 0],
      [23, 4],
      [24, 1],
      [25, 1],
      [26, 5],
      [29, 0],
      [31, 1],
      [32, 1],
      [33, 1],
      [34, 5],
      [37, 4],
      [38, 0],
      [39, 4],
      [42, 1],
      [43, 4],
      [46, 1],
      [47, 2],
      [48, 5],
      [50, 0],
      [51, 1],
      [53, 4],
      [54, 0],
      [56, 1],
      [57, 4],
      [61, 4],
      [62, 1],
      [64, 4],
      [65, 5],
      [66, 0],
      [69, 2],
      [70, 4],
    ],
  },
  {
    key: classes.HIGH_PRIEST,
    bonus: [
      [1, 3],
      [3, 1],
      [4, 2],
      [5, 0],
      [7, 3],
      [8, 1],
      [11, 3],
      [12, 0],
      [13, 4],
      [16, 4],
      [19, 1],
      [20, 3],
      [21, 0],
      [22, 2],
      [23, 3],
      [24, 3],
      [26, 4],
      [28, 4],
      [29, 1],
      [30, 2],
      [31, 0],
      [34, 3],
      [37, 4],
      [38, 0],
      [40, 5],
      [42, 1],
      [43, 4],
      [45, 0],
      [46, 4],
      [47, 3],
      [49, 5],
      [50, 2],
      [51, 2],
      [55, 1],
      [56, 4],
      [57, 3],
      [58, 2],
      [60, 0],
      [61, 3],
      [62, 4],
      [65, 1],
      [66, 3],
      [67, 2],
      [68, 1],
      [70, 3],
    ],
  },
  {
    key: classes.SNIPER,
    bonus: [
      [1, 4],
      [2, 1],
      [3, 4],
      [4, 4],
      [5, 3],
      [6, 1],
      [8, 0],
      [10, 1],
      [11, 1],
      [12, 2],
      [14, 5],
      [16, 4],
      [17, 4],
      [20, 3],
      [21, 1],
      [22, 4],
      [24, 0],
      [25, 5],
      [26, 4],
      [28, 1],
      [30, 4],
      [31, 5],
      [32, 2],
      [33, 1],
      [35, 4],
      [36, 5],
      [38, 1],
      [40, 4],
      [42, 3],
      [43, 1],
      [45, 0],
      [46, 4],
      [48, 1],
      [50, 5],
      [51, 4],
      [54, 3],
      [55, 2],
      [57, 5],
      [58, 1],
      [60, 4],
      [61, 0],
      [62, 5],
      [65, 3],
      [69, 4],
      [70, 5],
    ],
  },
  {
    key: classes.HIGH_WIZARD,
    bonus: [
      [1, 3],
      [2, 4],
      [3, 2],
      [5, 3],
      [8, 1],
      [9, 4],
      [10, 3],
      [12, 5],
      [14, 3],
      [17, 4],
      [18, 1],
      [19, 3],
      [20, 0],
      [22, 4],
      [23, 4],
      [24, 3],
      [26, 1],
      [28, 3],
      [29, 2],
      [31, 4],
      [32, 3],
      [34, 1],
      [37, 3],
      [38, 3],
      [39, 3],
      [40, 0],
      [41, 5],
      [43, 4],
      [46, 3],
      [47, 2],
      [49, 3],
      [50, 1],
      [53, 2],
      [55, 3],
      [56, 1],
      [57, 5],
      [59, 3],
      [60, 0],
      [61, 4],
      [62, 3],
      [65, 1],
      [66, 2],
      [67, 4],
      [69, 1],
      [70, 3],
    ],
  },
  {
    key: classes.WHITESMITH,
    bonus: [
      [1, 4],
      [2, 0],
      [3, 0],
      [4, 3],
      [6, 4],
      [7, 1],
      [8, 5],
      [9, 2],
      [12, 4],
      [13, 2],
      [15, 3],
      [16, 5],
      [17, 0],
      [19, 1],
      [20, 1],
      [22, 3],
      [23, 4],
      [26, 0],
      [28, 5],
      [29, 2],
      [31, 1],
      [32, 4],
      [33, 0],
      [34, 3],
      [36, 1],
      [38, 4],
      [39, 5],
      [41, 4],
      [44, 5],
      [45, 5],
      [47, 4],
      [48, 2],
      [50, 3],
      [52, 0],
      [55, 4],
      [56, 4],
      [58, 1],
      [60, 2],
      [61, 3],
      [62, 4],
      [64, 1],
      [65, 2],
      [66, 5],
      [67, 5],
      [70, 4],
    ],
  },
  {
    key: classes.PALADIN,
    bonus: [
      [1, 2],
      [2, 0],
      [3, 1],
      [6, 4],
      [7, 3],
      [8, 1],
      [9, 2],
      [10, 0],
      [12, 4],
      [14, 3],
      [15, 2],
      [16, 1],
      [17, 4],
      [18, 0],
      [21, 2],
      [23, 4],
      [24, 1],
      [26, 0],
      [29, 3],
      [30, 2],
      [33, 0],
      [36, 4],
      [37, 1],
      [39, 5],
      [40, 0],
      [42, 2],
      [43, 3],
      [45, 4],
      [48, 0],
      [49, 2],
      [52, 1],
      [53, 2],
      [54, 3],
      [55, 0],
      [57, 4],
      [59, 5],
      [60, 1],
      [61, 3],
      [63, 2],
      [64, 0],
      [65, 3],
      [67, 5],
      [68, 4],
      [69, 2],
      [70, 1],
    ],
  },
  {
    key: classes.STALKER,
    bonus: [
      [1, 0],
      [2, 1],
      [4, 5],
      [5, 3],
      [6, 2],
      [9, 1],
      [10, 4],
      [11, 0],
      [12, 1],
      [15, 2],
      [16, 4],
      [17, 4],
      [20, 5],
      [21, 1],
      [22, 0],
      [24, 5],
      [26, 4],
      [27, 1],
      [29, 4],
      [31, 5],
      [32, 0],
      [34, 1],
      [37, 4],
      [38, 4],
      [41, 1],
      [42, 2],
      [43, 0],
      [44, 3],
      [45, 1],
      [47, 0],
      [49, 4],
      [50, 5],
      [52, 4],
      [53, 0],
      [56, 4],
      [57, 3],
      [58, 1],
      [59, 5],
      [60, 4],
      [62, 0],
      [63, 2],
      [64, 1],
      [66, 4],
      [67, 0],
      [70, 1],
    ],
  },
  {
    key: classes.CHAMPION,
    bonus: [
      [1, 0],
      [2, 3],
      [3, 2],
      [4, 1],
      [6, 4],
      [9, 0],
      [11, 3],
      [12, 1],
      [13, 5],
      [15, 2],
      [16, 4],
      [17, 0],
      [20, 1],
      [21, 1],
      [22, 4],
      [24, 2],
      [27, 0],
      [29, 1],
      [30, 4],
      [33, 3],
      [34, 5],
      [37, 0],
      [38, 4],
      [39, 2],
      [42, 2],
      [44, 4],
      [45, 1],
      [46, 5],
      [47, 3],
      [48, 0],
      [50, 4],
      [52, 1],
      [53, 4],
      [56, 3],
      [58, 2],
      [59, 0],
      [60, 4],
      [62, 1],
      [64, 3],
      [65, 0],
      [66, 0],
      [67, 4],
      [68, 2],
      [69, 3],
      [70, 1],
    ],
  },
  {
    key: classes.MINSTREL,
    bonus: [
      [1, 1],
      [2, 4],
      [4, 1],
      [5, 0],
      [7, 4],
      [8, 3],
      [9, 1],
      [10, 0],
      [11, 5],
      [13, 1],
      [15, 4],
      [16, 2],
      [18, 5],
      [19, 0],
      [21, 3],
      [23, 4],
      [24, 1],
      [26, 5],
      [28, 3],
      [30, 4],
      [32, 1],
      [33, 0],
      [36, 1],
      [39, 4],
      [40, 4],
      [41, 3],
      [43, 4],
      [45, 0],
      [47, 5],
      [49, 1],
      [50, 4],
      [53, 1],
      [54, 0],
      [56, 4],
      [57, 4],
      [58, 1],
      [59, 2],
      [61, 4],
      [62, 0],
      [63, 4],
      [65, 1],
      [66, 4],
      [68, 1],
      [69, 3],
      [70, 0],
    ],
  },
  {
    key: classes.GYPSY,
    bonus: [
      [1, 4],
      [2, 0],
      [4, 1],
      [6, 0],
      [8, 3],
      [9, 4],
      [11, 1],
      [12, 1],
      [13, 1],
      [14, 4],
      [15, 4],
      [17, 2],
      [18, 4],
      [20, 0],
      [22, 4],
      [23, 4],
      [25, 1],
      [26, 3],
      [27, 5],
      [28, 4],
      [31, 1],
      [33, 4],
      [35, 0],
      [38, 1],
      [39, 3],
      [41, 4],
      [43, 4],
      [45, 4],
      [47, 1],
      [49, 4],
      [50, 0],
      [52, 1],
      [53, 3],
      [54, 2],
      [57, 1],
      [58, 4],
      [60, 3],
      [61, 1],
      [62, 1],
      [63, 5],
      [65, 4],
      [66, 0],
      [67, 1],
      [69, 4],
      [70, 1],
    ],
  },
  {
    key: classes.PROFESSOR,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 1],
      [5, 0],
      [7, 2],
      [8, 4],
      [11, 3],
      [12, 1],
      [14, 3],
      [16, 4],
      [18, 0],
      [20, 4],
      [21, 5],
      [22, 3],
      [23, 1],
      [24, 2],
      [26, 4],
      [27, 0],
      [29, 4],
      [30, 3],
      [32, 1],
      [34, 4],
      [36, 0],
      [37, 4],
      [38, 3],
      [39, 2],
      [41, 3],
      [43, 1],
      [45, 0],
      [46, 4],
      [49, 3],
      [50, 1],
      [52, 4],
      [54, 1],
      [55, 4],
      [56, 0],
      [57, 3],
      [60, 1],
      [62, 4],
      [63, 2],
      [64, 3],
      [66, 5],
      [68, 3],
      [69, 1],
      [70, 3],
    ],
  },
  {
    key: classes.CREATOR,
    bonus: [
      [1, 4],
      [2, 5],
      [5, 1],
      [6, 0],
      [7, 3],
      [8, 5],
      [9, 2],
      [10, 4],
      [13, 3],
      [15, 4],
      [18, 1],
      [20, 5],
      [22, 3],
      [23, 4],
      [25, 5],
      [27, 1],
      [30, 3],
      [31, 0],
      [33, 2],
      [34, 5],
      [35, 4],
      [38, 1],
      [41, 4],
      [42, 4],
      [43, 4],
      [45, 5],
      [46, 3],
      [47, 4],
      [49, 4],
      [51, 5],
      [52, 5],
      [53, 0],
      [54, 1],
      [56, 4],
      [57, 4],
      [59, 3],
      [60, 5],
      [61, 2],
      [63, 4],
      [64, 5],
      [66, 0],
      [67, 1],
      [68, 3],
      [69, 5],
      [70, 4],
    ],
  },
  {
    key: classes.HIGH_NOVICE,
    bonus: [[2, 5], [2, 4], [5, 1], [6, 2], [8, 0], [9, 3]],
  },
  {
    key: classes.HIGH_SWORDMAN,
    bonus: [
      [2, 0],
      [6, 2],
      [10, 4],
      [14, 0],
      [18, 2],
      [22, 4],
      [26, 5],
      [30, 1],
      [33, 0],
      [36, 4],
      [38, 2],
      [40, 0],
      [42, 2],
      [44, 5],
      [46, 1],
      [47, 0],
      [49, 0],
      [50, 0],
    ],
  },
  {
    key: classes.HIGH_THIEF,
    bonus: [
      [2, 1],
      [6, 0],
      [10, 4],
      [14, 2],
      [18, 3],
      [22, 4],
      [26, 5],
      [30, 0],
      [33, 1],
      [36, 1],
      [38, 0],
      [40, 5],
      [42, 4],
      [44, 2],
      [46, 5],
      [47, 0],
      [49, 4],
      [50, 1],
    ],
  },
  {
    key: classes.HIGH_ACOLYTE,
    bonus: [
      [2, 5],
      [6, 2],
      [10, 3],
      [14, 4],
      [18, 5],
      [22, 1],
      [26, 0],
      [30, 2],
      [33, 3],
      [36, 4],
      [38, 5],
      [40, 1],
      [42, 0],
      [44, 2],
      [46, 3],
      [47, 4],
      [49, 0],
      [50, 5],
    ],
  },
  {
    key: classes.HIGH_ARCHER,
    bonus: [
      [2, 4],
      [6, 0],
      [10, 3],
      [14, 4],
      [18, 4],
      [22, 5],
      [26, 1],
      [30, 4],
      [33, 1],
      [36, 4],
      [38, 0],
      [40, 0],
      [42, 4],
      [44, 5],
      [46, 2],
      [47, 3],
      [49, 1],
      [50, 4],
    ],
  },
  {
    key: classes.HIGH_MAGICIAN,
    bonus: [
      [2, 3],
      [6, 4],
      [10, 4],
      [14, 3],
      [18, 1],
      [22, 3],
      [26, 1],
      [30, 5],
      [33, 3],
      [36, 4],
      [38, 3],
      [40, 1],
      [42, 5],
      [44, 3],
      [46, 3],
      [47, 1],
      [49, 5],
      [50, 3],
    ],
  },
  {
    key: classes.HIGH_MERCHANT,
    bonus: [
      [2, 2],
      [6, 4],
      [10, 0],
      [14, 4],
      [18, 2],
      [22, 0],
      [26, 3],
      [30, 2],
      [33, 1],
      [36, 5],
      [38, 4],
      [40, 0],
      [42, 4],
      [44, 0],
      [46, 5],
      [47, 2],
      [49, 0],
      [50, 4],
    ],
  },
  {
    key: classes.TAEKWON_KID,
    bonus: [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [10, 4],
      [11, 4],
      [12, 4],
      [13, 4],
      [14, 4],
      [15, 4],
      [20, 1],
      [21, 1],
      [22, 1],
      [23, 1],
      [24, 1],
      [25, 1],
    ],
  },
  {
    key: classes.TEAKWON_MASTER,
    bonus: [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [10, 0],
      [11, 0],
      [12, 0],
      [20, 4],
      [21, 4],
      [22, 4],
      [23, 4],
      [24, 4],
      [25, 4],
      [39, 1],
      [40, 1],
      [41, 1],
      [42, 1],
      [43, 1],
      [44, 1],
      [45, 1],
      [46, 1],
      [47, 1],
      [48, 1],
      [49, 1],
      [50, 1],
    ],
  },
  {
    key: classes.SOUL_LINKER,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
      [5, 3],
      [6, 3],
      [7, 3],
      [8, 3],
      [9, 3],
      [10, 3],
      [11, 3],
      [12, 3],
      [20, 2],
      [21, 2],
      [22, 2],
      [23, 2],
      [24, 2],
      [25, 2],
      [39, 4],
      [40, 4],
      [41, 4],
      [42, 4],
      [43, 4],
      [44, 4],
      [45, 4],
      [46, 4],
      [47, 4],
      [48, 4],
      [49, 4],
      [50, 4],
    ],
  },
  {
    key: classes.NINJA,
    bonus: [
      [1, 1],
      [2, 1],
      [10, 4],
      [11, 1],
      [20, 3],
      [21, 1],
      [22, 4],
      [29, 3],
      [30, 5],
      [31, 1],
      [32, 4],
      [40, 5],
      [41, 1],
      [42, 3],
      [43, 4],
      [50, 3],
      [51, 1],
      [52, 5],
      [53, 4],
      [59, 0],
      [60, 2],
      [61, 1],
      [62, 3],
      [63, 4],
      [64, 5],
    ],
  },
  {
    key: classes.GUNSLINGER,
    bonus: [
      [1, 4],
      [2, 5],
      [4, 5],
      [6, 4],
      [11, 4],
      [12, 5],
      [17, 4],
      [21, 5],
      [25, 4],
      [31, 5],
      [32, 0],
      [35, 4],
      [41, 0],
      [45, 4],
      [50, 0],
      [51, 5],
      [52, 3],
      [55, 4],
      [59, 1],
      [60, 2],
      [61, 3],
      [62, 4],
      [63, 5],
      [64, 0],
    ],
  },
  {
    key: classes.RUNE_KNIGHT,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 2],
      [5, 3],
      [10, 0],
      [11, 0],
      [12, 3],
      [13, 3],
      [14, 2],
      [15, 4],
      [19, 4],
      [20, 1],
      [21, 1],
      [22, 3],
      [23, 2],
      [24, 4],
      [30, 3],
      [31, 4],
      [32, 2],
      [33, 0],
      [39, 3],
      [40, 4],
      [41, 1],
      [44, 4],
      [45, 2],
      [46, 3],
      [47, 5],
      [48, 5],
      [49, 5],
      [50, 3],
      [51, 0],
      [53, 1],
      [55, 4],
      [57, 5],
      [59, 2],
      [60, 0],
    ],
  },
  {
    key: classes.GUILLOTINE_CROSS,
    bonus: [
      [1, 1],
      [2, 4],
      [4, 0],
      [5, 0],
      [9, 0],
      [10, 1],
      [11, 4],
      [14, 2],
      [15, 2],
      [16, 0],
      [19, 2],
      [20, 0],
      [23, 1],
      [24, 1],
      [25, 4],
      [28, 3],
      [29, 3],
      [30, 0],
      [31, 2],
      [35, 1],
      [36, 4],
      [37, 4],
      [41, 3],
      [42, 2],
      [43, 1],
      [44, 1],
      [48, 3],
      [49, 4],
      [50, 4],
      [51, 5],
      [52, 0],
      [53, 1],
      [54, 2],
      [56, 3],
      [58, 0],
      [59, 5],
      [60, 1],
    ],
  },
  {
    key: classes.ARCH_BISHOP,
    bonus: [
      [1, 3],
      [3, 2],
      [5, 4],
      [7, 3],
      [8, 3],
      [10, 2],
      [11, 2],
      [14, 4],
      [15, 4],
      [18, 0],
      [19, 0],
      [22, 3],
      [24, 0],
      [26, 1],
      [27, 1],
      [28, 0],
      [32, 3],
      [34, 2],
      [36, 4],
      [38, 1],
      [39, 1],
      [40, 3],
      [41, 3],
      [44, 4],
      [45, 2],
      [46, 0],
      [49, 3],
      [50, 4],
      [51, 5],
      [52, 1],
      [53, 2],
      [54, 0],
      [55, 3],
      [57, 2],
      [58, 5],
      [59, 4],
      [60, 3],
    ],
  },
  {
    key: classes.RANGER,
    bonus: [
      [1, 4],
      [2, 3],
      [3, 3],
      [4, 1],
      [7, 1],
      [8, 4],
      [9, 3],
      [12, 2],
      [13, 2],
      [14, 2],
      [17, 4],
      [18, 1],
      [21, 3],
      [22, 2],
      [23, 4],
      [26, 0],
      [27, 0],
      [30, 4],
      [31, 1],
      [32, 2],
      [36, 3],
      [37, 3],
      [38, 3],
      [39, 1],
      [43, 1],
      [44, 4],
      [45, 1],
      [49, 3],
      [50, 1],
      [51, 5],
      [52, 4],
      [54, 3],
      [55, 1],
      [57, 2],
      [58, 5],
      [59, 4],
      [60, 1],
    ],
  },
  {
    key: classes.WARLOCK,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 4],
      [6, 4],
      [7, 3],
      [8, 1],
      [12, 3],
      [13, 4],
      [15, 2],
      [18, 2],
      [19, 4],
      [20, 1],
      [23, 3],
      [24, 2],
      [25, 2],
      [28, 4],
      [29, 1],
      [31, 5],
      [34, 0],
      [35, 3],
      [36, 3],
      [39, 4],
      [40, 1],
      [41, 3],
      [44, 3],
      [45, 3],
      [47, 1],
      [50, 3],
      [51, 4],
      [52, 2],
      [53, 5],
      [54, 1],
      [55, 3],
      [57, 2],
      [58, 1],
      [59, 4],
      [60, 3],
    ],
  },
  {
    key: classes.MECHANIC,
    bonus: [
      [1, 5],
      [2, 0],
      [5, 0],
      [7, 5],
      [8, 1],
      [9, 4],
      [10, 3],
      [13, 3],
      [14, 5],
      [17, 1],
      [19, 2],
      [20, 2],
      [21, 3],
      [22, 4],
      [25, 2],
      [26, 5],
      [29, 2],
      [31, 0],
      [32, 0],
      [33, 2],
      [34, 5],
      [37, 3],
      [38, 3],
      [42, 2],
      [43, 2],
      [44, 0],
      [45, 0],
      [48, 4],
      [49, 1],
      [51, 5],
      [52, 0],
      [53, 4],
      [55, 3],
      [56, 2],
      [57, 1],
      [59, 4],
      [60, 0],
    ],
  },
  {
    key: classes.ROYAL_GUARD,
    bonus: [
      [2, 2],
      [3, 3],
      [4, 0],
      [5, 3],
      [6, 4],
      [9, 2],
      [11, 3],
      [13, 0],
      [14, 4],
      [16, 5],
      [19, 3],
      [20, 4],
      [23, 1],
      [24, 3],
      [26, 3],
      [27, 2],
      [30, 0],
      [31, 4],
      [33, 5],
      [34, 1],
      [37, 3],
      [38, 3],
      [40, 0],
      [41, 2],
      [42, 2],
      [44, 4],
      [45, 0],
      [46, 3],
      [48, 0],
      [49, 4],
      [51, 1],
      [53, 2],
      [54, 5],
      [56, 4],
      [58, 0],
      [59, 2],
      [60, 3],
    ],
  },
  {
    key: classes.SHADOW_CHASER,
    bonus: [
      [1, 5],
      [2, 0],
      [5, 0],
      [7, 5],
      [8, 1],
      [9, 4],
      [10, 3],
      [13, 3],
      [14, 5],
      [17, 1],
      [19, 2],
      [20, 2],
      [21, 3],
      [22, 4],
      [25, 2],
      [26, 5],
      [29, 2],
      [31, 0],
      [32, 0],
      [33, 2],
      [34, 5],
      [37, 3],
      [38, 3],
      [42, 2],
      [43, 2],
      [44, 0],
      [45, 0],
      [48, 4],
      [49, 1],
      [51, 3],
      [52, 2],
      [53, 0],
      [54, 1],
      [56, 5],
      [57, 4],
      [59, 0],
      [60, 1],
    ],
  },
  {
    key: classes.SURA,
    bonus: [
      [1, 1],
      [2, 4],
      [4, 0],
      [5, 0],
      [9, 0],
      [10, 1],
      [11, 4],
      [14, 2],
      [15, 2],
      [16, 0],
      [19, 2],
      [20, 0],
      [23, 1],
      [24, 1],
      [25, 4],
      [28, 3],
      [29, 3],
      [30, 0],
      [31, 2],
      [35, 1],
      [36, 4],
      [37, 4],
      [41, 3],
      [42, 2],
      [43, 1],
      [44, 1],
      [48, 3],
      [49, 4],
      [50, 4],
      [51, 0],
      [53, 1],
      [54, 3],
      [55, 5],
      [56, 2],
      [58, 4],
      [59, 0],
      [60, 3],
    ],
  },
  {
    key: classes.MAESTRO,
    bonus: [
      [1, 3],
      [3, 2],
      [5, 4],
      [7, 3],
      [8, 3],
      [10, 2],
      [11, 2],
      [14, 4],
      [15, 4],
      [18, 0],
      [19, 0],
      [22, 3],
      [24, 0],
      [26, 1],
      [27, 1],
      [28, 0],
      [32, 3],
      [34, 2],
      [36, 4],
      [38, 1],
      [39, 1],
      [40, 3],
      [41, 3],
      [44, 4],
      [45, 2],
      [46, 0],
      [49, 3],
      [50, 4],
      [51, 1],
      [52, 2],
      [53, 0],
      [54, 5],
      [56, 4],
      [57, 2],
      [58, 0],
      [59, 3],
      [60, 4],
    ],
  },
  {
    key: classes.WANDERER,
    bonus: [
      [1, 4],
      [2, 3],
      [3, 3],
      [4, 1],
      [7, 1],
      [8, 4],
      [9, 3],
      [12, 2],
      [13, 2],
      [14, 2],
      [17, 4],
      [18, 1],
      [21, 3],
      [22, 2],
      [23, 4],
      [26, 0],
      [27, 0],
      [30, 4],
      [31, 1],
      [32, 2],
      [36, 3],
      [37, 3],
      [38, 3],
      [39, 1],
      [43, 1],
      [44, 4],
      [45, 1],
      [49, 3],
      [50, 1],
      [51, 0],
      [52, 2],
      [53, 4],
      [55, 5],
      [56, 3],
      [58, 2],
      [59, 1],
      [60, 4],
    ],
  },
  {
    key: classes.SORCERER,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 2],
      [5, 3],
      [10, 0],
      [11, 0],
      [12, 3],
      [13, 3],
      [14, 2],
      [15, 4],
      [19, 4],
      [20, 1],
      [21, 1],
      [22, 3],
      [23, 2],
      [24, 4],
      [30, 3],
      [31, 4],
      [32, 2],
      [33, 0],
      [39, 3],
      [40, 4],
      [41, 1],
      [44, 4],
      [45, 2],
      [46, 3],
      [47, 5],
      [48, 5],
      [49, 5],
      [50, 3],
      [51, 4],
      [53, 0],
      [55, 1],
      [57, 2],
      [59, 4],
      [60, 3],
    ],
  },
  {
    key: classes.GENETIC,
    bonus: [
      [1, 3],
      [2, 3],
      [3, 4],
      [6, 4],
      [7, 3],
      [8, 1],
      [12, 3],
      [13, 4],
      [15, 2],
      [18, 2],
      [19, 4],
      [20, 1],
      [23, 3],
      [24, 2],
      [25, 2],
      [28, 4],
      [29, 1],
      [31, 5],
      [34, 0],
      [35, 3],
      [36, 3],
      [39, 4],
      [40, 1],
      [41, 3],
      [44, 3],
      [45, 3],
      [47, 1],
      [50, 3],
      [51, 0],
      [52, 2],
      [53, 4],
      [55, 1],
      [56, 0],
      [57, 2],
      [58, 5],
      [59, 4],
      [60, 3],
    ],
  },
  {
    key: classes.KAGERO_OBORO,
    bonus: [
      [1, 4],
      [3, 3],
      [5, 1],
      [6, 2],
      [8, 0],
      [9, 5],
      [11, 4],
      [12, 0],
      [13, 1],
      [15, 3],
      [16, 5],
      [17, 2],
      [19, 0],
      [20, 4],
      [21, 1],
      [23, 5],
      [24, 2],
      [25, 3],
      [27, 4],
      [29, 1],
      [31, 0],
      [32, 3],
      [34, 4],
      [35, 3],
      [37, 2],
      [38, 4],
      [39, 0],
      [41, 1],
      [42, 3],
      [43, 0],
      [45, 4],
      [46, 5],
      [47, 1],
      [48, 0],
      [50, 4],
    ],
  },
  {
    key: classes.EXPANDED_SUPER_NOVICE,
    bonus: [
      [1, 0],
      [2, 1],
      [4, 2],
      [6, 3],
      [7, 4],
      [9, 5],
      [11, 0],
      [12, 1],
      [14, 2],
      [16, 3],
      [17, 4],
      [19, 5],
      [21, 0],
      [22, 1],
      [24, 2],
      [26, 3],
      [27, 4],
      [29, 5],
      [31, 0],
      [32, 1],
      [34, 2],
      [36, 3],
      [37, 4],
      [39, 5],
      [41, 0],
      [42, 1],
      [44, 2],
      [46, 3],
      [47, 4],
      [49, 5],
    ],
  },
];
