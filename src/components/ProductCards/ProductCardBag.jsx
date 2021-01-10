import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import ButtonMore from '../Button/ButtonMore';
import Counter from '../Counter/Counter';
import Price from '../Price/Price';
import { ThemeContext } from '../../theme-context';

const StyledProductCardBag = styled.div`
  display: flex;
  height: 100%;
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
const StyledInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 8px 11px 12px 115px;
`;
const ProductFeature = styled.div`
  display: flex;  
`;
const ProductFeatures = styled.div`
  display: flex;
  margin-top: 4px;
`;
const StyledCounter = styled(Counter)`
  margin-top: auto;
`;
const StyledPrice = styled(Price)`
  position: absolute;
  bottom: 20px;
  right: 15px;
`;
const StyledButton = styled(ButtonMore)`
  position: absolute;
  top: 0;
  right: 0;
`;
function ProductCardBag({
  imgSrc, count, onCountIncrease, onCountDecrease, color, size, price, newPrice, item, onMoreClick,
}) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const helperColor = theme.gray;
  return (
    <Card className="product-card-bag">
      <StyledProductCardBag>
        <StyledImageWrapper>
          <StyledImage src={imgSrc} alt="product card" width="104" height="104" />
        </StyledImageWrapper>
        <StyledInfo>
          <Subheader className="item" color={textColor}>
            {item}
          </Subheader>
          <ProductFeatures>
            <ProductFeature style={{ marginRight: 17 }}>
              <HelperText color={helperColor} style={{ marginRight: 4 }}>
                Color:
              </HelperText>
              <HelperText color={textColor}>
                {color}
              </HelperText>
            </ProductFeature>
            <ProductFeature>
              <HelperText color={helperColor} style={{ marginRight: 4 }}>
                Size:
              </HelperText>
              <HelperText color={textColor}>
                {size}
              </HelperText>
            </ProductFeature>
          </ProductFeatures>
          <StyledCounter
            className="counter"
            onCountDecrease={onCountDecrease}
            onCountIncrease={onCountIncrease}
            count={count}
          />
          <StyledPrice
            price={price}
            newPrice={newPrice}
          />
          <StyledButton className="more" type="button" onClick={onMoreClick} />
        </StyledInfo>
      </StyledProductCardBag>
    </Card>
  );
}

ProductCardBag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onCountIncrease: PropTypes.func.isRequired,
  onCountDecrease: PropTypes.func.isRequired,
  onMoreClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  newPrice: PropTypes.number,
};

ProductCardBag.defaultProps = {
  newPrice: 0,
};

export default ProductCardBag;
