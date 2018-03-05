import { SELECT_NOBLE } from '../actions/playerActions';

export function createNoblesReducer(initialState) {
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case SELECT_NOBLE:
        let newState = [
          ...state
        ];
        let index = state.findIndex((value) => {
          return value === payload.noble;
        });
        newState[index] = null;
        return newState;
      default:
        return state;
    }
  };
}
