import { DRAW_CARD} from '../actions/playerActions';
import { CARD_DEFINITIONS, CARD_DEFINITIONS_BY_ID } from '../constants/cardDefintions';

export function createDeckReducer(rowNumber) {
  const initialState = CARD_DEFINITIONS.filter((value) => {
    return value.tier === rowNumber;
  });

  return (state = initialState, { type, payload }) => {
    switch (type) {
      case DRAW_CARD:
        let card = CARD_DEFINITIONS_BY_ID[payload.card];
        if (card.tier === rowNumber) {
          return [
            ...state.filter((value) => {
              return value.id !== card.id;
            })
          ];
        }
        return state;
      default:
        return state;
    }
  };
}
