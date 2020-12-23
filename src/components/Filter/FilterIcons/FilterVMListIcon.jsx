import React from 'react';
import PropTypes from 'prop-types';

function FilterVMListIcon({
  width, height, fill,
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 9H4V5H0V9ZM0 14H4V10H0V14ZM0 4H4V0H0V4ZM5 9H17V5H5V9ZM5 14H17V10H5V14ZM5 0V4H17V0H5Z"
        fill={fill}
      />
    </svg>
  );
}

FilterVMListIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

FilterVMListIcon.defaultProps = {
  width: 17,
  height: 14,
  fill: '#FFFFFF',
};

export default FilterVMListIcon;
