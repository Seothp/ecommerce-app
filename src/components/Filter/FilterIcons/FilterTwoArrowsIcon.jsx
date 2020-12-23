import React from 'react';
import PropTypes from 'prop-types';

function FilterTwoArrowsIcon({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 14.01V7H9V14.01H6L10 18L14 14.01H11ZM4 0L0 3.99H3V11H5V3.99H8L4 0Z" fill={fill} />
    </svg>
  );
}

FilterTwoArrowsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

FilterTwoArrowsIcon.defaultProps = {
  width: 14,
  height: 18,
  fill: '#FFFFFF',
};

export default FilterTwoArrowsIcon;
