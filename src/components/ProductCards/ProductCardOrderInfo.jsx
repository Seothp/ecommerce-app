import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import Price from '../Price/Price';
import { ThemeContext } from '../../theme-context';

const StyledProductCardOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 11px 14px 14px 115px;
`;
const Feature = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

/**
 *
 * @param {object} props
 * @param {String} props.itemName
 * @param {String} props.brandName
 * @param {String} props.color
 * @param {String} props.size
 * @param {Number} props.units
 * @param {Number} props.price
 * @param {Number} props.newPrice
 * @param {String} props.imgSrc
 */
function ProductCardOrderInfo({
  itemName, brandName, color, size, units, price, newPrice, imgSrc,
}) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const helperColor = theme.gray;
  return (
    <Card>
      <StyledProductCardOrderInfo>
        <ImageWrapper>
          <img src={imgSrc} alt="order info card" />
        </ImageWrapper>
        <Subheader color={textColor}>
          {itemName}
        </Subheader>
        <HelperText
          color={helperColor}
          style={{ marginTop: 1, marginBottom: 7 }}
        >
          {brandName}
        </HelperText>
        <Wrapper>
          <Feature
            style={{ marginRight: 22 }}
          >
            <HelperText
              color={helperColor}
              style={{ marginRight: 4 }}
            >
              Color:
            </HelperText>
            <HelperText color={textColor}>
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
            <HelperText color={textColor}>
              {size}
            </HelperText>
          </Feature>
        </Wrapper>
        <Wrapper
          style={{ marginTop: 'auto' }}
        >
          <Feature>
            <HelperText
              color={helperColor}
              style={{ marginRight: 4 }}
            >
              Units:
            </HelperText>
            <HelperText color={textColor}>
              {units}
            </HelperText>
          </Feature>
          <Price
            price={price}
            newPrice={newPrice}
            style={{ marginLeft: 'auto' }}
          />
        </Wrapper>
      </StyledProductCardOrderInfo>
    </Card>
  );
}

ProductCardOrderInfo.propTypes = {
  itemName: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  newPrice: PropTypes.number,
};

ProductCardOrderInfo.defaultProps = {
  newPrice: 0,
};

export default ProductCardOrderInfo;
