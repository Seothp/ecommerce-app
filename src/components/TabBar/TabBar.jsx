// /* eslint-disable  */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

import TabBarHome from './TabBarLinks/TabBarHome';
import TabBarShop from './TabBarLinks/TabBarShop';
import TabBarBag from './TabBarLinks/TabBarBag';
import TabBarFavorites from './TabBarLinks/TabBarFavorites';
import TabBarProfile from './TabBarLinks/TabBarProfile';
import HomeIndicator from '../HomeIndicator/HomeIndicator';

import { ThemeContext } from '../../theme-context';

const tabs = [
  {
    path: '/',
    component: TabBarHome,
    exact: true,
  },
  {
    path: '/shop',
    component: TabBarShop,
  },
  {
    path: '/bag',
    component: TabBarBag,
  },
  {
    path: '/favorites',
    component: TabBarFavorites,
  },
  {
    path: '/profile',
    component: TabBarProfile,
  },
];

const StyledTabBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 83px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 26px 0px 26px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

function TabBar({ ...attrs }) {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  console.log(location);
  const currentPath = location.pathname;
  const isActive = (path) => path === currentPath;
  const indicatorType = (theme.name === 'light' ? 'light' : 'dark');
  return (
    <StyledTabBar className="tab-bar" {...attrs}>
      <Tabs>
        {tabs.map((tab) => (
          <NavLink
            to={tab.path}
            className="tab-bar-link"
            exact={tab.exact}
            key={`tab-bar-id${tab.path}`}
            style={{ textDecoration: 'none' }}
          >
            <tab.component
              isActive={isActive(tab.path)}
              fill={isActive(tab.path) ? theme.primary : theme.gray}
            />
          </NavLink>
        ))}
      </Tabs>
      <HomeIndicator type={indicatorType} />
    </StyledTabBar>
  );
}

export default TabBar;
