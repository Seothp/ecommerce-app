import React from 'react';

import Price from './Price';

export default {
  title: 'Components/Price',
  component: Price,
};

const Template = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
  price: 100,
};

export const WithNewPrice = Template.bind({});
WithNewPrice.args = {
  price: 100,
  newPrice: 80,
};
