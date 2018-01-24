import { SELECT_CARD } from '../actions/playerActions';

export function createRowReducer(initialState) {
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case SELECT_CARD:
        let index = state.findIndex((value) => {
          return value === payload.card;
        });

        if (index >= 0) {
          let newState = [
            ...state
          ];
          newState[index] = payload.replacement;
          return newState;
        }
        return state;
      default:
        return state;
    }
  };
}
