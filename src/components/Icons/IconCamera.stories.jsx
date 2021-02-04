import React from 'react';

import IconCamera from './IconCamera';

export default {
  title: 'Components/Icons/IconCamera',
  component: IconCamera,
};

const Template = (args) => <IconCamera {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
