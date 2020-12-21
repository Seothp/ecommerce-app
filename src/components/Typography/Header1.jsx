import styled from 'styled-components';

const Header1 = styled.h1`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 40px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Header1;
