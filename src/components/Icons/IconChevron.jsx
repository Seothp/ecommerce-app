import React from 'react';
import PropTypes from 'prop-types';

function IconChevron({ width, height, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.225521 8.54307C-0.0751736 8.24288 -0.0751736 7.7579 0.225521 7.45693L7.362 0.325723C7.79608 -0.108574 8.50232 -0.108574 8.93717 0.325723C9.37125 0.76002 9.37125 1.46488 8.93717 1.89917L2.83231 8.00039L8.93717 14.1C9.37125 14.5351 9.37125 15.24 8.93717 15.6743C8.50232 16.1086 7.79608 16.1086 7.362 15.6743L0.225521 8.54307Z"
        fill={fill}
      />
    </svg>
  );
}

IconChevron.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

IconChevron.defaultProps = {
  width: 10,
  height: 16,
  fill: '#FFFFFF',
};

export default IconChevron;
