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

  return (
    <div className='noble' style={{ alignSelf: 'flex-end', height: height + 'px' }}>
      <svg height={height} viewBox='0 0 250 250' style={{ fontSize: '80px' }}>
        {
          noble &&
          <g>
            <defs>
              <pattern id={'img' + noble.id} patternUnits='userSpaceOnUse' width='250' height='350'>
                <image xlinkHref={background} x='0' y='0' width='250' height='250' />
              </pattern>
            </defs>
            <rect width='250' height='250' rx='20' ry='20'
                  fill={'url(#img' + noble.id + ')'} />
            <g name='Banner' y='20'>
              <path d='m0 230 v-210 a20,20 0 0 1 20,-20 h60 v250 h-60 a-20,-20 0 0 1 -20,-20 z'
                    fill='rgba(255, 255, 255, 0.5)' />
              {
                noble.points > 0 && <OutlinedText text={noble.points} y={65} x={40} fontSize={80} outline={8} />
              }
            </g>
            {
              Object.keys(noble.requirement).filter((color) => {
                return noble.requirement[color] > 0;
              }).map((color, index) => {
                let y = 215 - 55 * index;
                let stroke = color === WHITE ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)';
                return (
                  <g key={color + '-requirement'}>
                    <rect x="23" y={y - 25} height="50" width="35"
                          strokeWidth="2" rx="5"
                          fill={COLOR_TO_HEX[color]} stroke={stroke} />
                    <OutlinedText y={y + 14} x={40} fontSize={40} text={noble.requirement[color]} outline={6} />
                  </g>
                );
              })
            }
          </g>
        }
        <path d='M22, 249 a-20 -20, 0, 0, 1, -20 -20 v-208 a20,20 0 0 1 20,-20
                 h207 a20,20 0 0 1 20,20 v208 a-20 20, 1, 0, 1, -20 20 z'
              fill='transparent'
              stroke='rgba(0,0,0,.9)' strokeWidth='2' strokeDasharray={noble ? 'none' : '8 4'}
              onClick={handleClick} />

      </svg>
    </div>
  );
};

Noble.propTypes = {
  noble: PropTypes.object,
  selectNoble: PropTypes.func,
};

export default Noble;
