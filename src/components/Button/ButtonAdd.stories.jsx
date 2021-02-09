import React from 'react';

import ButtonAdd from './ButtonAdd';

export default {
  title: 'Components/ButtonAdd',
  component: ButtonAdd,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
};

const Template = (args) => <ButtonAdd {...args} />;

export const Default = Template.bind({});
Default.args = {};
