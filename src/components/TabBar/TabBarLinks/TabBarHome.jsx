import React from 'react';
import PropTypes from 'prop-types';

import TabBarLink from '../TabBarLink';
import IconHome from '../../Icons/IconHome/IconHome';

function TabBarHome({ isActive, fill }) {
  return (
    <TabBarLink
      Icon={IconHome}
      text="Home"
      iconProps={{ outline: !isActive, fill }}
      color={fill}
    />
  );
}

TabBarHome.propTypes = {
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired,
};

export default TabBarHome;
