import React from 'react';

import ButtonSearch from './ButtonSearch';

export default {
  title: 'Components/ButtonSearch',
  component: ButtonSearch,
};

const Template = (args) => <ButtonSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClick: () => {},
};
