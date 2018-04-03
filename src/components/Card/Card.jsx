import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import background from './background.jpg';
import OutlinedText from '../OutlinedText/OutlinedText';
import { WHITE } from '../../constants/colorNames';
import GemIcon from '../GemIcon/GemIcon';

const Card = ({ card, height = 200, selectCard }) => {

  function handleClick(event) {
    event.preventDefault();
    if (card && selectCard) {
      selectCard(card.id);
    }
  }

  let cardHeight = 200;
  let cardWidth = Math.ceil(cardHeight * 2.5 / 3.5);
  let arcLength = 10;
  let bannerHeight = 50;
  let borderWidth = 2;
  let borderColor = 'rgba(0,0,0,.5)';
  let pointFontSize = 40;
  let gemWidth = 45;
  let gemMargin = 5;

  return (
    <div className='card' style={{ alignSelf: 'flex-end', height: height + 'px' }}>
      <svg height={height} viewBox={`0 0 ${cardWidth} ${cardHeight}`} style={{ fontSize: '80px' }}>
        {
          card &&
          <g>
            <defs>
              <pattern id={'img' + card.id} patternUnits='userSpaceOnUse' width={cardWidth} height={cardHeight}>
                <image xlinkHref={background} x='0' y='0' width={cardWidth} height={cardHeight} />
              </pattern>
              <linearGradient id={'gradient' + card.id} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: COLOR_TO_HEX[card.color], stopOpacity: 0 }} />
                <stop offset="100%" style={{ stopColor: COLOR_TO_HEX[card.color], stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width={cardWidth} height={cardHeight} rx={arcLength} ry={arcLength}
                  fill={'url(#img' + card.id + ')'} />
            <rect width={cardWidth} height={cardHeight} rx={arcLength} ry={arcLength}
                  fill={'url(#gradient' + card.id + ')'} fillOpacity='.4' />
            <g name='Banner'>
              <path d={
                `m0 ${bannerHeight}
                v-${bannerHeight - arcLength}
                a${arcLength},${arcLength} 0 0 1 ${arcLength},-${arcLength}
                h${cardWidth - 2 * arcLength}
                a${arcLength},${arcLength} 0 0 1 ${arcLength},${arcLength}
                v${bannerHeight - arcLength}
                z`
              } fill='rgba(255, 255, 255, 0.5)' />
              {
                card.points > 0 && <OutlinedText text={card.points} y={pointFontSize} x={20} fontSize={pointFontSize}
                                                 outline={5} />
              }
              <GemIcon x={cardWidth - gemWidth - gemMargin} y={gemMargin}
                       width={gemWidth} height={bannerHeight - gemMargin * 2}
                       color={card.color} />
            </g>
            {
              Object.keys(card.cost).filter((color) => {
                return card.cost[color] > 0;
              }).map((color, index) => {
                let padding = 4;
                let outerPadding = 6;
                let r = 15;
                let y = 200 - r - outerPadding - (2 * r + padding) * index;
                let x = r + outerPadding;
                let stroke = color === WHITE ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)';
                return (
                  <g key={color + '-cost'}>
                    <circle r={r} cx={x} cy={y}
                            fill={COLOR_TO_HEX[color]}
                            stroke={stroke} strokeWidth='2' />
                    <circle r={r - 3} cx={x} cy={y} fill='rgba(255,255,255,.9)' />
                    <circle r={r - 2} cx={x - 2} cy={y} fill={COLOR_TO_HEX[color]} />
                    <OutlinedText y={y + 8} x={x} fontSize={24} text={card.cost[color]} outline={4} />
                  </g>
                );
              })
            }
          </g>
        }
        <path d={
          `M${arcLength + borderWidth / 2}, ${cardHeight - borderWidth / 2}
          a-${arcLength} -${arcLength}, 0, 0, 1, -${arcLength} -${arcLength}
          v-${cardHeight - arcLength * 2 - borderWidth}
          a${arcLength},${arcLength} 0 0 1 ${arcLength},-${arcLength}
          h${cardWidth - arcLength * 2 - borderWidth}
          a${arcLength},${arcLength} 0 0 1 ${arcLength},${arcLength}
          v${cardHeight - arcLength * 2 - borderWidth}
          a-${arcLength} ${arcLength}, 1, 0, 1, -${arcLength} ${arcLength}
          z`
        }
              fill='transparent'
              stroke={borderColor} strokeWidth={borderWidth} strokeDasharray={card ? 'none' : '8 4'}
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
