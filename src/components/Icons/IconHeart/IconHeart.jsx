import React from 'react';
import PropTypes from 'prop-types';

function IconHeart({
  width, height, fill, outline, ...attrs
}) {
  return (
    <>
      {outline
        ? (
          <svg width={width} height={height} viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z"
              stroke={fill}
            />
          </svg>

        )
        : (
          <svg width={width} height={height} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.079 24L11.1826 22.2736C4.44687 16.1657 0 12.1373 0 7.19346C0 3.16512 3.16512 0 7.19346 0C9.46921 0 11.6534 1.0594 13.079 2.73351C14.5046 1.0594 16.6888 0 18.9646 0C22.9929 0 26.158 3.16512 26.158 7.19346C26.158 12.1373 21.7112 16.1657 14.9755 22.2866L13.079 24Z"
              fill={fill}
            />
          </svg>

        )}
    </>
  );
}

IconHeart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  outline: PropTypes.bool,
};

IconHeart.defaultProps = {
  width: 28,
  height: 26,
  fill: '#FFFFFF',
  outline: false,
};

export default IconHeart;
