import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';
import IconPencil from '../Icons/IconPencil';

const StyledButton = styled(Button)`
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReviewText = styled.span`
  display: inline-block;
  margin-left: 8px;

  font-family: Roboto;
  font-weight: 700;
  font-size: 11px;
  line-height: 8px;
`;
function ButtonReview({ handleClick }) {
  return (
    <StyledButton size="small" handleClick={handleClick}>
      <IconPencil />
      <ReviewText>Write a review</ReviewText>
    </StyledButton>
  );
}

ButtonReview.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonReview;
