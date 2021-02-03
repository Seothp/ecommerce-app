import React from 'react';

import IconHome from './IconHome';

export default {
  title: 'Components/Icons/IconHome',
  component: IconHome,
};

const Template = (args) => <IconHome {...args} />;

export const Default = Template.bind({});
Default.args = {
  outline: false,
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
  outline: false,
};

export const ColoredOutline = Template.bind({});
ColoredOutline.args = {
  outline: true,
  fill: 'gray',
};
