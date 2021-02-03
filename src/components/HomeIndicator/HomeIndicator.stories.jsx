import React from 'react';

import HomeIndicator from './HomeIndicator';

export default {
  title: 'Components/HomeIndicator',
  component: HomeIndicator,
};

const Template = (args) => <HomeIndicator {...args} style={{ top: 16, left: 16 }} />;

export const Light = Template.bind({});
Light.args = {
  type: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'dark',
};
