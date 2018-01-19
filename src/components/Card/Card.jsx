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
    <div className='card' style={{alignSelf: 'flex-end', height: '200px' }}>
      <svg height='200' viewBox='0 0 250 350' style={{ fontSize: '80px' }}>
        <defs>
          <pattern id='img1' patternUnits='userSpaceOnUse' width='250' height='350'>
            <image xlinkHref={background} x='0' y='0' width='250' height='350' />
          </pattern>
          <linearGradient id={'gradient' + color} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: COLOR_TO_HEX[color], stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: COLOR_TO_HEX[color], stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width='250' height='350' rx='20' ry='20'
              fill='url(#img1)' />
        <rect width='250' height='350' rx='20' ry='20'
              fill={'url(#gradient' + color + ')'} fillOpacity='.4' />
        <g name='Banner' y='20'>
          <path d='m0 80 v-60 a20,20 0 0 1 20,-20 h210 a20,20 0 0 1 20,20 v60 z' fill='rgba(255, 255, 255, 0.5)' />
          {
            points > 0 && <OutlinedText text={points} y={70} x={40} fontSize={80} outline={8} />
          }
          <GemIcon color={color} />
        </g>
        {
          Object.keys(cost).map((color, index) => {
            let y = 310 - 55 * index;
            let stroke = color === WHITE ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)';
            return (
              <g key={color + '-cost'}>
                <circle r='25' cx='40' cy={y}
                        fill={COLOR_TO_HEX[color]}
                        stroke={stroke} strokeWidth='2' />
                <circle r='21' cx='40' cy={y} fill='rgba(255,255,255,.9)' />
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
              stroke='rgba(0,0,0,.9)' fill='transparent' strokeWidth='2' onClick={handleClick} />
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
