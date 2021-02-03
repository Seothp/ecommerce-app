import React from 'react';

import FilterRange from './FilterRange';

export default {
  title: 'Components/Filters/FilterRange',
  component: FilterRange,
};

const Template = (args) => <FilterRange {...args} />;

export const Default = Template.bind({});
Default.args = {
  start: 0,
  end: 100,
};
