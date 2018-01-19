import React from 'react';
import CardRow from './CardRow';
import { BLACK, BLUE, GREEN, RED, WHITE } from '../../constants/colorNames';

const CardRows = () => {
  return (
    <div className='card-rows'>
      <CardRow rowNumber={2}
               slot1={{color: WHITE, points: 4, cost: {[BLACK]: 7}}}
               slot2={{color: BLUE, points: 3, cost: { [WHITE]: 3, [GREEN]: 3, [RED]: 3, [BLACK]: 5 }}}
               slot3={{color: BLACK, points: 4, cost: { [GREEN]: 3, [RED]: 6, [BLACK]: 3 }}}
               slot4={{color: RED, points: 3, cost: { [WHITE]: 3, [BLUE]: 5, [GREEN]: 3, [BLACK]: 3 }}}
               deck={[1,2,3,4]} />
      <CardRow rowNumber={1}
               slot1={{color: WHITE, points: 2, cost: { [RED]: 5 }}}
               slot2={{color: BLACK, points: 1, cost: { [WHITE]: 3, [GREEN]: 3, [BLACK]: 2 }}}
               slot3={{color: BLUE,  points: 2, cost: { [WHITE]: 2, [RED]: 1, [BLACK]: 4 }}}
               slot4={{color: GREEN, points: 2, cost: { [BLUE]: 5, [GREEN]: 3 }}}
               deck={[1,2]} />
      <CardRow rowNumber={0}
               slot1={{color: WHITE, points: 0, cost: { [BLUE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 }}}
               slot2={{color: BLUE,  points: 0, cost: { [WHITE]: 1, [GREEN]: 1, [RED]: 1, [BLACK]: 1 }}}
               slot3={{color: BLACK, points: 0, cost: { [WHITE]: 1, [BLUE]: 1, [GREEN]: 1, [RED]: 1 }}}
               slot4={{color: GREEN, points: 0, cost: { [BLUE]: 2, [RED]: 2 }}}
               deck={[1,2,3,4,5,6,7,8,9,0]} />
    </div>
  );
};

CardRows.propTypes = {
};

export default CardRows;
