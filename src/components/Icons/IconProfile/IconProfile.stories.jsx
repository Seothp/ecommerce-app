import React from 'react';

import IconProfile from './IconProfile';

export default {
  title: 'Components/Icons/IconProfile',
  component: IconProfile,
};

const Template = (args) => <IconProfile {...args} />;

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
