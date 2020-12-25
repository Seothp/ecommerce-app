import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';

const StyledColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border: ${(props) => (props.isActive ? `1px solid ${props.borderColor}` : 'none')};
  border-radius: 50%;
`;

const StyledColor = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

function FilterColor({ onChange, color }) {
  const theme = useContext(ThemeContext);
  const borderColor = theme.name === 'light' ? theme.primary : theme.gray;
  return (
    <StyledColorWrapper
      className="color"
      borderColor={borderColor}
      onClick={() => onChange(color)}
      isActive={color.isActive}
    >
      <StyledColor color={color.colorValue} />
    </StyledColorWrapper>
  );
}

FilterColor.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.shape({
    colorValue: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FilterColor;
