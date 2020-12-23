import React from 'react';
import PropTypes from 'prop-types';

function FilterListIcon({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill={fill} />
    </svg>
  );
}

FilterListIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

FilterListIcon.defaultProps = {
  width: 18,
  height: 12,
  fill: '#FFFFFF',
};

export default FilterListIcon;
