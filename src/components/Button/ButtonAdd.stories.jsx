import React from 'react';

import ButtonAdd from './ButtonAdd';

export default {
  title: 'Components/ButtonAdd',
  component: ButtonAdd,
};

const Template = (args) => <ButtonAdd {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClick: () => {},
};
