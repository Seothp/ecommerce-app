import React from 'react';

import IconPencil from './IconPencil';

export default {
  title: 'Components/Icons/IconPencil',
  component: IconPencil,
};

const Template = (args) => <IconPencil {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
