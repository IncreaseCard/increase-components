import styled from 'styled-components';

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #3b86ff;
  text-decoration: underline;
  outline: none;
  cursor: pointer;

  :disabled {
    color: #a3a3a3;
  }
`;

export default LinkButton;
