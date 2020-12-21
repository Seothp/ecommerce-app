import styled from 'styled-components';

const Header2 = styled.h2`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Header2;
