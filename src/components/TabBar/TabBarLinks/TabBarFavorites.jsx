import React from 'react';

import TabBarLink from '../TabBarLink';
import IconHeart from '../../Icons/IconHeart';

function TabBarFavorites() {
  return (
    <TabBarLink Icon={IconHeart} text="Favorites" iconProps={{ width: 26, height: 26 }} />
  );
}

export default TabBarFavorites;
