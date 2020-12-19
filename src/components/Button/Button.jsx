// /* eslint-disable */
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';

const StyledButton = styled.button`
  background: none;
  border: none;
  border-radius: 25px;
  width: ${(props) => (props.size === 'small' ? '160px' : '343px')};
  height: ${(props) => (props.size === 'small' ? '36px' : '48px')};
  text-transform: ${(props) => (props.size === 'small' ? 'none' : 'uppercase')};
  color: #FFFFFF;
  ${(props) => props.addStyles};
`;

function Button({ size, variant, children }) {
  const theme = useContext(ThemeContext);
  const { primary } = theme;
  let additionalStyles = '';
  console.log(primary);
  if (variant === 'outline') {
    additionalStyles += `
        box-sizing: border-box;
        border: 2px solid ${theme.invert};
        color: ${theme.invert};
        :active {
          border-color: ${theme.gray};
          color: ${theme.gray};
        }
      `;
  } else {
    additionalStyles += `
        background-color: ${primary};
        box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
        color: #FFFFFF;
        :active {
          opacity: 0.9;
        }
      `;
  }

  return (
    <StyledButton size={size} variant={variant} addStyles={additionalStyles}>
      {children}
    </StyledButton>
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(['big', 'small']),
  variant: PropTypes.oneOf(['primary', 'outline']),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'big',
  variant: 'primary',
  children: null,
};
export default Button;
