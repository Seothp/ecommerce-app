import React from 'react';
import PropTypes from 'prop-types';

import FilterColor from './FilterColor';

/**
 *
 * @param {object} props - props of component
 * @param {Array.<{colorValue: String, isActive: boolean}>} props.colors
 */

function FilterColors({ colors, onChange }) {
  return (
    <div className="colors">
      {colors.map((color) => (
        <div className="color" key={color.colorValue}>
          <FilterColor color={color} onChange={onChange} />
        </div>
      ))}
    </div>
  );
}

FilterColors.propTypes = {
  onChange: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape({
    colorValue: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  })).isRequired,
};

export default FilterColors;
