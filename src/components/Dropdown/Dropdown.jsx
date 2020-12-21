import React, {
  createRef, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Descriptive from '../Typography/Descriptive';
import IconDirectionArrow from '../Icons/IconDirectionArrow';
import { ThemeContext } from '../../theme-context';

const DropdownTitle = styled.div`
  background: ${(props) => props.theme.main};
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 8px;
  height: 40px;
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 8px;
`;

const DropdownList = styled.div`
  width: ${(props) => props.width}px;
  border-bottom: 1px solid ${(props) => props.borderColor};
`;

const DropdownItem = styled.div`
  border: 1px solid ${(props) => props.borderColor};
  border-bottom: none;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  padding-right: 8px;
`;

function Dropdown({
  initialValue, list, onChange, required, width,
}) {
  const [value, setValue] = useState(initialValue);
  const [isOpened, setIsOpened] = useState(false);
  const theme = useContext(ThemeContext);
  const listRef = createRef();
  useEffect(() => {
    if (isOpened) {
      // it adds event when Dropdown opening
      document.addEventListener('click', handleClickOutside);
    }
  }, [isOpened]);
  const handleClick = (item) => {
    setValue(item);
    onChange(item);
    close();
  };
  const toggleIsOpened = () => setIsOpened(!isOpened);
  const close = () => {
    setIsOpened(false);
  };
  const handleClickOutside = (e) => {
    const isList = e.target.closest('.dropdown-list');
    const isTitle = e.target.closest('.dropdown-title');
    const shouldClose = !isList && !isTitle;
    if (shouldClose) {
      // removes event which adds in useEffect();
      document.removeEventListener('click', handleClickOutside);
      close();
    }
  };
  const borderColor = (required && value === initialValue) ? theme.error : theme.gray;
  return (
    <div className="dropdown">
      <DropdownTitle
        onClick={toggleIsOpened}
        width={width}
        className="dropdown-title"
        theme={theme}
        borderColor={borderColor}
      >
        <Descriptive color={theme.invert}>{value}</Descriptive>
        <IconDirectionArrow fill={theme.invert} />
      </DropdownTitle>
      {isOpened
        && (
        <DropdownList
          className="dropdown-list"
          width={width}
          borderColor={borderColor}
          ref={listRef}
        >
          {list.map((item) => (
            <DropdownItem
              className="dropdown-item"
              borderColor={borderColor}
              onClick={() => handleClick(item)}
              key={item}
            >
              <Descriptive color={theme.invert}>{item}</Descriptive>
            </DropdownItem>
          ))}
        </DropdownList>
        )}
    </div>
  );
}

Dropdown.propTypes = {
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  list: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  width: PropTypes.number,
};

Dropdown.defaultProps = {
  required: false,
  width: 100,
};

export default Dropdown;
