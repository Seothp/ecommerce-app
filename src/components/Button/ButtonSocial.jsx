import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconSocial from '../Icons/IconSocial';

const StyledButton = styled.button`
  background: none;
  border: none;
  width: 92px;
  height: 64px;
  background: #FFFFFF;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  :active {
    box-shadow: none;
  }
`;

function ButtonSocial({ onClick, type, ...attrs }) {
  return (
    <StyledButton onClick={onClick} {...attrs}>
      <IconSocial type={type} />
    </StyledButton>
  );
}

ButtonSocial.propTypes = {
  type: PropTypes.oneOf(['fb', 'google']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSocial;
