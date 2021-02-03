import React from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    'one', 'two', 'three', 'four', 'five',
  ],
  initialValue: 'size',
  onChange: () => {},
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};
