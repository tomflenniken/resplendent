import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { BLACK, BLUE, GREEN, RED, WHITE } from '../../constants/colorNames';

const CardRow = ({ rowNumber }) => {
  let selectCard = () => {
    console.log('selected');
  };

  function selectStack() {
    switch (rowNumber) {
      case 2:
        return (
          <div className={'card-row card-row-' + rowNumber}>
            <Card color={WHITE} points={4} selectCard={selectCard} cost={{ [BLACK]: 7 }} />
            <Card color={BLUE} points={3} selectCard={selectCard}
                  cost={{ [WHITE]: 3, [GREEN]: 3, [RED]: 3, [BLACK]: 5 }} />
            <Card color={BLACK} points={4} selectCard={selectCard} cost={{ [GREEN]: 3, [RED]: 6, [BLACK]: 3 }} />
            <Card color={RED} points={3} selectCard={selectCard}
                  cost={{ [WHITE]: 3, [BLUE]: 5, [GREEN]: 3, [BLACK]: 3 }} />
          </div>);
      case 1:
        return (
          <div className={'card-row card-row-' + rowNumber}>
            <Card color={WHITE} points={2} selectCard={selectCard} cost={{ [RED]: 5 }} />
            <Card color={BLACK} points={1} selectCard={selectCard} cost={{ [WHITE]: 3, [GREEN]: 3, [BLACK]: 2 }} />
            <Card color={BLUE} points={2} selectCard={selectCard} cost={{ [WHITE]: 2, [RED]: 1, [BLACK]: 4 }} />
            <Card color={GREEN} points={2} selectCard={selectCard} cost={{ [BLUE]: 5, [GREEN]: 3 }} />
          </div>);
      case 0:
        return (
          <div className={'card-row card-row-' + rowNumber}>
            <Card color={WHITE} points={0} selectCard={selectCard}
                  cost={{ [BLUE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 }} />
            <Card color={BLUE} points={0} selectCard={selectCard}
                  cost={{ [WHITE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 }} />
            <Card color={BLACK} points={0} selectCard={selectCard}
                  cost={{ [WHITE]: 1, [BLUE]: 1, [GREEN]: 1, [RED]: 1 }} />
            <Card color={GREEN} points={0} selectCard={selectCard} cost={{ [BLUE]: 2, [RED]: 2 }} />
          </div>);
      default:
        return <div/>
    }
  }

  return selectStack();
};

CardRow.propTypes = {
  rowNumber: PropTypes.number
};

export default CardRow;
