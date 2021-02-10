import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 375px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Line = styled.div`
  width: 135px;
  height: 5px;
  margin-bottom: 9px;
  border-radius: 100px;
  background: ${(props) => props.bgColor};
`;

/**
 *
 * @param {object} props
 * @param {'light' | 'dark'} props.type
 */
function HomeIndicator({ type, ...attrs }) {
  const theme = useContext(ThemeContext);
  const isLight = type === 'light';
  const bgColor = isLight ? '#000000' : theme.light;
  return (
    <StyledIndicator className="home-indicator" {...attrs}>
      <Line className="line" bgColor={bgColor} />
    </StyledIndicator>
  );
}

HomeIndicator.propTypes = {
  type: PropTypes.oneOf([
    'light',
    'dark',
  ]).isRequired,
};

export default HomeIndicator;
