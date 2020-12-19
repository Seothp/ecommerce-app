import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';
import IconSearch from '../Icons/IconSearch';

const StyledButton = styled(Button)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  font-size: 0;
  line-height: 0;
`;

function ButtonSearch({ handleClick }) {
  return (
    <StyledButton handleClick={handleClick}>
      search
      <IconSearch />
    </StyledButton>
  );
}

ButtonSearch.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonSearch;
