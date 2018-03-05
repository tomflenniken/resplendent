import { SELECT_NOBLE} from '../../actions/playerActions';

const initialState = {
  North: [],
  East: [],
  South: [],
  West: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_NOBLE:
      return {
        ...state,
        [payload.position]: [
          ...state[payload.position],
          payload.noble
        ]
      };
    default:
      return state;
  }
}
