import React from 'react';

import IconHeart from './IconHeart';

export default {
  title: 'Components/Icons/IconHeart',
  component: IconHeart,
};

const Template = (args) => <IconHeart {...args} />;

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
