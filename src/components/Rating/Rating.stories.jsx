import React from 'react';

import Rating from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  rating: 0,
  countOfVotes: 0,
};

export const HalfFilled = Template.bind({});
HalfFilled.args = {
  rating: 5,
  countOfVotes: 56,
};

export const Filled = Template.bind({});
Filled.args = {
  rating: 10,
  countOfVotes: 9,
};
