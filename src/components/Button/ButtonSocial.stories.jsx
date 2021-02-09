import React from 'react';

import ButtonSocial from './ButtonSocial';

export default {
  title: 'Components/ButtonSocial',
  component: ButtonSocial,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonSocial {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'fb',
};

export const Google = Template.bind({});
Google.args = {
  type: 'google',
};
