import styled from 'styled-components';

const HelperText = styled.div`
  margin: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${(props) => props.color || '#FFFFFF'};
`;

export default HelperText;
