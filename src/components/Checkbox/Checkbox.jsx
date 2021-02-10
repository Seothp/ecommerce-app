import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Description from '../Typography/Description';
import IconCheck from '../Icons/IconCheck';
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

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: ${(props) => (props.isWithText ? '13px' : 0)};
  border: 2px solid ${(props) => (props.borderColor)};
  background: ${(props) => (props.bgColor)};
  box-sizing: border-box;
  border-radius: 4px;
`;
const StyledLabel = styled.label`
  display: flex;
  width: fit-content;
`;

/**
 *
 * @param {object} props
 * @param {String | Number} props.id
 * @param {String} props.text
 * @param {Boolean} props.checked
 * @param {Function} props.onChange
 */
function Checkbox({
  id, text, checked, onChange, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const checkboxId = `checkbox${id}`;
  const isWithText = !!text;
  const checkedColor = isWithText ? theme.invert : theme.primary;
  const borderColor = checked ? checkedColor : theme.gray;
  const bgColor = checked ? checkedColor : 'none';
  const fill = isWithText ? theme.main : theme.light;
  return (
    <StyledLabel htmlFor={checkboxId}>
      <HiddenCheckbox
        type="checkbox"
        name={checkboxId}
        id={checkboxId}
        onChange={onChange}
        {...attrs}
      />
      <StyledCheckbox
        checked={checked}
        bgColor={bgColor}
        borderColor={borderColor}
        isWithText
      >
        {checked
        && <IconCheck fill={fill} />}
      </StyledCheckbox>
      { text
        && <Description color={theme.invert}>{text}</Description>}
    </StyledLabel>
  );
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
  text: '',
};

export default Checkbox;
