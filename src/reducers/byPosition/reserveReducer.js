import { RESERVE_CARD } from '../../actions/playerActions';

const initialState = {
  North: [],
  East: [],
  South: [],
  West: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESERVE_CARD:
      return {
        ...state,
        [payload.position]: [
          ...state[payload.position],
          payload.card
        ]
      };
    default:
      return state;
  }
}
