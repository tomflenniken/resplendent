import React from 'react';
import PropTypes from 'prop-types';
import OutlinedText from '../OutlinedText/OutlinedText';
import { BLACK, BLUE, GOLD, GREEN } from '../../constants/colorNames';
import { COLOR_TO_HEX } from '../../constants/colorToHex';

const CardStack = ({ count, tier, selectCard }) => {
  function yLocation(index) {
    return cardDepth * (count - 1) - index * cardDepth;
  }

  function fillColor() {
    switch (tier) {
      case 0:
        return GREEN;
      case 1:
        return GOLD;
      case 2:
        return BLUE;
      default:
        return BLACK;
    }
  }

  function handleClick(event) {
    event.preventDefault();
    if (!event.target.parentElement.nextSibling) {
      selectCard(tier);
    }
  }

  let cardDepth = 3;
  let cardHeight = 200;
  let totalHeight = cardHeight + cardDepth * (count - 1) * cardHeight / 350;

  return (
    <div className='card-stack' style={{ height: totalHeight + 'px' }}>
      <svg height={totalHeight} width={cardHeight * 5 / 7} viewBox={'0 0 250 ' + (350 + cardDepth * (count - 1))}
           style={{ fontSize: '80px' }}>
        {
          [...Array(count)].map((value, index) => {
            if (count === 0) {
              return (
                <path key={tier + '-empty'}
                      d='m21, 1
                         h208 a20,20 0 0 1 20,20
                         v308 a20,20 0 0 1 -20,20
                         h-208 a-20,-20 0 0 1 -20,-20
                         v-308 a20,20 0 0 1 20,-20
                         z'
                      fill='none' stroke='gray'
                      strokeWidth='2' strokeDasharray='8 4' />
              );
            }
            return (
              <g key={index + '-group'}
                 transform={'translate(0,' + yLocation(index) + ')'}>
                <rect width='250' height='350' rx='20' ry='20'
                      fill="WHITE" />
                <rect width='220' height='320'
                      x="15" y="15"
                      rx='15' ry='15'
                      fill={COLOR_TO_HEX[fillColor()]} />
                <rect width='220' height='320'
                      x="15" y="15"
                      rx='15' ry='15'
                      fill='rgba(0,0,0,.25)' />
                <OutlinedText text={'Splendor'} fontSize={50} color={GOLD} outline={6} x={125} y={185} />
                <g transform="translate(125, 315)">
                  {
                    [...Array(tier + 1)].map((value, index) => {
                      return (
                        <circle key={index} r="10" cx={25 * (index - tier / 2)} fill="WHITE"/>
                      )
                    })
                  }
                </g>
                <path d='m21, 1
                         h208 a20,20 0 0 1 20,20
                         v308 a20,20 0 0 1 -20,20
                         h-208 a-20,-20 0 0 1 -20,-20
                         v-308 a20,20 0 0 1 20,-20
                         z'
                      fill='transparent'
                      stroke='rgba(0,0,0,.2)' strokeWidth='2'/>
                <path d='m21, 1
                         h208 a20,20 0 0 1 20,20
                         v308 a20,20 0 0 1 -20,20
                         h-208 a-20,-20 0 0 1 -20,-20
                         v-308 a20,20 0 0 1 20,-20
                         z'
                      fill='transparent' stroke='rgba(0,0,0,.5)' strokeWidth='1'
                      onClick={handleClick} />
              </g>
            );
          })
        }
      </svg>
    </div>
  );
};

CardStack.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  selectResourceFromStack: PropTypes.func
};

export default CardStack;
