import React from 'react';
import PropTypes from 'prop-types';

import TabBarLink from '../TabBarLink';
import IconProfile from '../../Icons/IconProfile/IconProfile';

function TabBarProfile({ isActive, fill }) {
  return (
    <TabBarLink
      Icon={IconProfile}
      text="Profile"
      iconProps={{
        width: 26, height: 30, outline: !isActive, fill,
      }}
    />
  );
}

TabBarProfile.propTypes = {
  isActive: PropTypes.bool.isRequired,
  fill: PropTypes.string.isRequired,
};

export default TabBarProfile;
