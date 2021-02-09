import React from 'react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{ width: 'fit-content', height: 'fit-content', border: '1px solid lightgreen' }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const DefaultEmptyLine = Template.bind({});
DefaultEmptyLine.args = {
  type: 'line',
  children: '',
};

export const DefaultEmptyModule = Template.bind({});
DefaultEmptyModule.args = {
  type: 'module',
  children: '',
};

export const DefaultFilledLine = Template.bind({});
DefaultFilledLine.args = {
  type: 'line',
  children: <div style={{ color: 'lightblue' }}>Some content...</div>,
};

export const DefaultFilledModule = Template.bind({});
DefaultFilledModule.args = {
  type: 'module',
  children: <div style={{ color: 'lightblue' }}>This is should be transparent</div>,
};
