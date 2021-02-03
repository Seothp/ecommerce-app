import React from 'react';

import FilterMenu from './FilterMenu';

export default {
  title: 'Components/Filters/FilterMenu',
  component: FilterMenu,
};

const Template = (args) => <FilterMenu {...args} />;

export const WithListGrid = Template.bind({});
WithListGrid.args = {
  grid: 'list',
  onGridChange: () => {},
  onDirectionChange: () => {},
  onOpenFilters: () => {},
  onSortByChange: () => {},
  sortBy: 'popularity',
};

export const WithModuleGrid = Template.bind({});
WithModuleGrid.args = {
  ...WithListGrid.args,
  grid: 'grid',
};
