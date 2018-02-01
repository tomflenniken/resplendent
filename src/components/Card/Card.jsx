import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import background from './background.jpg';
import OutlinedText from '../OutlinedText/OutlinedText';
import { WHITE } from '../../constants/colorNames';
import GemIcon from '../GemIcon/GemIcon';

const Card = ({ card, height=200, selectCard }) => {

  function handleClick(event) {
    event.preventDefault();
    if (card && selectCard) {
      selectCard(card.id);
    }
  }

  return (
    <div className='card' style={{ alignSelf: 'flex-end', height: height + 'px' }}>
      <svg height={height} viewBox='0 0 250 350' style={{ fontSize: '80px' }}>
        {
          card &&
          <g>
            <defs>
              <pattern id={'img' + card.id} patternUnits='userSpaceOnUse' width='250' height='350'>
                <image xlinkHref={background} x='0' y='0' width='250' height='350' />
              </pattern>
              <linearGradient id={'gradient' + card.id} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: COLOR_TO_HEX[card.color], stopOpacity: 0 }} />
                <stop offset="100%" style={{ stopColor: COLOR_TO_HEX[card.color], stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width='250' height='350' rx='20' ry='20'
                  fill={'url(#img' + card.id + ')'} />
            <rect width='250' height='350' rx='20' ry='20'
                  fill={'url(#gradient' + card.id + ')'} fillOpacity='.4' />
            <g name='Banner' y='20'>
              <path d='m0 80 v-60 a20,20 0 0 1 20,-20 h210 a20,20 0 0 1 20,20 v60 z' fill='rgba(255, 255, 255, 0.5)' />
              {
                card.points > 0 && <OutlinedText text={card.points} y={70} x={40} fontSize={80} outline={8} />
              }
              <GemIcon color={card.color} />
            </g>
            {
              Object.keys(card.cost).filter((color) => {
                return card.cost[color] > 0;
              }).map((color, index) => {
                let y = 310 - 55 * index;
                let stroke = color === WHITE ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)';
                return (
                  <g key={color + '-cost'}>
                    <circle r='25' cx='40' cy={y}
                            fill={COLOR_TO_HEX[color]}
                            stroke={stroke} strokeWidth='2' />
                    <circle r='21' cx='40' cy={y} fill='rgba(255,255,255,.9)' />
                    <circle r='22' cx='38' cy={y} fill={COLOR_TO_HEX[color]} />
                    <OutlinedText y={y + 14} x={40} fontSize={40} text={card.cost[color]} outline={6} />
                  </g>
                );
              })
            }
          </g>
        }
        <path d='M21, 349 a-20 -20, 0, 0, 1, -20 -20 v-308 a20,20 0 0 1 20,-20
                 h208 a20,20 0 0 1 20,20 v308 a-20 20, 1, 0, 1, -20 20 z '
              fill='transparent'
              stroke='rgba(0,0,0,.9)' strokeWidth='2' strokeDasharray={card ? 'none' : '8 4'}
              onClick={handleClick} />

      </svg>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  selectCard: PropTypes.func,
};

export default Card;
