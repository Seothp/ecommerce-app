import React from 'react';

import OrderCard from './OrderCard';

export default {
  title: 'Components/OrderCard',
  component: OrderCard,
  argTypes: {
    onOpenDetails: { action: 'open details' },
  },
};

const Template = (args) => <OrderCard {...args} />;

export const Delivered = Template.bind({});
Delivered.args = {
  id: 848923,
  trackId: '94D83AB21331',
  date: '05-12-2008',
  quantity: 3,
  amount: 150,
  deliverStatus: 'delivered',
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  ...Delivered.args,
  deliverStatus: 'cancelled',
};
