import React from 'react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template = (args) => <Tag {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  isActive: false,
  text: 'Tag',
  onClick: () => {},
};
export const SmallIsActive = Template.bind({});
SmallIsActive.args = {
  size: 'small',
  isActive: true,
  text: 'Tag',
  onClick: () => {},
};
export const Ordinary = Template.bind({});
Ordinary.args = {
  size: 'ordinary',
  isActive: false,
  text: 'Tag',
  onClick: () => {},
};
export const OrdinaryIsActive = Template.bind({});
OrdinaryIsActive.args = {
  size: 'ordinary',
  isActive: true,
  text: 'Tag',
  onClick: () => {},
};
