import React from 'react';
import PropTypes from 'prop-types';

function IconCamera({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 14.4667C12.9146 14.4667 14.4667 12.9146 14.4667 11C14.4667 9.08542 12.9146 7.53334 11 7.53334C9.0854 7.53334 7.53333 9.08542 7.53333 11C7.53333 12.9146 9.0854 14.4667 11 14.4667Z" fill={fill} />
      <path d="M7.74999 0.166656L5.76749 2.33332H2.33332C1.14166 2.33332 0.166656 3.30832 0.166656 4.49999V17.5C0.166656 18.6917 1.14166 19.6667 2.33332 19.6667H19.6667C20.8583 19.6667 21.8333 18.6917 21.8333 17.5V4.49999C21.8333 3.30832 20.8583 2.33332 19.6667 2.33332H16.2325L14.25 0.166656H7.74999ZM11 16.4167C8.00999 16.4167 5.58332 13.99 5.58332 11C5.58332 8.00999 8.00999 5.58332 11 5.58332C13.99 5.58332 16.4167 8.00999 16.4167 11C16.4167 13.99 13.99 16.4167 11 16.4167Z" fill={fill} />
    </svg>

  );
}

IconCamera.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconCamera.defaultProps = {
  width: 22,
  height: 20,
  fill: '#FFFFFF',
};

export default IconCamera;
