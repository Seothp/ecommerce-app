import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';
import IconCamera from '../Icons/IconCamera';

const StyledButton = styled(Button)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
`;

function ButtonCamera({ handleClick }) {
  return (
    <StyledButton handleClick={handleClick}>
      camera
      <IconCamera />
    </StyledButton>
  );
}

ButtonCamera.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonCamera;
