import React from 'react';

import ButtonLike from './ButtonLike';

export default {
  title: 'Components/ButtonLike',
  component: ButtonLike,
  argTypes: {
    handleClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonLike {...args} />;

export const Active = Template.bind({});
Active.args = {
  active: true,
};
export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};
