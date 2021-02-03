import React from 'react';

import ButtonBag from './ButtonBag';

export default {
  title: 'Components/ButtonBag',
  component: ButtonBag,
};

const Template = (args) => <ButtonBag {...args} />;

export const Active = Template.bind({});
Active.args = {
  isActive: true,
  handleClick: () => {},
};
export const Inactive = Template.bind({});
Inactive.args = {
  isActive: false,
  handleClick: () => {},
};
