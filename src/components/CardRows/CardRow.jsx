import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardStack from './CardStack';

const CardRow = ({ rowNumber, slot0, slot1, slot2, slot3, deck, selectCard }) => {

  let handleSelectCard = (card, slot) => {
    selectCard(card, rowNumber, slot);
  };

  function selectStack() {
    return (
      <div className={'card-row card-row-' + rowNumber}>
        <CardStack count={deck.length} tier={rowNumber} selectCard={handleSelectCard} />
        <Card slot={0} color={slot0.color} points={slot0.points} cost={slot0.cost} selectCard={handleSelectCard} />
        <Card slot={1} color={slot1.color} points={slot1.points} cost={slot1.cost} selectCard={handleSelectCard} />
        <Card slot={2} color={slot2.color} points={slot2.points} cost={slot2.cost} selectCard={handleSelectCard} />
        <Card slot={3} color={slot3.color} points={slot3.points} cost={slot3.cost} selectCard={handleSelectCard} />
      </div>
    );
  }

  return selectStack();
};

CardRow.propTypes = {
  rowNumber: PropTypes.number,
  slot0: PropTypes.object,
  slot1: PropTypes.object,
  slot2: PropTypes.object,
  slot3: PropTypes.object,
  deck: PropTypes.array,
};

export default CardRow;
