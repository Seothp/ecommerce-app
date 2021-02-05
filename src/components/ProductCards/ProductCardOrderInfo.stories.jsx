import React from 'react';

import ProductCardOrderInfo from './ProductCardOrderInfo';

export default {
  title: 'Components/ProductCards/ProductCardCOrderInfo',
  component: ProductCardOrderInfo,
};

const Template = (args) => <ProductCardOrderInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  brandName: 'gucci',
  itemName: 't-shirt',
  color: 'black',
  size: 'L',
  price: 150,
  imgSrc: 'https://via.placeholder.com/100',
  units: 2,
};
export const WithNewPrice = Template.bind({});
WithNewPrice.args = {
  ...Default.args,
  newPrice: 90,
};
