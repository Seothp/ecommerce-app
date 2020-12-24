import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../theme-context';

const StyledTrack = styled.div`
  position: absolute;
  height: 3px;
  /* display: flex; */
  /* top: 50%;
  transform: translateY(-50%); */
  bottom: 10px;
  width: ${(props) => props.end - props.start}%;
  left: ${(props) => props.start}%;
  background-color: ${(props) => props.bgColor};
`;

function Track({ source, target, getTrackProps }) {
  const theme = useContext(ThemeContext);
  const bgColor = theme.primary;
  return (
    <StyledTrack
      start={source.percent}
      end={target.percent}
      bgColor={bgColor}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    percent: PropTypes.number,
  }).isRequired,
  target: PropTypes.shape({
    percent: PropTypes.number,
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
};

export default Track;
