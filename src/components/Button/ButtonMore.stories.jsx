import React from 'react';

import ButtonMore from './ButtonMore';

export default {
  title: 'Components/ButtonMore',
  component: ButtonMore,
};

const Template = (args) => <ButtonMore {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
