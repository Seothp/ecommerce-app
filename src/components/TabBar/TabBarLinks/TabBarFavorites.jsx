import React from 'react';
import PropTypes from 'prop-types';

import TabBarLink from '../TabBarLink';
import IconHeart from '../../Icons/IconHeart/IconHeart';

function TabBarFavorites({ isActive, fill }) {
  return (
    <TabBarLink
      Icon={IconHeart}
      text="Favorites"
      iconProps={{
        width: 26, height: 26, outline: !isActive, fill,
      }}
      color={fill}
    />
  );
}

TabBarFavorites.propTypes = {
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired,
};

export default TabBarFavorites;
