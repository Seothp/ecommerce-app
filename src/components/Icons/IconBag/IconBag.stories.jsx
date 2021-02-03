import React from 'react';

import IconBag from './IconBag';

export default {
  title: 'Components/Icons/IconBag',
  component: IconBag,
};

const Template = (args) => <IconBag {...args} />;

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
