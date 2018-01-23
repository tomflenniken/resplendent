import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardStack from './CardStack';
import { CARD_DEFINITIONS_BY_ID } from '../../constants/cardDefintions';

const CardRow = ({ rowNumber, row, deck, selectCard }) => {
  return (
    <div className={'card-row card-row-' + rowNumber}>
      <CardStack count={deck.length} tier={rowNumber} selectCard={selectCard} />
      <Card card={CARD_DEFINITIONS_BY_ID[row[0]]} selectCard={selectCard} />
      <Card card={CARD_DEFINITIONS_BY_ID[row[1]]} selectCard={selectCard} />
      <Card card={CARD_DEFINITIONS_BY_ID[row[2]]} selectCard={selectCard} />
      <Card card={CARD_DEFINITIONS_BY_ID[row[3]]} selectCard={selectCard} />
    </div>
  );
};

CardRow.propTypes = {
  row: PropTypes.array,
  rowNumber: PropTypes.number,
  cards: PropTypes.object,
  deck: PropTypes.array,
  selectCard: PropTypes.func,
};

export default CardRow;
