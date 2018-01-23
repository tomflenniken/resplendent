import { combineReducers, createStore } from 'redux';
import supplyReducer from '../reducers/supplyReducer';
import resourcesByPositionReducer from '../reducers/byPosition/resourcesReducer';
import playersByPositionReducer from '../reducers/byPosition/playersReducer';
import positionsReducer from '../reducers/positionsReducer';
import activePlayerReducer from '../reducers/activePlayerReducer';
import cardsReducer from '../reducers/cardsReducer';

const store = createStore(
  combineReducers(
    {
      supply: supplyReducer,
      resourcesByPosition: resourcesByPositionReducer,
      playersByPosition: playersByPositionReducer,
      positions: positionsReducer,
      activePlayer: activePlayerReducer,
      cards: cardsReducer
    },
  )
);

export default store;
