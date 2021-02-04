import React from 'react';

import IconSearch from './IconSearch';

export default {
  title: 'Components/Icons/IconSearch',
  component: IconSearch,
};

const Template = (args) => <IconSearch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
