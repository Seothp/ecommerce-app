import React from 'react';

import ButtonLike from './ButtonLike';

export default {
  title: 'Components/ButtonLike',
  component: ButtonLike,
};

const Template = (args) => <ButtonLike {...args} />;

export const Active = Template.bind({});
Active.args = {
  active: true,
  handleClick: () => {},
};
export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
  handleClick: () => {},
};
