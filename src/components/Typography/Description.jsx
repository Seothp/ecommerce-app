import styled from 'styled-components';

const Description = styled.div`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.color || '#FFFFFF'};
  letter-spacing: -0.15px;
`;

export default Description;
