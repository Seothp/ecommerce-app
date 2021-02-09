/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Popup from './Popup';

export default {
  title: 'Components/Popup',
  Component: Popup,
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open
      </button>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...args}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      title: 'Do one...',
      onClick: action('do one'),
    },
    {
      title: 'Do two...',
      onClick: action('do two'),
    },
    {
      title: 'Do three...',
      onClick: action('do three'),
    },
  ],
};
