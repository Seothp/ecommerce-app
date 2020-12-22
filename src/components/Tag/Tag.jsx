import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Descriptive from '../Typography/Descriptive';
import { ThemeContext } from '../../theme-context';

const TagWrapper = styled.button`
  display: inline-block;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  border: ${(props) => (props.isActive ? 'none' : props.border)};
  width: ${(props) => props.width}px;
  height: ${(props) => (props.isOrdinary ? '40px' : '30px')};
  background-color: ${(props) => (props.isActive ? props.bgColor : 'none')};
  border-radius: ${(props) => (props.isOrdinary ? '8px' : '30px')};
`;

function Tag({
  isActive, size, onClick, width, text, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const isOrdinary = size === 'ordinary';
  const border = isOrdinary ? `1px solid ${theme.gray}` : 'none';
  const bgColor = isOrdinary ? theme.primary : theme.invert;
  const color = isActive ? theme.main : theme.invert;
  return (
    <TagWrapper
      className="tag"
      onClick={onClick}
      width={width}
      isOrdinary={isOrdinary}
      border={border}
      bgColor={bgColor}
      isActive={isActive}
      {...attrs}
    >
      <Descriptive color={color}>
        {text}
      </Descriptive>
    </TagWrapper>
  );
}

Tag.propTypes = {
  isActive: PropTypes.bool.isRequired,
  size: PropTypes.oneOf([
    'ordinary',
    'small',
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  text: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  width: 100,
};

export default Tag;
