import { RETURN_PLAYER_RESOURCE_TO_STACK, SELECT_RESOURCE_FROM_STACK } from '../../actions/playerActions';
import { BLACK, BLUE, GOLD, GREEN, RED, WHITE } from '../../constants/colorNames';

const initialState = {
  North: {
    [WHITE]: 1,
    [BLUE]: 1,
    [RED]: 1,
    [GREEN]: 1,
    [BLACK]: 1,
    [GOLD]: 0,
  },
  East: {
    [WHITE]: 1,
    [BLUE]: 1,
    [RED]: 1,
    [GREEN]: 1,
    [BLACK]: 1,
    [GOLD]: 0,
  },
  South: {
    [WHITE]: 1,
    [BLUE]: 1,
    [RED]: 1,
    [GREEN]: 1,
    [BLACK]: 1,
    [GOLD]: 0,
  },
  West: {
    [WHITE]: 1,
    [BLUE]: 1,
    [RED]: 1,
    [GREEN]: 1,
    [BLACK]: 1,
    [GOLD]: 0,
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_RESOURCE_FROM_STACK:
      return {
        ...state,
        [payload.position]: {
          ...state[payload.position],
          [payload.color]: state[payload.position][payload.color] + 1
        }
      };
    case RETURN_PLAYER_RESOURCE_TO_STACK:
      return {
        ...state,
        [payload.position]: {
          ...state[payload.position],
          [payload.color]: state[payload.position][payload.color] - 1
        }
      };
    default:
      return state;
  }
}
