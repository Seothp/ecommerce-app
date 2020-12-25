import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

function IconStar({
  isActive, width, height, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const orange = '#FFBA49';
  const fill = isActive ? orange : 'none';
  const strokeWidth = isActive ? 0 : 0.5;
  const stroke = isActive ? 'none' : theme.gray;
  return (
    <svg width={width} height={height} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9.95016L3.87713 11.5436C3.50946 11.7313 3.08567 11.4177 3.1575 11.0113L3.75 7.65836L1.25401 5.29695C0.949752 5.00909 1.11307 4.49713 1.52781 4.43864L4.99139 3.95016L6.55431 0.876499C6.73965 0.512004 7.26035 0.512003 7.44569 0.876499L9.00861 3.95016L12.4722 4.43864C12.8869 4.49713 13.0502 5.00909 12.746 5.29695L10.25 7.65836L10.8425 11.0113C10.9143 11.4177 10.4905 11.7313 10.1229 11.5436L7 9.95016Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    </svg>
  );
}

IconStar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

IconStar.defaultProps = {
  width: 13,
  height: 12,
};

export default IconStar;
