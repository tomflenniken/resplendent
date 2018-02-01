import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CARD_DEFINITIONS_BY_ID } from '../../constants/cardDefintions';

const PlayerCardContainer = ({ cards }) => {
  return (
    <div style={{ flex: '1 1' }}>
      {
        cards.map((card, index) => {
          return (
            <div style={{ position: 'absolute', marginTop: 22 * index + 'px' }}>
              <Card key={card} card={CARD_DEFINITIONS_BY_ID[card]} height={100} />
            </div>
          );
        })
      }
    </div>
  );
};

PlayerCardContainer.propTypes = {
  cards: PropTypes.array,
};

export default PlayerCardContainer;
