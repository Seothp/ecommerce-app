import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import { ThemeContext } from '../../theme-context';

const StyledAdressCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  padding: 18px 23px 18px 28px;
  color: ${(props) => props.color};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.15px;
`;
const EditButton = styled.button`
  background: none;
  border: none;
  padding: none;
  position: absolute;
  top: 18px;
  right: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
`;
const Name = styled.div`
  font-weight: 500;
`;

/**
 *
 * @param {object} props
 * @param {String} props.fullName
 * @param {String} props.country
 * @param {String} props.street
 * @param {String} props.city
 * @param {String} props.zipCode
 * @param {Function} props.onEditClick
 * @param {Function} props.onChange
 * @param {Boolean} props.isActive
 * @param {String | Number} props.id
 */
function AdressCard({
  fullName, country, street, city, zipCode, onEditClick, onChange, isActive, id,
}) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  const buttonColor = theme.primary;
  return (
    <Card
      height={140}
    >
      <StyledAdressCard className="adress-card" color={textColor}>
        <Name className="name">
          {fullName}
        </Name>
        <div
          className="street"
          style={{ marginTop: 7 }}
        >
          {street}
        </div>
        <div
          className="adress"
          style={{ marginBottom: 14 }}
        >
          {`${city}, ${zipCode}, ${country}`}
        </div>
        <Checkbox
          id={id}
          text="Use as the shipping address"
          checked={isActive}
          onChange={onChange}
        />
        <EditButton
          className="edit"
          color={buttonColor}
          onClick={onEditClick}
        >
          Edit
        </EditButton>
      </StyledAdressCard>
    </Card>
  );
}

AdressCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default AdressCard;
