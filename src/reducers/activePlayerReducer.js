import { END_TURN } from '../actions/gameActions';

const initialState = 'North';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case END_TURN:
      return payload.nextPlayer;
    default:
      return state;
  }
};
