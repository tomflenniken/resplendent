import React from 'react';
import CardRow from '../CardRow/CardRow';

const CardRows = () => {
  return (
    <div className='card-rows'>
      <CardRow rowNumber={2} />
      <CardRow rowNumber={1} />
      <CardRow rowNumber={0} />
    </div>
  );
};

CardRows.propTypes = {
};

export default CardRows;
