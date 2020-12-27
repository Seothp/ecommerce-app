import React from 'react';
import PropTypes from 'prop-types';

function IconHome({
  width, height, fill, ...attrs
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2941 25V16.5294H17.9412V25H25V13.7059H29.2353L15.1176 1L1 13.7059H5.23529V25H12.2941Z"
        fill={fill}
      />
    </svg>
  );
}

IconHome.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconHome.defaultProps = {
  width: 30,
  height: 26,
  fill: '#FFFFFF',
};

export default IconHome;
