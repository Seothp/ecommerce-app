import React from 'react';

import ButtonMore from './ButtonMore';

export default {
  title: 'Components/ButtonMore',
  component: ButtonMore,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonMore {...args} />;

export const Default = Template.bind({});
Default.args = {};
