import React from 'react';
import PropTypes from 'prop-types';

import TabBarLink from '../TabBarLink';
import IconCart from '../../Icons/IconCart/IconCart';

function TabBarShop({ isActive, fill }) {
  const size = 26;
  return (
    <TabBarLink
      Icon={IconCart}
      text="Shop"
      iconProps={{
        outline: !isActive, fill, width: size, height: size,
      }}
    />
  );
}

TabBarShop.propTypes = {
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired,
};

export default TabBarShop;
