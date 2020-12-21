import React from 'react';
import PropTypes from 'prop-types';

function IconDirectionArrow({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.94 0.726654L4 3.77999L7.06 0.726654L8 1.66665L4 5.66665L0 1.66665L0.94 0.726654Z" fill={fill} />
    </svg>
  );
}

IconDirectionArrow.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconDirectionArrow.defaultProps = {
  width: 8,
  height: 6,
  fill: '#000000',
};

export default IconDirectionArrow;
