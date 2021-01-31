import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { ThemeContext } from '../../theme-context';

const style = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    inset: 'initial',
    boxSizing: 'border-box',
    border: 'none',
    padding: 0,
    width: '170px',
    borderRadius: 8,
  },
};
const List = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.bgColor};
  &:last-child {
    border-bottom: none;
  }
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  color: ${(props) => props.textColor};
`;
ReactModal.setAppElement('div');
function Popup({
  list, isOpen, onClose,
}) {
  const theme = useContext(ThemeContext);
  const bgColor = theme.gray;
  const textColor = theme.invert;
  style.content.background = theme.main;
  const handleClick = (onClick) => {
    onClick();
    onClose();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <List>
        {list.map((item) => (
          <Item
            bgColor={bgColor}
            key={`popup-item-${item.title}`}
          >
            <StyledButton
              type="button"
              textColor={textColor}
              onClick={() => handleClick(item.onClick)}
            >
              {item.title}
            </StyledButton>
          </Item>
        ))}
      </List>
    </ReactModal>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  })).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // callbackArg: PropTypes.any,
};

Popup.defaultProps = {
  // callbackArg: null,
};

export default Popup;
