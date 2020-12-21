import styled from 'styled-components';

const Descriptive = styled.div`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Descriptive;
