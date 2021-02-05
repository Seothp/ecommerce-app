import React from 'react';

import PromocodeCard from './PromocodeCard';

export default {
  title: 'Components/PromocodeCard',
  component: PromocodeCard,
};

const Template = (args) => <PromocodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  discount: 15,
  title: 'Summer code',
  code: 'SUMMER2021',
  daysRemaining: 6,
  onApply: () => {},
};
export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  imgSrc: 'https://via.placeholder.com/100',
};
