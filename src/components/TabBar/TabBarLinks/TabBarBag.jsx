import React from 'react';
import PropTypes from 'prop-types';

import TabBarLink from '../TabBarLink';
import IconBag from '../../Icons/IconBag/IconBag';

function TabBarBag({ isActive, fill }) {
  return (
    <TabBarLink
      Icon={IconBag}
      text="Bag"
      iconProps={{
        width: 26, height: 26, outline: !isActive, fill,
      }}
    />
  );
}

TabBarBag.propTypes = {
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired,
};

export default TabBarBag;
