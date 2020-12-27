import React from 'react';

import TabBarLink from '../TabBarLink';
import IconBag from '../../Icons/IconBag';

function TabBarBag() {
  return (
    <TabBarLink Icon={IconBag} text="Bag" iconProps={{ width: 26, height: 26 }} />
  );
}

export default TabBarBag;
