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

import { hexToRgb } from '../../utilities';
import { ThemeContext } from '../../theme-context';

const StyledProductCardFavorites = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding-top: 184px;
  padding-left: 2px;
`;
const StyledImageWrapper = styled.div`
  position: absolute;
  height: 184px;
  left: 1px;
  top: 0;
`;
const StyledImage = styled.img`
  border-radius: 8px;
  width: 162px;
  height: 184px;
`;
const StyledCloseButton = styled(ButtonClose)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
`;
const StyledBagButton = styled(ButtonBag)`
  position: absolute;
  top: 165px;
  right: 0;
`;
const Feature = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SoldoutMsg = styled(HelperText)`
  display: block;
  box-sizing: border-box;
  padding: 5px 20px 5px 11px;
  height: 36px;
  width: 163px;
  background: ${(props) => `rgba(${hexToRgb(props.disabledBgColor)}, 0.7)`};
  position: absolute;
  z-index: 3;
  bottom: 0px;
  left: 0px;
  color: ${(props) => props.color};
  border-radius: 0px 0px 8px 8px;
`;

function ProductCardFavorites({
  soldout, brandName, itemName, color, size, price, newPrice, rating, countOfVotes, imgSrc,
  onAddToBag, onRemoveFromFavorites,
}) {
  const theme = useContext(ThemeContext);
  const helperColor = theme.gray;
  const textColor = theme.invert;
  const disabledBgColor = theme.main;
  return (
    <Card
      type="module"
      width={164}
      height={281}
    >
      {soldout
          && <Disabled disabledBgColor={disabledBgColor} />}
      <StyledProductCardFavorites>
        <StyledImageWrapper className="img-wrapper">
          <StyledImage src={imgSrc} alt="favorites card" width={131} height={175} />
          {soldout
          && (
          <SoldoutMsg
            color={textColor}
            disabledBgColor={disabledBgColor}
          >
            Sorry, this item is currently
            sold out
          </SoldoutMsg>
          )}
        </StyledImageWrapper>
        <Rating
          rating={rating}
          countOfVotes={countOfVotes}
          style={{ marginTop: 7, marginBottom: 8 }}
        />
        <HelperText
          className="brand-name"
          color={helperColor}
        >
          {brandName}
        </HelperText>
        <Subheader
          color={textColor}
          style={{ marginTop: 1 }}
        >
          {itemName}
        </Subheader>
        <Wrapper className="wrapper">
          <Feature
            style={{ marginRight: 29 }}
          >
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
        </Wrapper>
        <Price
          price={price}
          newPrice={newPrice}
          style={{ marginTop: 'auto' }}
        />
        <StyledCloseButton onClick={onRemoveFromFavorites} />
        {!soldout
          && <StyledBagButton handleClick={onAddToBag} />}
      </StyledProductCardFavorites>
    </Card>
  );
}

ProductCardFavorites.propTypes = {
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

ProductCardFavorites.defaultProps = {
  soldout: false,
  newPrice: 0,
};

export default ProductCardFavorites;
