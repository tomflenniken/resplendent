import React from 'react';
import PropTypes from 'prop-types';

const OutlinedText = ({ text, x, y, fontSize, outline = 4, color = 'White' }) => {
  return (
    <g>
      <text x={x} y={y} style={{ fontSize: fontSize + 'px' }} textAnchor="middle"
            stroke='rgba(0,0,0,.9)' strokeWidth={outline}>
        {text}
      </text>
      <text x={x} y={y} fill={color} style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
    </g>
  );
};

OutlinedText.propTypes = {
  color: PropTypes.string,
  outline: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  fontSize: PropTypes.number,
};

export default OutlinedText;
