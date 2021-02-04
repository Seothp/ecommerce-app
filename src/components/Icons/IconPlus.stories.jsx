import React from 'react';

import IconPlus from './IconPlus';

export default {
  title: 'Components/Icons/IconPlus',
  component: IconPlus,
};

const Template = (args) => <IconPlus {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
