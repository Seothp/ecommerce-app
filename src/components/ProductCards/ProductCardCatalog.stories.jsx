import React from 'react';

import ProductCardCatalog from './ProductCardCatalog';

export default {
  title: 'Components/ProductCards/ProductCardCataglog',
  component: ProductCardCatalog,
  argTypes: {
    onAddToFavorites: { action: 'add to favorites' },
  },
};

const Template = (args) => <ProductCardCatalog {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/100',
  price: 150,
  item: 't-shirt',
  brand: 'gucci',
  rating: 8.5,
  countOfVotes: 23,
};
export const Line = Template.bind({});
Line.args = {
  ...Default.args,
  type: 'line',
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
export const ModuleWithNewPrice = Template.bind({});
ModuleWithNewPrice.args = {
  ...Default.args,
  type: 'module',
  newPrice: 80,
};
export const Main = Template.bind({});
Main.args = {
  ...Default.args,
  type: 'module',
  main: true,
  newPrice: 80,
};
export const MainWithNewPrice = Template.bind({});
MainWithNewPrice.args = {
  ...Default.args,
  type: 'module',
  main: true,
  newPrice: 80,
};
