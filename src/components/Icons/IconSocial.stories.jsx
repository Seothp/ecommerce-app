import React from 'react';

import IconSocial from './IconSocial';

export default {
  title: 'Components/Icons/IconSocial',
  component: IconSocial,
};

const Template = (args) => <IconSocial {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'fb',
};

export const Google = Template.bind({});
Google.args = {
  type: 'google',
};
