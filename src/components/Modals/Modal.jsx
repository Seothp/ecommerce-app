import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import HomeIndicator from '../HomeIndicator/HomeIndicator';
import { ThemeContext } from '../../theme-context';

const style = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    boxSizing: 'border-box',
    padding: '36px 16px 44px',
    width: '375px',
    bottom: '0px',
    inset: 'initial',
    boxShadow: '0px -4px 30px rgba(0, 0, 0, 0.08)',
    border: 'none',
    borderRadius: '34px 34px 0px 0px',
  },
};

const Line = styled.div`
  position: absolute;
  top: 14px;
  right: 50%;
  transform: translateX(50%);
  width: 60px;
  height: 6px;
  background: ${(props) => props.lineColor};
  border-radius: 3px;
`;

ReactModal.setAppElement('div');
function Modal({ isOpen, onClose, children }) {
  const theme = useContext(ThemeContext);
  const lineColor = theme.gray;
  style.content.background = theme.background;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <Line lineColor={lineColor} />
      {children}
      <HomeIndicator type={theme.name} />
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
