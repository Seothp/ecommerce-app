import React from 'react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    onClick: { action: 'click' },
  },
};

const Template = (args) => <Tag {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  isActive: false,
  text: 'Tag',
};
export const SmallIsActive = Template.bind({});
SmallIsActive.args = {
  size: 'small',
  isActive: true,
  text: 'Tag',
};
export const Ordinary = Template.bind({});
Ordinary.args = {
  size: 'ordinary',
  isActive: false,
  text: 'Tag',
};
export const OrdinaryIsActive = Template.bind({});
OrdinaryIsActive.args = {
  size: 'ordinary',
  isActive: true,
  text: 'Tag',
};
