import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconChevron from '../Icons/IconChevron';
import Header3 from '../Typography/Header3';
import Header1 from '../Typography/Header1';
import { ThemeContext } from '../../theme-context';

const StyledNavigationBar = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 44px;
`;

const StyledTopNavBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Chevron = styled.div`
  position: absolute;
  top: 12px;
  left: 15px;
`;

const StyledBottomNavBar = styled.div`
  text-align: left;
  padding-left: 14px;
`;

function NavigationBar({
  isHeadline, title, size, onClick, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const fill = theme.invert;
  const color = theme.invert;
  const isBigHeadline = isHeadline && size === 'big';
  const isSmallHeadline = isHeadline && !(size === 'big');
  return (
    <StyledNavigationBar className="nav-bar" {...attrs}>
      <StyledTopNavBar className="nav-bar-top">
        <Chevron onClick={onClick}>
          <IconChevron fill={fill} />
        </Chevron>
        {isSmallHeadline
        && (
        <Header3 color={color}>
          {title}
        </Header3>
        )}
      </StyledTopNavBar>
      {isBigHeadline
      && (
        <StyledBottomNavBar>
          <Header1 color={color}>
            {title}
          </Header1>
        </StyledBottomNavBar>
      )}
    </StyledNavigationBar>
  );
}

NavigationBar.propTypes = {
  isHeadline: PropTypes.bool,
  title: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'big',
  ]),
  onClick: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  isHeadline: false,
  title: '',
  size: 'small',
};

export default NavigationBar;
