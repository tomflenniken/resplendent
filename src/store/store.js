import { combineReducers, createStore } from 'redux';
import supplyReducer from '../reducers/supplyReducer';
import resourcesByPositionReducer from '../reducers/byPosition/resourcesReducer';
import playersByPositionReducer from '../reducers/byPosition/playersReducer';
import positionsReducer from '../reducers/positionsReducer';
import activePlayerReducer from '../reducers/activePlayerReducer';

const store = createStore(
  combineReducers(
    {
      supply: supplyReducer,
      resourcesByPosition: resourcesByPositionReducer,
      playersByPosition: playersByPositionReducer,
      positions: positionsReducer,
      activePlayer: activePlayerReducer
    },
  )
);

export default store;
