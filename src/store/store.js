import { combineReducers, createStore } from 'redux';
import supplyReducer from '../reducers/supplyReducer';
import resourcesByPositionReducer from '../reducers/byPosition/resourcesReducer';
import playersByPositionReducer from '../reducers/byPosition/playersReducer';
import cardsByPositionReducer from '../reducers/byPosition/cardsReducer';
import noblesByPositionReducer from '../reducers/byPosition/noblesReducer';
import positionsReducer from '../reducers/positionsReducer';
import activePlayerReducer from '../reducers/activePlayerReducer';
import { createRowReducer } from '../reducers/rowReducerCreator';
import { createDeckReducer } from '../reducers/deckReducerCreator';
import { CARD_DEFINITIONS } from '../constants/cardDefintions';
import { NOBLE_DEFINITIONS } from '../constants/nobleDefintions';
import { shuffle } from 'lodash';
import { createNoblesReducer } from '../reducers/noblesReducerCreator';

let deck0 = CARD_DEFINITIONS.filter((card) => {
  return card.tier === 0;
}).map((card) => {
  return card.id;
});

let deck1 = CARD_DEFINITIONS.filter((card) => {
  return card.tier === 1;
}).map((card) => {
  return card.id;
});

let deck2 = CARD_DEFINITIONS.filter((card) => {
  return card.tier === 2;
}).map((card) => {
  return card.id;
});

function pull4(deck) {
  let row = [];
  deck = shuffle(deck);
  for (let i = 0; i < 4; i++) {
    row.push(deck.pop());
  }
  return { row, deck };
}

function pickNobles(playerCount) {
  let nobles = [];
  let shuffledNobles = shuffle(NOBLE_DEFINITIONS);
  for (let i = 0; i < playerCount + 1; i++) {
    nobles.push(shuffledNobles.pop().id);
  }
  return nobles;
}

let { row: initialRow0, deck: initialDeck0 } = pull4(deck0);
let { row: initialRow1, deck: initialDeck1 } = pull4(deck1);
let { row: initialRow2, deck: initialDeck2 } = pull4(deck2);

let playerCount = 4;
let initialNobles = pickNobles(playerCount);

const store = createStore(
  combineReducers(
    {
      supply: supplyReducer,
      resourcesByPosition: resourcesByPositionReducer,
      playersByPosition: playersByPositionReducer,
      cardsByPosition: cardsByPositionReducer,
      noblesByPosition: noblesByPositionReducer,
      positions: positionsReducer,
      activePlayer: activePlayerReducer,
      nobles: createNoblesReducer(initialNobles),
      row0: createRowReducer(initialRow0),
      row1: createRowReducer(initialRow1),
      row2: createRowReducer(initialRow2),
      deck0: createDeckReducer(0, initialDeck0),
      deck1: createDeckReducer(1, initialDeck1),
      deck2: createDeckReducer(2, initialDeck2),
    },
  )
);

export default store;
