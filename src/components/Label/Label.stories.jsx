import React from 'react';

import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const New = Template.bind({});
New.args = {
  variant: 'new',
};
export const Sale = Template.bind({});
Sale.args = {
  variant: 'sale',
  sale: 20,
};
export const Hot = Template.bind({});
Hot.args = {
  variant: 'hot',
};
