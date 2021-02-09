import React from 'react';

import ButtonReview from './ButtonReview';

export default {
  title: 'Components/ButtonReview',
  component: ButtonReview,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonReview {...args} />;

export const Default = Template.bind({});
Default.args = {};
