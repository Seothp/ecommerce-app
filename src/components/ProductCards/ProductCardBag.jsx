import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import ButtonMore from '../Button/ButtonMore';
import Counter from '../Counter/Counter';
import Price from '../Price/Price';
import Popup from '../Popup/Popup';

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
/**
 * @param {object} props
 * @param {Array<{title: String, onClick: function}>} props.popupList
 * @param {String} props.imgSrc
 * @param {Number} props.count
 * @param {Function} props.onCountChange
 * @param {String} props.color
 * @param {String} props.size
 * @param {Number} props.price
 * @param {Number} props.newPrice
 * @param {String} props.item
 * @param {String | Number} props.id
 */
function ProductCardBag({
  imgSrc, count, onCountChange, color, size, price, newPrice, item, id, popupList,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleCountIncrease = () => {
    onCountChange({ id, count: count + 1 });
  };
  const handleCountDecrease = () => {
    onCountChange({ id, count: count - 1 });
  };
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const helperColor = theme.gray;
  const list = popupList.map((item) => {
    const newItem = { ...item };
    newItem.onClick = () => item.onClick(id);
    return newItem;
  });
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
            onCountIncrease={handleCountIncrease}
            onCountDecrease={handleCountDecrease}
            count={count}
          />
          <StyledPrice
            price={price}
            newPrice={newPrice}
          />
          <StyledButton
            className="more"
            type="button"
            onClick={() => setIsPopupOpen(true)}
          />
        </StyledInfo>
      </StyledProductCardBag>
      <Popup
        list={list}
        // list={popupList}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </Card>
  );
}

ProductCardBag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  popupList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func,
  })).isRequired,
  onCountChange: PropTypes.func.isRequired,
  newPrice: PropTypes.number,
};

ProductCardBag.defaultProps = {
  newPrice: 0,
};

export default ProductCardBag;
