import React from 'react';

import IconDirectionArrow from './IconDirectionArrow';

export default {
  title: 'Components/Icons/IconDirectionArrow',
  component: IconDirectionArrow,
};

const Template = (args) => <IconDirectionArrow {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  fill: 'gray',
};
