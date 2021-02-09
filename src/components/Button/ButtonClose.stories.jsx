import React from 'react';

import ButtonClose from './ButtonClose';

export default {
  title: 'Components/ButtonClose',
  component: ButtonClose,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <ButtonClose {...args} />;

export const Default = Template.bind({});
Default.args = {};
