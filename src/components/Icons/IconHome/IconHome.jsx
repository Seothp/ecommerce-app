import React from 'react';
import PropTypes from 'prop-types';

function IconHome({
  width, height, outline, fill, ...attrs
}) {
  return (
    <>
      {outline
        ? (
          <svg width={width} height={height} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2941 25V16.5294H17.9412V25H25V13.7059H29.2353L15.1176 1L1 13.7059H5.23529V25H12.2941Z"
              stroke={fill}
            />
          </svg>
        )
        : (
          <svg width={width} height={height} viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z"
              fill={fill}
            />
          </svg>
        )}
    </>
  );
}

IconHome.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  outline: PropTypes.bool,
};

IconHome.defaultProps = {
  width: 30,
  height: 26,
  fill: '#FFFFFF',
  outline: true,
};

export default IconHome;
