import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';

const StyledButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding: 12px 18px;
`;
const Dot = styled.div`
  background: ${(props) => props.color};
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

/**
 *
 * @param {object} props
 * @param {Function} props.onClick
 */
function ButtonMore({ onClick, ...attrs }) {
  const theme = useContext(ThemeContext);
  const color = theme.gray;
  return (
    <StyledButton onClick={onClick} {...attrs}>
      <Dot color={color} />
      <Dot color={color} />
      <Dot color={color} />
    </StyledButton>
  );
}

ButtonMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonMore;
