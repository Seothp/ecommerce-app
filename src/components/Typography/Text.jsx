import styled from 'styled-components';

const Text = styled.div`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default Text;
