import React from 'react';
import PropTypes from 'prop-types';

function IconBag({
  width, height, fill, outline, ...attrs
}) {
  return (
    <>
      {outline
        ? (
          <svg width={width} height={height} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              d="M23.4558 20.5187L23.4583 20.542L23.4629 20.565C23.4867 20.6823 23.5 20.796 23.5 20.9091C23.5 21.8094 22.8081 22.5 22 22.5H12H2C1.19186 22.5 0.5 21.8094 0.5 20.9091C0.5 20.796 0.513314 20.6823 0.537055 20.565L0.541717 20.542L0.544199 20.5187L2.4972 2.14375L2.5 2.11741V2.09091C2.5 1.19065 3.19186 0.5 4 0.5H12H20C20.8081 0.5 21.5 1.19065 21.5 2.09091V2.11741L21.5028 2.14375L23.4558 20.5187ZM17.5 6.27273V5.44368C18.1009 5.08516 18.5 4.41815 18.5 3.65909C18.5 2.53849 17.6249 1.59091 16.5 1.59091C15.3751 1.59091 14.5 2.53849 14.5 3.65909V6.27273C14.5 7.74695 13.3571 8.90909 12 8.90909C10.6429 8.90909 9.5 7.74695 9.5 6.27273V3.65909C9.5 2.53849 8.62486 1.59091 7.5 1.59091C6.37514 1.59091 5.5 2.53849 5.5 3.65909C5.5 4.41815 5.89908 5.08516 6.5 5.44368V6.27273C6.5 9.41001 8.94614 12 12 12C15.0539 12 17.5 9.41001 17.5 6.27273Z"
              stroke={fill}
            />
          </svg>
        )
        : (
          <svg width={width} height={height} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
            <path
              d="M23.953 20.4658L22 2.09091C22 0.935682 21.105 0 20 0H12H4C2.895 0 2 0.935682 2 2.09091L0.0469999 20.4658C0.0179999 20.609 0 20.7565 0 20.9091C0 22.0643 0.895 23 2 23H12H22C23.105 23 24 22.0643 24 20.9091C24 20.7565 23.982 20.609 23.953 20.4658ZM17 5.13109V6.27273C17 9.15505 14.757 11.5 12 11.5C9.243 11.5 7 9.15505 7 6.27273V5.13109C6.419 4.91573 6 4.34073 6 3.65909C6 2.79345 6.672 2.09091 7.5 2.09091C8.328 2.09091 9 2.79345 9 3.65909V6.27273C9 8.00191 10.346 9.40909 12 9.40909C13.654 9.40909 15 8.00191 15 6.27273V3.65909C15 2.79345 15.672 2.09091 16.5 2.09091C17.328 2.09091 18 2.79345 18 3.65909C18 4.34073 17.581 4.91573 17 5.13109Z"
              fill={fill}
            />
          </svg>
        )}
    </>
  );
}

IconBag.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  outline: PropTypes.bool,
};

IconBag.defaultProps = {
  width: 24,
  height: 23,
  fill: '#FFFFFF',
  outline: true,
};

export default IconBag;