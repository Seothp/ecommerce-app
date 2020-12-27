import React from 'react';

import TabBarLink from '../TabBarLink';
import IconProfile from '../../Icons/IconProfile';

function TabBarProfile() {
  return (
    <TabBarLink Icon={IconProfile} text="Profile" iconProps={{ width: 26, height: 30 }} />
  );
}

export default TabBarProfile;
