import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledPrice = styled.div`
  display: flex;
`;
const CommonPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.isNewPrice ? 'line-through' : 'none')};
  margin-right: ${(props) => (props.isNewPrice ? '4px' : 0)};
`;
const NewPrice = styled.div`
font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
`;

/**
 *
 * @param {object} props
 * @param {Number} props.price
 * @param {Number} props.newPrice
 */
function Price({ price, newPrice, ...attrs }) {
  const theme = useContext(ThemeContext);
  const { invert, gray, sale } = theme;
  const isNewPrice = Boolean(newPrice);
  const commonPriceColor = isNewPrice ? gray : invert;
  return (
    <StyledPrice className="price" {...attrs}>
      <CommonPrice
        color={commonPriceColor}
        isNewPrice={isNewPrice}
      >
        {price}
        $
      </CommonPrice>
      { isNewPrice
        && (
        <NewPrice
          color={sale}
        >
          {newPrice}
          $
        </NewPrice>
        )}
    </StyledPrice>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  newPrice: PropTypes.number,
};

Price.defaultProps = {
  newPrice: 0,
};

export default Price;
