/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import ProductCardBag from './ProductCardBag';

export default {
  title: 'Components/ProductCards/ProductCardBag',
  component: ProductCardBag,
  argTypes: {
    onCountChange: { action: 'count change' },
  },
};

const Template = (args) => <ProductCardBag {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/100',
  count: 5,
  color: 'black',
  size: 'L',
  price: 100,
  newPrice: 40,
  item: 't-shirt',
  id: 1,
  popupList: [
    {
      title: 'Add to favorites',
      onClick: action('added to favorites'),
    },
    {
      title: 'Remove from the list',
      onClick: action('removed from the list'),
    },
  ],
};
