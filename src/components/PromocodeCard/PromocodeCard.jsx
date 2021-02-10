import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Button from '../Button/Button';
import HelperText from '../Typography/HelperText';
import Descriptive from '../Typography/Descriptive';
import { ThemeContext } from '../../theme-context';

const StyledPromocodeCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding: 12px 14px 11px 94px;
`;
const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
  height: 80px;
  background: ${(props) => props.imgBg};
`;
const StyledImage = styled.img`
  width: 80px;
  height: 80px;
`;
const Discount = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  color: ${(props) => props.color};
`;
const DiscountNum = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  margin-right: 2px;
`;
const DiscountText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;
const StyledButton = styled(Button)`
  width: 93px;
  margin-top: 8px;
`;
const Left = styled.div`
  text-align: center;
`;

/**
 *
 * @param {object} props
 * @param {String} props.imgSrc
 * @param {Number} props.discount
 * @param {String} props.title
 * @param {String | Number} props.code
 * @param {Number} props.daysRemaining
 * @param {Function} props.onApply
 */
function PromocodeCard({
  imgSrc, discount, title, code, daysRemaining, onApply,
}) {
  const theme = useContext(ThemeContext);
  const imgSize = 80;
  const textColor = theme.invert;
  const helperColor = theme.gray;
  const discountColor = imgSrc ? '#222222' : theme.light;
  const imgBg = theme.name === 'light' ? 'linear-gradient(180deg, #BF190E 0%, #EB001B 100%), #9B9B9B' : theme.sale;
  return (
    <Card
      height={80}
    >
      <StyledPromocodeCard>
        <ImageWrapper
          imgBg={imgBg}
        >
          {imgSrc
            && <StyledImage src={imgSrc} alt="promocode card" />}
        </ImageWrapper>
        <Discount
          className="discount"
          size={imgSize}
          color={discountColor}
        >
          <DiscountNum className="discount-num">
            {discount}
          </DiscountNum>
          <DiscountText className="discount-text">
            <div>
              %
            </div>
            <div>
              off
            </div>
          </DiscountText>
        </Discount>
        <div>
          <Descriptive className="title" color={textColor}>
            {title}
          </Descriptive>
          <HelperText
            className="code"
            color={textColor}
            style={{ marginTop: 4 }}
          >
            {code}
          </HelperText>
        </div>
        <Left>
          <HelperText className="days-remaining" color={helperColor}>
            {`${daysRemaining} days remaining`}
          </HelperText>
          <StyledButton
            size="small"
            onClick={onApply}
          >
            Apply
          </StyledButton>
        </Left>
      </StyledPromocodeCard>
    </Card>
  );
}

PromocodeCard.propTypes = {
  discount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  daysRemaining: PropTypes.number.isRequired,
  onApply: PropTypes.func.isRequired,
  imgSrc: PropTypes.string,
};

PromocodeCard.defaultProps = {
  imgSrc: '',
};

export default PromocodeCard;
