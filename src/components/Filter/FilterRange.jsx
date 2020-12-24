import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Slider, Handles, Tracks } from 'react-compound-slider';

import { ThemeContext } from '../../theme-context';
import Descriptive from '../Typography/Descriptive';
import FilterRangeHandle from './FilterRangeHandle';
import Track from './FilterRangeTrack';

const StyledSlider = styled(Slider)`
  position: relative;
  width: 343px;
  height: 40px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const StyledRail = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.bgColor};
`;
const StartValue = styled(Descriptive)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${(props) => props.color};
`;
const EndValue = styled(Descriptive)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${(props) => props.color};
`;
function FilterRange({ start, end, onUpdate }) {
  const theme = useContext(ThemeContext);
  const [values, setValues] = useState({ start, end });
  const handleUpdate = (values) => {
    onUpdate();
    setValues({
      start: values[0],
      end: values[1],
    });
  };
  const bgColor = theme.gray;
  const color = theme.invert;
  return (
    <StyledSlider
      domain={[start, end]}
      values={[start, end]}
      step={1}
      mode={2}
      onUpdate={handleUpdate}
    >
      <StartValue
        className="slider-start-value"
        color={color}
      >
        $
        {values.start}
      </StartValue>
      <EndValue
        className="slider-end-value"
        color={color}
      >
        $
        {values.end}
      </EndValue>
      <StyledRail bgColor={bgColor} />
      <Handles>
        {
          ({ handles, getHandleProps }) => (
            <div className="slider-handlers">
              {handles.map((handle) => (
                <FilterRangeHandle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )
        }
      </Handles>
      <Tracks
        right={false}
        left={false}
      >
        {({ tracks, getTrackProps }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
    </StyledSlider>
  );
}

FilterRange.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  onUpdate: PropTypes.func,
};

FilterRange.defaultProps = {
  onUpdate: () => {},
};

export default FilterRange;
