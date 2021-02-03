import React from 'react';

import FilterColors from './FilterColors';

export default {
  title: 'Components/Filters/FilterColors',
  component: FilterColors,
};

const Template = (args) => <FilterColors {...args} />;

export const Default = Template.bind({});
Default.args = {
  colors: [
    {
      colorValue: '#FFFFFF',
      isActive: false,
    },
    {
      colorValue: '#000000',
      isActive: false,
    }, {
      colorValue: '#FF00DD',
      isActive: true,
    }, {
      colorValue: '#2222AA',
      isActive: false,
    },
  ],
};
