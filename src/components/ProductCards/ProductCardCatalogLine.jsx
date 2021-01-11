import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import Price from '../Price/Price';
import Rating from '../Rating/Rating';
import ButtonLike from '../Button/ButtonLike';
import { ThemeContext } from '../../theme-context';

const StyledProductCardCatalog = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 11px 12px 12px 115px;
`;
const StyledImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;
const StyledImage = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
const StyledButton = styled(ButtonLike)`
  position: absolute;
  right: 0;
  bottom: -10px;
`;
function ProductCardCatalogLine({
  imgSrc, price, newPrice, item, brand, rating, countOfVotes, onAddToFavorites,
}) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const helperColor = theme.gray;
  return (
    <Card className="product-card-bag">
      <StyledProductCardCatalog>
        <StyledImageWrapper>
          <StyledImage src={imgSrc} alt="product card" width="104" height="104" />
        </StyledImageWrapper>
        <Subheader className="item" color={textColor}>
          {item}
        </Subheader>
        <HelperText
          color={helperColor}
          style={{ marginTop: 1, marginBottom: 6 }}
        >
          {brand}
        </HelperText>
        <Rating rating={rating} countOfVotes={countOfVotes} />
        <Price
          price={price}
          newPrice={newPrice}
          style={{ marginTop: 'auto' }}
        />
        <StyledButton handleClick={onAddToFavorites}>
          like
        </StyledButton>
      </StyledProductCardCatalog>
    </Card>
  );
}

ProductCardCatalogLine.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  newPrice: PropTypes.number,
};

ProductCardCatalogLine.defaultProps = {
  newPrice: 0,
};

export default ProductCardCatalogLine;
