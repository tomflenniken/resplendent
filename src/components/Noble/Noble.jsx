import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import background from './background.jpg';
import OutlinedText from '../OutlinedText/OutlinedText';
import { WHITE } from '../../constants/colorNames';

const Noble = ({ noble, height = 200, selectNoble }) => {

  function handleClick(event) {
    event.preventDefault();
    if (noble && selectNoble) {
      selectNoble(noble.id);
    }
  }

  let sideLength = 140;
  let bannerWidth = 30;
  let arcLength = 10;
  let pointsSize = 40;

  return (
    <div className='noble' style={{ alignSelf: 'flex-end', height: height + 'px' }}>
      <svg height={height} viewBox={`0 0 ${sideLength} ${sideLength}`} style={{ fontSize: '50px' }}>
        <g>
          <defs>
            <pattern id={'img' + noble.id} patternUnits='userSpaceOnUse' width={sideLength} height={sideLength}>
              <image xlinkHref={background} x='0' y='0' width={sideLength} height={sideLength} />
            </pattern>
          </defs>
          <rect width={sideLength} height={sideLength} rx={arcLength} ry={arcLength}
                fill={'url(#img' + noble.id + ')'} />
          <g name='Banner' y='0'>
            <path d={
              `m0 ${sideLength - arcLength - 1} v-${sideLength - 2 * arcLength - 2}
              a${arcLength},${arcLength} 0 0 1 ${arcLength},-${arcLength}
              h${bannerWidth - arcLength} v${sideLength - 2}
              h-${bannerWidth - arcLength}
              a-${arcLength},-${arcLength} 0 0 1 -${arcLength},-${arcLength}
              z`
            }
                  fill='rgba(255, 255, 255, 0.5)' />
            {
              noble.points > 0 && <OutlinedText text={noble.points} y={pointsSize} x='17'
                                                fontSize={pointsSize} outline={5} />
            }
          </g>
          {
            Object.keys(noble.requirement).filter((color) => {
              return noble.requirement[color] > 0;
            }).map((color, index) => {
              let height = 25;
              let width = Math.ceil(height / 1.4);
              let yOffset = 5;
              let xOffset = (bannerWidth - width) / 2;
              let y = sideLength - height - xOffset - (height + yOffset) * index;
              let stroke = color === WHITE ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)';
              return (
                <g key={color + '-requirement'}>
                  <rect x={xOffset} y={y} height={height} width={width}
                        strokeWidth="2" rx="5"
                        fill={COLOR_TO_HEX[color]} stroke={stroke} />
                  <OutlinedText y={y + (height / 2) + 6} x={xOffset + width / 2} fontSize={20}
                                text={noble.requirement[color]} outline={4} />
                </g>
              );
            })
          }

          <path d={
            `M${arcLength + 1}, ${sideLength - 1}
            a-${arcLength} -${arcLength}, 0, 0, 1, -${arcLength} -${arcLength}
            v-${sideLength - 2 * arcLength - 2}
            a${arcLength},${arcLength} 0 0 1 ${arcLength},-${arcLength}
            h${sideLength - 2 * arcLength - 2}
            a${arcLength},${arcLength} 0 0 1 ${arcLength},${arcLength}
            v${sideLength - 2 * arcLength - 2}
            a-${arcLength} ${arcLength}, 1, 0, 1, -${arcLength} ${arcLength}
            z`
          }
                fill='transparent' stroke='rgba(0,0,0,.9)' strokeWidth='2'
                onClick={handleClick} />
        </g>
      </svg>
    </div>
  );
};

Noble.propTypes = {
  noble: PropTypes.object,
  selectNoble: PropTypes.func,
};

export default Noble;
