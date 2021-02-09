import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args}>Button</Button>;

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  size: 'big',
  variant: 'primary',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 'small',
  variant: 'primary',
};
export const OutlineBig = Template.bind({});
OutlineBig.args = {
  size: 'big',
  variant: 'outline',
};
export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  size: 'small',
  variant: 'outline',
};
