import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { hexToRgb } from '../../utilities/index';
import { ThemeContext } from '../../theme-context';

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledLabel = styled.label`
  display: flex;
  width: 33px;
  height: 20px;
  background-color: ${(props) => `rgba(${hexToRgb(props.theme.gray)}, 0.1)`};
  border-radius: 15px;
`;
const Circle = styled.div`
  position: absolute;
  left: ${(props) => (props.isActive ? '13px' : 0)};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? props.theme.success : props.circleColor)};
  opacity: ${(props) => (props.isActive ? 1 : props.opacity)};
`;
function Switch({
  isActive, id, onChange, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const switchId = `switch${id}`;
  const circleColor = theme.name === 'light'
    ? '#FFFFFF'
    : theme.gray;
  const opacity = theme.name === 'light' ? 1 : 0.2;
  return (
    <StyledLabel
      theme={theme}
      htmlFor={switchId}
      className="switch"
    >
      <HiddenCheckbox
        type="checkbox"
        name={switchId}
        id={switchId}
        onChange={onChange}
        {...attrs}
      />
      <Circle
        theme={theme}
        isActive={isActive}
        circleColor={circleColor}
        opacity={opacity}
      />
    </StyledLabel>
  );
}

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Switch;
