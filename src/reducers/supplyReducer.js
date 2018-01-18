import { RETURN_PLAYER_RESOURCE_TO_STACK, SELECT_RESOURCE_FROM_STACK } from '../actions/playerActions';
import { BLACK, BLUE, GOLD, GREEN, RED, WHITE } from '../constants/colorNames';

const initialState = {
  [WHITE]: 3,
  [BLUE]: 3,
  [RED]: 3,
  [GREEN]: 3,
  [BLACK]: 3,
  [GOLD]: 5,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_RESOURCE_FROM_STACK:
      return Object.assign({}, this.state, {
        ...state,
        [payload.color]: state[payload.color] - 1
      });
    case RETURN_PLAYER_RESOURCE_TO_STACK:
      return Object.assign({}, state, {
        ...state,
        [payload.color]: state[payload.color] + 1
      });
    default:
      return state;
  }
};
