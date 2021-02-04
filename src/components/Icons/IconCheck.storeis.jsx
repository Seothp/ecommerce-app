import React from 'react';

import IconCheck from './IconCheck';

export default {
  title: 'Components/Icons/IconCheck',
  component: IconCheck,
};

const Template = (args) => <IconCheck {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
