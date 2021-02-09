import React from 'react';

import NavigationBar from './NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
};
export const HeadlineSmall = Template.bind({});
HeadlineSmall.args = {
  title: 'HeadlineSmall',
  isHeadline: true,
  size: 'small',
};
export const HeadlineBig = Template.bind({});
HeadlineBig.args = {
  title: 'HeadlineBig',
  isHeadline: true,
  size: 'big',
};
export const NotHeadlineSmall = Template.bind({});
NotHeadlineSmall.args = {
  title: 'NotHeadlineSmall',
  isHeadline: false,
  size: 'small',
};
export const NotHeadlineBig = Template.bind({});
NotHeadlineBig.args = {
  title: 'NotHeadlineBig',
  isHeadline: false,
  size: 'big',
};
