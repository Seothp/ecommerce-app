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

/**
 *
 * @param {object} props
 * @param {Function} props.onClick
 */
function ButtonSearch({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      search
      <IconSearch />
    </StyledButton>
  );
}

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSearch;
