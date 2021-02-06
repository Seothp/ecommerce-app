import React, { useState } from 'react';

import Switch from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Default = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="">

      <Switch
        id="someswitch-id-1"
        isActive={isActive}
        onChange={() => setIsActive(!isActive)}
      />
    </div>
  );
};
