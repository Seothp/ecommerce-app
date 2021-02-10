import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Header3 from '../Typography/Header3';
import { ThemeContext } from '../../theme-context';

const StyledCategoryCard = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;
const StyledImage = styled.img`
  width: 171px;
  height: 100px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 171px;
  height: 100px;
`;
const Category = styled(Header3)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 24px;
  width: 172px;
`;

/**
 *
 * @param {object} props
 * @param {String} props.category
 * @param {String} props.imgSrc
 */
function CategoryCard({ category, imgSrc, ...attrs }) {
  const theme = useContext(ThemeContext);
  const textColor = theme.invert;
  return (
    <Card
      height={100}
      {...attrs}
    >
      <StyledCategoryCard>
        <Category as="div" color={textColor}>
          {category}
        </Category>
        <ImageWrapper>
          <StyledImage src={imgSrc} alt="category card" />
        </ImageWrapper>
      </StyledCategoryCard>
    </Card>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CategoryCard;
