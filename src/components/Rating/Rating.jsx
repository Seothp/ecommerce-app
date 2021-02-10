import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconStar from '../Icons/IconStar';
import { ThemeContext } from '../../theme-context';

const RatingText = styled.span`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  margin-left: 2px;
  color: ${(props) => props.color};
`;
const RatingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 14px;
`;
const StarsWrapper = styled.div`
  height: 14px;
  display: flex;
  align-items: center;
`;

/**
 *
 * @param {object} props
 * @param {Number} props.rating
 * @param {Number} props.starWidth
 * @param {Number} props.starHeight
 * @param {Number} props.countOfVotes
 */
function Rating({
  rating, starWidth, starHeight, countOfVotes, ...attrs
}) {
  const theme = useContext(ThemeContext);
  const stars = Array.from(
    { length: 5 },
    (_, i) => ((i + 1) * 2 < rating ? { isActive: true, id: i } : { isActive: false, id: i }),
  );
  return (
    <RatingWrapper className="rating" {...attrs}>
      <StarsWrapper className="stars">
        {
          stars.map((star) => (
            <IconStar
              key={star.id}
              isActive={star.isActive}
              width={starWidth}
              height={starHeight}
              style={{ display: 'block' }}
            />
          ))
        }
      </StarsWrapper>
      <RatingText color={theme.gray}>
        (
        {countOfVotes}
        )
      </RatingText>
    </RatingWrapper>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  starWidth: PropTypes.number,
  starHeight: PropTypes.number,
};

Rating.defaultProps = {
  starWidth: 13,
  starHeight: 12,
};

export default Rating;
