import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';

const StyledHandle = styled.div`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 22px;
  height: 22px;
  margin-left: -11px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  left: ${(props) => props.percent}%;
  /* top: 50%;
  transform: translateY(-50%); */
  bottom: 1px;
`;
function FilterRangeHandle({
  handle: { id, percent },
  getHandleProps,
}) {
  const theme = useContext(ThemeContext);
  const bgColor = theme.primary;
  return (
    <StyledHandle
      className="handle"
      percent={percent}
      {...getHandleProps(id)}
      bgColor={bgColor}
    />
  );
}

FilterRangeHandle.propTypes = {
  getHandleProps: PropTypes.func.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};

export default FilterRangeHandle;
