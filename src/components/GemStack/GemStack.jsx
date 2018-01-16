import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import OutlinedText from '../OutlinedText/OutlinedText';

const GemStack = ({ count, color, selectGemFromStack, position, height }) => {
  function yLocation(index) {
    // 65
    // 109
    // 54 / 7

    return 100 - (index * 7);
  }

  function handleClick(event) {
    event.preventDefault();
    if (!event.target.parentElement.nextSibling) {
      selectGemFromStack(color, position);
    }
  }

  return (
    <div className='gem-stack'>
      <svg height={height} viewBox="0 0 100 150">
        {
          [...Array(count + 1)].map((value, index) => {
            if (count === 0) {
              return (
                <circle key={color + '-empty'}
                        r='45' cx='50' cy={yLocation(index)}
                        fill="none" stroke='gray'
                        strokeWidth="2" strokeDasharray="8 4" />
              );
            }
            return (
              <g key={index + '-group'} style={{ position: 'relative' }}>
                <circle key={index}
                        r='45' cx='50' cy={yLocation(index)}
                        onClick={handleClick} fill={COLOR_TO_HEX[color]} stroke='black' />
                <OutlinedText fontSize={40} text={count} x={50} y={yLocation(index) + 15} />
                {
                  (index < count) &&
                  <circle key={index + '-shadow'}
                          r='45' cx='50' cy={yLocation(index)}
                          fill='rgba(0, 0, 0, .2)' />
                }
              </g>
            );
          })
        }
      </svg>
    </div>
  );
};

GemStack.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  selectResourceFromStack: PropTypes.func
};

export default GemStack;
