import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardStack from './CardStack';

const CardRow = ({ rowNumber, slot1, slot2, slot3, slot4, deck }) => {
  let selectCard = (id, tier) => {
    console.log('selected');
  };

  function selectStack() {
    return (
      <div className={'card-row card-row-' + rowNumber}>
        <CardStack count={deck.length} tier={rowNumber} selectCard={selectCard} />
        <Card color={slot1.color} points={slot1.points} cost={slot1.cost} selectCard={selectCard} />
        <Card color={slot2.color} points={slot2.points} cost={slot2.cost} selectCard={selectCard} />
        <Card color={slot3.color} points={slot3.points} cost={slot3.cost} selectCard={selectCard} />
        <Card color={slot4.color} points={slot4.points} cost={slot4.cost} selectCard={selectCard} />
      </div>
    );
  }

  return selectStack();
};

CardRow.propTypes = {
  rowNumber: PropTypes.number,
  slot1: PropTypes.object,
  slot2: PropTypes.object,
  slot3: PropTypes.object,
  slot4: PropTypes.object,
  deck: PropTypes.array,
};

export default CardRow;
