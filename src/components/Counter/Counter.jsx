import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledCounter = styled.div`
  width: 109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CounterButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.boxShadow};
`;
const Count = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color};
`;

/**
 *
 * @param {object} props
 * @param {Number} props.count
 * @param {Function} props.onCountDecrease
 * @param {Function} props.onCountIncrease
 */
function Counter({
  count, onCountIncrease, onCountDecrease, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const { main, invert } = theme;
  const boxShadow = theme.name === 'light'
    ? '0px 4px 8px rgba(0, 0, 0, 0.1)'
    : '0px 4px 12px rgba(18, 18, 18, 0.39)';
  return (
    <StyledCounter className="counter" {...attrs}>
      <CounterButton
        className="decrease"
        type="button"
        onClick={onCountDecrease}
        bgColor={main}
        boxShadow={boxShadow}
      >
        -
      </CounterButton>
      <Count className="count" color={invert}>
        {count}
      </Count>
      <CounterButton
        className="increase"
        type="button"
        onClick={onCountIncrease}
        bgColor={main}
        boxShadow={boxShadow}
      >
        +
      </CounterButton>
    </StyledCounter>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onCountIncrease: PropTypes.func.isRequired,
  onCountDecrease: PropTypes.func.isRequired,
};

export default Counter;
