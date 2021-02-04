import React from 'react';

import IconChevron from './IconChevron';

export default {
  title: 'Components/Icons/IconChevron',
  component: IconChevron,
};

const Template = (args) => <IconChevron {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
