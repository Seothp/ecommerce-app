import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: relative;
  width: 40px;
  height: 40px;
`;

const HorisontalLine = styled.div`
  width: 15px;
  height: 2px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const VerticalLine = styled.div`
  width: 2px;
  height: 15px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
const Cross = styled.div`
  transform: rotate(45deg);
`;
function ButtonClose({ onClick, ...attrs }) {
  const theme = useContext(ThemeContext);
  const color = theme.gray;
  return (
    <StyledButton onClick={onClick} {...attrs}>
      <Cross>
        <HorisontalLine color={color} />
        <VerticalLine color={color} />
      </Cross>
    </StyledButton>
  );
}

ButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonClose;
