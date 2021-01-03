import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabBarLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`;

const LinkText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-decoration: none;
  color: ${(props) => props.color};
`;

function TabBarLink({
  Icon, text, iconProps, color,
}) {
  return (
    <TabBarLinkWrapper className="tab-bar-link">
      <Icon {...iconProps} />
      <LinkText color={color}>
        {text}
      </LinkText>
    </TabBarLinkWrapper>
  );
}

TabBarLink.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconProps: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.any,
  ])),

};

TabBarLink.defaultProps = {
  iconProps: {},
};

export default TabBarLink;
