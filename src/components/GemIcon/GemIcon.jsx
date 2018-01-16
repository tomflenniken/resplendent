import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import { WHITE } from '../../constants/colorNames';

const GemIcon = ({ color }) => {
  function gemFill(alpha) {
    return color === WHITE ? 'rgba(0, 0, 0,' + (.5 - alpha) + ')' : 'rgba(255, 255, 255,' + alpha + ')';
  }

  return (
    <svg height='60' viewBox='0 0 82 102' y='10' x='80'>
      <g transform='translate(1,1)'>
        <path d='m20 0 l 40 0 l 20 20 l 0 60 l -20 20 l -40 0 l -20 -20 l 0 -60 z'
              fill={COLOR_TO_HEX[color]} />
        <path d='m0 20 l 20 -20 l 0 20 z' fill={gemFill(0.3)} />
        <path d='m60 0 l 0 20 l 20 0 z' fill={gemFill(0.5)} />
        <path d='m0 80 l 20 0 l 0 20 z' fill={gemFill(0.2)} />
        <path d='m80 80 l -20 20 l 0 -20 z' fill={gemFill(0.3)} />
        <rect x='0' y='20' height='60' width='20' fill={gemFill(0.1)} />
        <rect x='20' y='0' height='20' width='40' fill={gemFill(0.4)} />
        <rect x='60' y='20' height='60' width='20' fill={gemFill(0.4)} />
        <rect x='20' y='80' height='20' width='40' fill={gemFill(0.1)} />
        <rect x='20' y='20' height='60' width='40' fill={gemFill(0.3)} />
      </g>
    </svg>
  );
};

GemIcon.propTypes = {
  color: PropTypes.string,
};

export default GemIcon;
