import React from 'react';

import ButtonBag from './ButtonBag';

export default {
  title: 'Components/ButtonBag',
  component: ButtonBag,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonBag {...args} />;

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
export const Inactive = Template.bind({});
Inactive.args = {
  isActive: false,
};
