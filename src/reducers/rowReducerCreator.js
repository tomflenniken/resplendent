import { DRAW_CARD, SELECT_CARD } from '../actions/playerActions';
import { CARD_DEFINITIONS_BY_ID } from '../constants/cardDefintions';

const initialState = [null, null, null, null];

export function createRowReducer(rowNumber) {
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case DRAW_CARD:
        let card = CARD_DEFINITIONS_BY_ID[payload.card];
        if (card.tier === rowNumber) {
          let newState = [
            ...state
          ];
          newState[state.findIndex((value) => {
            return value === null;
          })] = card.id;
          return newState;
        }
        return state;
      case SELECT_CARD:
        let index = state.findIndex((value) => {
          return value === payload.card;
        });

        if (index >= 0) {
          let newState = [
            ...state
          ];
          newState[index] = null;
          return newState;
        }
        return state;
      default:
        return state;
    }
  };
}
