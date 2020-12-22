import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';

const StyledLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 24px;
  border-radius: 29px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
  text-transform: uppercase;
  background: ${(props) => props.bgColor} ;
`;

/**
 * @param {object} props - object of props.
 * @param {'hot' | 'sale' | 'new'} props.variant - variant of label
 * @param {number} props.sale - value of sale
 */
function Label({ variant, sale }) {
  const theme = useContext(ThemeContext);
  let bgColor;
  switch (variant) {
    case 'new':
      bgColor = theme.name === 'light' ? '#222222' : 'none';
      return (
        <StyledLabel bgColor={bgColor}>
          New
        </StyledLabel>
      );
    case 'sale':
      return (
        <StyledLabel bgColor={theme.primary}>
          -
          {sale}
          %
        </StyledLabel>
      );
    case 'hot':
      return (
        <StyledLabel bgColor={theme.primary}>
          Hot
        </StyledLabel>
      );
    default:
      return null;
  }
}

Label.propTypes = {
  variant: PropTypes.oneOf([
    'new',
    'hot',
    'sale',
  ]).isRequired,
  sale: PropTypes.number,
};

Label.defaultProps = {
  sale: 0,
};

export default Label;
