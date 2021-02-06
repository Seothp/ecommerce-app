import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import Price from '../Price/Price';
import Rating from '../Rating/Rating';
import ButtonBag from '../Button/ButtonBag';
import ButtonClose from '../Button/ButtonClose';
import Disabled from '../Disabled/Disabled';

import { ThemeContext } from '../../theme-context';

const StyledProductCardFavorites = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 15px 0 10px 116px;
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
const StyledCloseButton = styled(ButtonClose)`
  position: absolute;
  top: 0;
  right: 0;
`;
const StyledBagButton = styled(ButtonBag)`
  position: absolute;
  bottom: -12px;
  right: 0;
`;
const Feature = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const SoldoutMsg = styled(HelperText)`
  position: absolute;
  bottom: -18px;
  left: 0;
  color: ${(props) => props.color};
`;
const Bottom = styled.div`
  display: flex;
`;
function ProductCardFavoritesLine({
  soldout, brandName, itemName, color, size, price, newPrice, rating, countOfVotes, imgSrc,
  onAddToBag, onRemoveFromFavorites,
}) {
  const theme = useContext(ThemeContext);
  const helperColor = theme.gray;
  const textColor = theme.invert;
  const disabledBgColor = theme;
  return (
    <Card>
      { soldout
        && (
        <>
          <Disabled disabledBgColor={disabledBgColor} />
          <SoldoutMsg color={helperColor}>
            Sorry, this item is currently sold out
          </SoldoutMsg>
        </>
        )}
      <StyledProductCardFavorites>
        <StyledImageWrapper className="img-wrapper">
          <StyledImage src={imgSrc} alt="favorites card" width={104} height={104} />
        </StyledImageWrapper>
        <HelperText
          className="brand-name"
          color={helperColor}
        >
          {brandName}
        </HelperText>
        <Subheader
          color={textColor}
          style={{ marginTop: 1, marginBottom: 3 }}
        >
          {itemName}
        </Subheader>
        <Bottom>
          <Wrapper
            className="wrapper"
            style={{ marginRight: 29 }}
          >
            <Feature>
              <HelperText
                color={helperColor}
                style={{ marginRight: 4 }}
              >
                Color:
              </HelperText>
              <HelperText
                color={textColor}
              >
                {color}
              </HelperText>
            </Feature>
            <Price
              price={price}
              newPrice={newPrice}
              style={{ marginTop: 10 }}
            />
          </Wrapper>
          <Wrapper className="wrapper">
            <Feature>
              <HelperText
                color={helperColor}
                style={{ marginRight: 4 }}
              >
                Size:
              </HelperText>
              <HelperText
                color={textColor}
              >
                {size}
              </HelperText>
            </Feature>
            <Rating
              rating={rating}
              countOfVotes={countOfVotes}
              style={{ marginTop: 12 }}
            />
          </Wrapper>
        </Bottom>
        <StyledCloseButton onClick={onRemoveFromFavorites} />
        {!soldout
          && <StyledBagButton handleClick={onAddToBag} />}
      </StyledProductCardFavorites>
    </Card>
  );
}

ProductCardFavoritesLine.propTypes = {
  brandName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToBag: PropTypes.func.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  newPrice: PropTypes.number,
};

ProductCardFavoritesLine.defaultProps = {
  soldout: false,
  newPrice: 0,
};

export default ProductCardFavoritesLine;
