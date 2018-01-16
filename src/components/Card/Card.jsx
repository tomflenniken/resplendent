import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import background from './background.jpg';
import OutlinedText from '../OutlinedText/OutlinedText';
import { WHITE } from '../../constants/colorNames';
import GemIcon from '../GemIcon/GemIcon';

const Card = ({ id, color, cost, points, selectCard }) => {

  function handleClick(event) {
    event.preventDefault();
    selectCard(id);
  }

  return (
    <div className='card'>
      <svg height='150' viewBox='0 0 250 350' style={{ fontSize: '80px' }}>
        <defs>
          <pattern id='img1' patternUnits='userSpaceOnUse' width='250' height='350'>
            <image xlinkHref={background} x='0' y='0' width='250' height='350' />
          </pattern>
        </defs>
        <rect width='250' height='350' rx='20' ry='20'
              fill='url(#img1)' />
        <rect width='250' height='350' rx='20' ry='20'
              fill={COLOR_TO_HEX[color]} fillOpacity='0.4' />
        <g name='Banner' y='20'>
          <path d='m0 80 v-60 a20,20 0 0 1 20,-20 h210 a20,20 0 0 1 20,20 v60 z' fill='rgba(255, 255, 255, 0.7)' />
          {
            points > 0 && <OutlinedText text={points} y={70} x={40} fontSize={80} outline={8} />
          }
          <GemIcon color={color} />
        </g>
        {
          Object.keys(cost).map((color, index) => {
            let y = 310 - 55 * index;
            let stroke = color === WHITE ? 'black' : 'white';
            return (
              <g key={color + '-cost'}>
                <circle r='25' cx='40' cy={y} strokeWidth='2'
                        fill={COLOR_TO_HEX[color]} stroke={stroke} />
                <circle r='21' cx='40' cy={y} fill='white' />
                <circle r='22' cx='38' cy={y} fill={COLOR_TO_HEX[color]} />
                <OutlinedText y={y + 14} x={40} fontSize={40} text={cost[color]} outline={6} />
              </g>
            );
          })
        }
        <path d='M21, 349 a-20 -20, 0, 0, 1, -20 -20
              v-308 a20,20 0 0 1 20,-20
              h208 a20,20 0 0 1 20,20
              v308 a-20 20, 1, 0, 1, -20 20 z '
              stroke='black' fill='transparent' strokeWidth='2' onClick={handleClick} />
      </svg>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  cost: PropTypes.object,
  points: PropTypes.number,
  selectCard: PropTypes.func,
};

export default Card;
