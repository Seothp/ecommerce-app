import React from 'react';

import AdressCard from './AdressCard';

export default {
  title: 'Components/AdressCard',
  component: AdressCard,
};

const Template = (args) => <AdressCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  fullName: 'Peter Parker',
  country: 'USA',
  street: 'somestreet',
  city: 'New York',
  zipCode: '123123',
  onEditClick: () => {},
  onChange: () => {},
  isActive: false,
  id: '323123',
};
