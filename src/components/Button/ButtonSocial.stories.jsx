import React from 'react';

import ButtonSocial from './ButtonSocial';

export default {
  title: 'Components/ButtonSocial',
  component: ButtonSocial,
};

const Template = (args) => <ButtonSocial {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  handleClick: () => {},
  type: 'fb',
};

export const Google = Template.bind({});
Google.args = {
  handleClick: () => {},
  type: 'google',
};
