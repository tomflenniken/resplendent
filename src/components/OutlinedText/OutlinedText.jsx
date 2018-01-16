import React from 'react';
import PropTypes from 'prop-types';

const OutlinedText = ({ text, x, y, fontSize }) => {
  return (
    <g>
      <text x={x - 2} y={y} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x + 2} y={y} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x} y={y - 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x} y={y + 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x - 2} y={y + 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x + 2} y={y + 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x - 2} y={y - 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x + 2} y={y - 2} fill='Black' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
      <text x={x} y={y} fill='White' style={{ fontSize: fontSize + 'px' }} textAnchor="middle">{text}</text>
    </g>
  );
};

OutlinedText.propTypes = {
  text: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  fontSize: PropTypes.number,
};

export default OutlinedText;
