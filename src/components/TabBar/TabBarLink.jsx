/* eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
`;

function TabBarLink({ Icon, text, iconProps }) {
  return (
    <div className="tab-bar-link">
      <Icon {...iconProps}/>
      <LinkText>
        {text}
      </LinkText>
    </div>
  )
}

// TabBarLink.propTypes = {
//   Component: PropTypes.
// };

export default TabBarLink;
