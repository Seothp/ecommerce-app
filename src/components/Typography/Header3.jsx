import styled from 'styled-components';

const Header3 = styled.h3`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Header3;
