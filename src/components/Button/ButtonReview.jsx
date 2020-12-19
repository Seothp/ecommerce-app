import React from 'react';
import styled from 'styled-components';

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
function ButtonReview() {
  return (
    <StyledButton size="small">
      <IconPencil />
      <ReviewText>Write a review</ReviewText>
    </StyledButton>
  );
}

export default ButtonReview;
