import React from 'react';
import PropTypes from 'prop-types';

function IconCheck({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.76691 9.46756L1.21092 5.73602L0 6.99776L4.76691 12L15 1.26174L13.7976 0L4.76691 9.46756Z" fill={fill} />
    </svg>

  );
}

IconCheck.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconCheck.defaultProps = {
  width: 15,
  height: 12,
  fill: '#FFFFFF',
};

export default IconCheck;
