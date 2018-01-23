import { combineReducers, createStore } from 'redux';
import supplyReducer from '../reducers/supplyReducer';
import resourcesByPositionReducer from '../reducers/byPosition/resourcesReducer';
import playersByPositionReducer from '../reducers/byPosition/playersReducer';
import positionsReducer from '../reducers/positionsReducer';
import activePlayerReducer from '../reducers/activePlayerReducer';
import { createRowReducer } from '../reducers/rowReducerCreator';
import { createDeckReducer } from '../reducers/deckReducerCreator';

const store = createStore(
  combineReducers(
    {
      supply: supplyReducer,
      resourcesByPosition: resourcesByPositionReducer,
      playersByPosition: playersByPositionReducer,
      positions: positionsReducer,
      activePlayer: activePlayerReducer,
      row0: createRowReducer(0),
      row1: createRowReducer(1),
      row2: createRowReducer(2),
      deck0: createDeckReducer(0),
      deck1: createDeckReducer(1),
      deck2: createDeckReducer(2),
    },
  )
);

export default store;
