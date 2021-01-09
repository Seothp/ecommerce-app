import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../theme-context';

const StyledCard = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.main};
`;

function Card({
  type, width, height, children, ...attrs
}) {
  const theme = useContext(ThemeContext);
  return (
    <StyledCard
      className="product-card"
      theme={theme}
      width={width}
      height={height}
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
