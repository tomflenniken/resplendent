import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CARD_DEFINITIONS_BY_ID } from '../../constants/cardDefintions';

const Reserve = ({ cards }) => {
  return (
    <div style={{ display: 'flex', flex: '1 1', height: 100 + 'px' }}>
      <Card card={CARD_DEFINITIONS_BY_ID[cards[0]]} height={100} />
      <Card card={CARD_DEFINITIONS_BY_ID[cards[1]]} height={100} />
      <Card card={CARD_DEFINITIONS_BY_ID[cards[2]]} height={100} />
    </div>
  );
};

Reserve.propTypes = {
  cards: PropTypes.array,
};

export default Reserve;
