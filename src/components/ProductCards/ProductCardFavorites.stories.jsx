import React from 'react';

import ProductCardFavorites from './ProductCardFavorites';

export default {
  title: 'Components/ProductCards/ProductCardCFavorites',
  component: ProductCardFavorites,
};

const Template = (args) => <ProductCardFavorites {...args} />;

export const Default = Template.bind({});
Default.args = {
  brandName: 'gucci',
  itemName: 't-shirt',
  color: 'black',
  size: 'L',
  price: 150,
  rating: 8.8,
  countOfVotes: 53,
  imgSrc: 'https://via.placeholder.com/100',
  onAddToBag: () => {},
  onRemoveFromFavorites: () => {},
};

export const Line = Template.bind({});
Line.args = {
  ...Default.args,
  type: 'line',
};

export const LineSoldout = Template.bind({});
LineSoldout.args = {
  ...Default.args,
  type: 'line',
  soldout: true,
};

export const LineWithNewPrice = Template.bind({});
LineWithNewPrice.args = {
  ...Default.args,
  type: 'line',
  newPrice: 80,
};

export const Module = Template.bind({});
Module.args = {
  ...Default.args,
  type: 'module',
};

export const ModuleSoldout = Template.bind({});
ModuleSoldout.args = {
  ...Default.args,
  type: 'module',
  soldout: true,
};

export const ModuleWithNewPrice = Template.bind({});
ModuleWithNewPrice.args = {
  ...Default.args,
  type: 'module',
  newPrice: 80,
};
