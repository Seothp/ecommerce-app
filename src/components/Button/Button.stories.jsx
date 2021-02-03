import React from 'react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  size: 'big',
  variant: 'primary',
  handleClick: () => {},
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 'small',
  variant: 'primary',
  handleClick: () => {},
};
export const OutlineBig = Template.bind({});
OutlineBig.args = {
  size: 'big',
  variant: 'outline',
  handleClick: () => {},
};
export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  size: 'small',
  variant: 'outline',
  handleClick: () => {},
};
