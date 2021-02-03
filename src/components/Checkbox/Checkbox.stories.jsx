import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const EmptyInactive = Template.bind({});
EmptyInactive.args = {
  text: '',
  id: 1,
  checked: false,
  onChange: () => {},
};

export const EmptyActive = Template.bind({});
EmptyActive.args = {
  text: '',
  id: 2,
  checked: true,
  onChange: () => {},
};

export const WidthTextInactive = Template.bind({});
WidthTextInactive.args = {
  text: 'some text',
  id: 3,
  checked: false,
  onChange: () => {},
};

export const WidthTextActive = Template.bind({});
WidthTextActive.args = {
  text: 'some text',
  id: 4,
  checked: true,
  onChange: () => {},
};
