import styled from 'styled-components';

const Disabled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.5;
  background: ${(props) => props.disabledBgColor};
`;

export default Disabled;
