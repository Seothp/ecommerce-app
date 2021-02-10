// /* eslint-disable */
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FilterListIcon from './FilterIcons/FilterListIcon';
import FilterTwoArrowsIcon from './FilterIcons/FilterTwoArrowsIcon';
import FilterVMGridIcon from './FilterIcons/FilterVMGridIcon';
import FilterVMListIcon from './FilterIcons/FilterVMListIcon';
import HelperText from '../Typography/HelperText';
import { ThemeContext } from '../../theme-context';

const FilterMenuWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: ${(props) => props.width}px;
  height: 24px;
`;
const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 62px;
`;
const FilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
`;

/**
 *
 * @param {object} props
 * @param {'grid' | 'list'} props.grid
 * @param {String} props.sortBy
 * @param {Function} props.onGridChange
 * @param {Function} props.onDirectionChange
 * @param {Function} props.onOpenFilters
 * @param {Function} props.onSortByChange
 * @param {Number} props.width
 */
function FilterMenu({
  grid, sortBy, onGridChange, onDirectionChange, onOpenFilters, width, onSortByChange, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const color = theme.invert;
  const isGrid = grid === 'grid';
  return (
    <FilterMenuWrapper
      className="filter-menu"
      width={width}
      {...attrs}
    >
      <FiltersWrapper
        className="filter-filters"
        onClick={onOpenFilters}

      >
        <FilterListIcon fill={color} />
        <HelperText
          color={color}
          style={{ marginLeft: 11 }}
        >
          Filters
        </HelperText>
      </FiltersWrapper>
      <FilterSortWrapper className="filter-sortby">
        <div
          className="direction-icon-wrapper"
          onClick={onDirectionChange}
        >
          <FilterTwoArrowsIcon fill={color} />
        </div>
        <HelperText
          color={color}
          style={{ marginLeft: 11 }}
          onClick={onSortByChange}
        >
          {sortBy}
        </HelperText>
      </FilterSortWrapper>
      <div
        className="filter-gridtype"
        onClick={onGridChange}
      >
        {isGrid
          ? <FilterVMGridIcon fill={color} />
          : <FilterVMListIcon fill={color} />}
      </div>
    </FilterMenuWrapper>
  );
}

FilterMenu.propTypes = {
  grid: PropTypes.oneOf([
    'grid',
    'list',
  ]).isRequired,
  onGridChange: PropTypes.func.isRequired,
  onDirectionChange: PropTypes.func.isRequired,
  onOpenFilters: PropTypes.func.isRequired,
  onSortByChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  width: PropTypes.number,
};

FilterMenu.defaultProps = {
  width: 343,
};

export default FilterMenu;
