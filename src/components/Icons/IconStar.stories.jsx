import React from 'react';

import IconStar from './IconStar';

export default {
  title: 'Components/Icons/IconStar',
  component: IconStar,
};

const Template = (args) => <IconStar {...args} />;

export const Default = Template.bind({});
Default.args = {
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
