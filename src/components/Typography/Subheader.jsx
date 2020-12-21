import styled from 'styled-components';

const Subheader = styled.div`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Subheader;
