import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes, { bool } from 'prop-types';

import Button from './Button';
import IconBag from '../Icons/IconBag/IconBag';
import { ThemeContext } from '../../theme-context';

const StyledButton = styled(Button)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  background-color: ${(props) => props.bgColor};
  ${({ isActive }) => (isActive ? 'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08)' : '')};
`;
function ButtonBag({ handleClick, isActive }) {
  const [pressed, setPressed] = useState(false);
  const theme = useContext(ThemeContext);
  const handlePress = () => {
    setPressed(true);
    const handleMouseUp = () => {
      document.removeEventListener('mouseup', handleMouseUp);
      setPressed(false);
    };
    document.addEventListener('mouseup', handleMouseUp);
  };
  let bgColor;
  let fill;
  if (pressed) {
    fill = theme.light;
    bgColor = theme.primary;
  } else if (isActive) {
    fill = theme.primary;
    bgColor = theme.main;
  } else {
    fill = theme.light;
    bgColor = theme.primary;
  }
  return (
    <StyledButton
      size="small"
      handleClick={handleClick}
      theme={theme}
      bgColor={bgColor}
      isActive={isActive}
      onMouseDown={handlePress}
    >
      add to bag
      <IconBag
        fill={fill}
        outline={false}
        width={13}
        height={12}
      />
    </StyledButton>
  );
}

ButtonBag.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: bool,
};

ButtonBag.defaultProps = {
  isActive: false,
};

export default ButtonBag;
