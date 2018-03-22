import React from 'react';
import PropTypes from 'prop-types';
import { COLOR_TO_HEX } from '../../constants/colorToHex';
import { WHITE } from '../../constants/colorNames';

const GemIcon = ({ x, y, width, height, color }) => {
  function gemFill(alpha) {
    switch (color) {
      case WHITE:
        return 'rgba(0, 0, 0,' + (.4 - alpha) + ')';
      default:
        return 'rgba(255, 255, 255,' + alpha + ')';
    }
  }

  let strokeWidth = 0;
  let gemHeight = height - strokeWidth;
  let gemWidth = width - strokeWidth;

  let outerPadding = 10;
  let interiorHeight = gemHeight - 2 * outerPadding;
  let interiorWidth = gemWidth - 2 * outerPadding;

  let exteriorHeight = (gemHeight - interiorHeight) / 2;
  let exteriorWidth = (gemWidth - interiorWidth) / 2;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} x={x} y={y}>
      <g transform={`translate(${strokeWidth / 2}, ${strokeWidth / 2})`}>
        <path d={
          `m${exteriorWidth} 0
          l ${interiorWidth} 0
          l ${exteriorWidth} ${exteriorHeight}
          l 0 ${interiorHeight}
          l -${exteriorWidth} ${exteriorHeight}
          l -${interiorWidth} 0
          l -${exteriorWidth} -${exteriorHeight}
          l 0 -${interiorHeight}
          z`
        } fill={COLOR_TO_HEX[color]} stroke='black' strokeWidth={strokeWidth} />

        <path d={
          `m0 ${exteriorHeight}
          l ${exteriorWidth} -${exteriorHeight}
          l 0 ${exteriorHeight}
          z`
        } fill={gemFill(0.2)} />
        <path d={
          `m${interiorWidth + exteriorWidth} 0
          l 0 ${exteriorHeight}
          l ${exteriorWidth} 0
          z`
        } fill={gemFill(0.4)} />
        <path d={
          `m0 ${exteriorHeight + interiorHeight}
          l ${exteriorWidth} 0
          l 0 ${exteriorHeight}
          z`
        } fill={gemFill(0.1)} />
        <path d={
          `m${2 * exteriorWidth + interiorWidth} ${exteriorHeight + interiorHeight}
          l -${exteriorWidth} ${exteriorHeight}
          l 0 -${exteriorHeight}
          z`
        } fill={gemFill(0.2)} />

        <rect x='0' y={exteriorHeight}
              height={interiorHeight} width={exteriorWidth} fill={gemFill(0)} />
        <rect x={exteriorWidth} y='0'
              height={exteriorHeight} width={interiorWidth} fill={gemFill(0.3)} />
        <rect x={exteriorWidth + interiorWidth} y={exteriorHeight}
              height={interiorHeight} width={exteriorWidth} fill={gemFill(0.3)} />
        <rect x={exteriorWidth} y={exteriorHeight + interiorHeight}
              height={exteriorHeight} width={interiorWidth} fill={gemFill(0)} />
        <rect x={exteriorWidth} y={exteriorHeight}
              height={interiorHeight} width={interiorWidth} fill={gemFill(0.2)} />
      </g>
    </svg>
  );
};

GemIcon.propTypes = {
  color: PropTypes.string,
};

export default GemIcon;
