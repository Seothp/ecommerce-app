import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';
import Button from './Button';
import IconHeart from '../Icons/IconHeart';

const StyledButton = styled(Button)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => (props.pressed ? props.theme.primary : props.theme.main)};
`;

function ButtonLike({ handleClick, active }) {
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
  let fill;
  if (pressed) {
    fill = theme.main;
  } else if (active) {
    fill = theme.primary;
  } else {
    fill = theme.gray;
  }
  return (
    <StyledButton
      handleClick={handleClick}
      onMouseDown={handlePress}
      theme={theme}
      pressed={pressed}
    >
      like
      <IconHeart outline={!pressed && !active} fill={fill} />
    </StyledButton>
  );
}

ButtonLike.propTypes = {
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

ButtonLike.defaultProps = {
  active: false,
};

export default ButtonLike;
