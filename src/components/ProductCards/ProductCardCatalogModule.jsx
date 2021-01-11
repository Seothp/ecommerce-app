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
  padding-top: 184px;
  padding-left: 2px;
`;
const StyledImageWrapper = styled.div`
  position: absolute;
  left: 1px;
  top: 0;
`;
const StyledImage = styled.img`
  border-radius: 8px;
`;
const StyledButton = styled(ButtonLike)`
  position: absolute;
  right: 0;
  top: 164px;
`;
function ProductCardCatalogModule({
  imgSrc, price, newPrice, item, brand, rating, countOfVotes, onAddToFavorites, main,
}) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const helperColor = theme.gray;
  return (
    <Card
      className="product-card-bag"
      type="module"
      width={main ? 150 : 164}
      height={260}
    >
      <StyledProductCardCatalog main={main}>
        <StyledImageWrapper>
          <StyledImage
            src={imgSrc}
            alt="product card"
            width={main ? 148 : 162}
            height="184"
          />
        </StyledImageWrapper>
        <Rating
          rating={rating}
          countOfVotes={countOfVotes}
          style={{ marginTop: 6, marginBottom: 5 }}
        />
        <HelperText
          color={helperColor}
        >
          {brand}
        </HelperText>
        <Subheader
          className="item"
          color={textColor}
          style={{ marginTop: 3 }}
        >
          {item}
        </Subheader>
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

ProductCardCatalogModule.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  main: PropTypes.bool,
  newPrice: PropTypes.number,
};

ProductCardCatalogModule.defaultProps = {
  newPrice: 0,
  main: false,
};

export default ProductCardCatalogModule;
