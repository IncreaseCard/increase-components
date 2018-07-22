import styled from 'styled-components';

const SwitchControl = styled.input.attrs({ type: 'checkbox' })`
  height: 15px;
  width: 25px;
  opacity: 0;
  box-sizing: border-box;
  z-index: 2;
  border: 0;
  margin: 0;
`;

export default SwitchControl;
