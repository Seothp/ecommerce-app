import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';
import IconPlus from '../Icons/IconPlus';

const StyledButton = styled.button`
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => (props.pressed ? props.theme.main : props.theme.invert)};
`;

function ButtonAdd({ onClick }) {
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
  const fill = pressed ? theme.invert : theme.main;
  return (
    <StyledButton
      onClick={onClick}
      onMouseDown={handlePress}
      theme={theme}
      pressed={pressed}
    >
      Add
      <IconPlus fill={fill} />
    </StyledButton>
  );
}

ButtonAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonAdd;
