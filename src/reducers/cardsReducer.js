import { SELECT_CARD } from '../actions/playerActions';
import { BLACK, BLUE, GREEN, RED, WHITE } from '../constants/colorNames';

const initialState = [
  {
    0: { color: WHITE, points: 0, cost: { [BLUE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 } },
    1: { color: BLUE, points: 0, cost: { [WHITE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 } },
    2: { color: BLACK, points: 0, cost: { [WHITE]: 1, [BLUE]: 1, [GREEN]: 1, [RED]: 1 } },
    3: { color: GREEN, points: 0, cost: { [BLUE]: 2, [RED]: 2 } },
    deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
  {
    0: { color: WHITE, points: 2, cost: { [RED]: 5 } },
    1: { color: BLACK, points: 1, cost: { [WHITE]: 3, [GREEN]: 3, [BLACK]: 2 } },
    2: { color: BLUE, points: 2, cost: { [WHITE]: 2, [RED]: 1, [BLACK]: 4 } },
    3: { color: GREEN, points: 2, cost: { [BLUE]: 5, [GREEN]: 3 } },
    deck: [1, 2],
  },
  {
    0: { color: WHITE, points: 4, cost: { [BLACK]: 7 } },
    1: { color: BLUE, points: 3, cost: { [WHITE]: 3, [GREEN]: 3, [RED]: 3, [BLACK]: 5 } },
    2: { color: BLACK, points: 4, cost: { [GREEN]: 3, [RED]: 6, [BLACK]: 3 } },
    3: { color: RED, points: 3, cost: { [WHITE]: 3, [BLUE]: 5, [GREEN]: 3, [BLACK]: 3 } },
    deck: [1, 2, 3, 4],
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_CARD:
      let newState = [
        {
          0: state[0][0],
          1: state[0][1],
          2: state[0][2],
          3: state[0][3],
        },
        {
          0: state[1][0],
          1: state[1][1],
          2: state[1][2],
          3: state[1][3],
        },
        {
          0: state[2][0],
          1: state[2][1],
          2: state[2][2],
          3: state[2][3],
        }
      ];
      newState[payload.row][payload.slot] = { color: WHITE, points: 0, cost: {} };
      return newState;
    default:
      return state;
  }
};
