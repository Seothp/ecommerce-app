import React from 'react';

import ButtonCamera from './ButtonCamera';

export default {
  title: 'Components/ButtonCamera',
  component: ButtonCamera,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
};

const Template = (args) => <ButtonCamera {...args} />;

export const Default = Template.bind({});
Default.args = {};
