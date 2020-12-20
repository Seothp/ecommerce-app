import React from 'react';
import PropTypes from 'prop-types';

function IconPlus({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z" fill={fill} />
    </svg>

  );
}

IconPlus.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconPlus.defaultProps = {
  width: 14,
  height: 14,
  fill: '#FFFFFF',
};

export default IconPlus;
