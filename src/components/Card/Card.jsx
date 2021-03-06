import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledCard = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
`;

/**
 *
 * @param {object} props
 * @param {String} props.type
 * @param {Number} props.width
 * @param {Number} props.height
 * @param {Node} props.children
 */
function Card({
  type, width, height, children, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const borderRadius = type === 'line' ? '8px' : 'none';
  const background = type === 'line' ? theme.main : 'none';
  return (
    <StyledCard
      className="product-card"
      background={background}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...attrs}
    >
      {children}
    </StyledCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['line', 'module']),
  width: PropTypes.number,
  height: PropTypes.number,
};

Card.defaultProps = {
  type: 'line',
  width: 343,
  height: 104,
};

export default Card;
