import React, { useState } from 'react';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p style={{ color: 'gray' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit necessitatibus ab delectus harum quam nisi!
        </p>
      </Modal>
    </div>
  );
};
