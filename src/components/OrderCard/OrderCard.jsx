import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Subheader from '../Typography/Subheader';
import HelperText from '../Typography/HelperText';
import Button from '../Button/Button';
import { ThemeContext } from '../../theme-context';

const StyledOrderCard = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 18px 10px 20px 19px;
`;
const Status = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TrackId = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const StyledButton = styled(Button)`
  width: 98px;
`;

/**
 *
 * @param {object} props
 * @param {Number} props.id
 * @param {String | Number} props.trackId
 * @param {String} props.date
 * @param {Number} props.quantity
 * @param {Number} props.amount
 * @param {Function} props.onOpenDetails
 * @param {'delivered' | 'cancelled'} props.deliverStatus
 */
function OrderCard({
  id, trackId, date, quantity, amount, onOpenDetails, deliverStatus,
}) {
  const theme = useContext(ThemeContext);
  const isCancelled = deliverStatus.toLowerCase() === 'cancelled';
  const statusColor = isCancelled ? theme.error : theme.success;
  const helperColor = theme.gray;
  const textColor = theme.invert;
  return (
    <Card
      height={164}
    >
      <StyledOrderCard>
        <Wrapper>
          <Subheader
            color={textColor}
          >
            {`Order №${id}`}
          </Subheader>
          <HelperText className="date" color={helperColor}>
            {date}
          </HelperText>
        </Wrapper>
        <Feature
          className="track-id"
          style={{ marginTop: 12, marginBottom: 4 }}
          color={textColor}
        >
          <HelperText
            style={{ marginRight: 8 }}
            color={helperColor}
          >
            Tracking number:
          </HelperText>
          <TrackId className="track-id-val">
            {trackId}
          </TrackId>
        </Feature>
        <Wrapper>
          <Feature
            className="quantity"
            color={textColor}
          >
            <HelperText
              style={{ marginRight: 8 }}
              color={helperColor}
            >
              Quantity:
            </HelperText>
            <div className="quantity-val">
              {quantity}
            </div>
          </Feature>
          <Feature
            className="amount"
            color={textColor}
          >
            <HelperText
              style={{ marginRight: 8 }}
              color={helperColor}
            >
              Total Amount:
            </HelperText>
            <div className="amount-val">
              {amount}
              $
            </div>
          </Feature>
        </Wrapper>
        <Wrapper
          style={{ marginTop: 14 }}
        >
          <StyledButton
            variant="outline"
            size="small"
            onClick={onOpenDetails}
          >
            Details
          </StyledButton>
          <Status
            className="deliver-status"
            color={statusColor}
          >
            {deliverStatus}
          </Status>
        </Wrapper>
      </StyledOrderCard>
    </Card>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  trackId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onOpenDetails: PropTypes.func.isRequired,
  deliverStatus: PropTypes.oneOf([
    'delivered',
    'cancelled',
  ]).isRequired,
};

export default OrderCard;
