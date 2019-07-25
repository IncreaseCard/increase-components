import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading/Heading';

const Container = styled.div`
  margin-bottom: 1em;
  text-align: ${(props) => props.align};
`;

const ModalHeader = ({ align, children }) => {
  return (
    <Container align={align}>
      <Heading size={4}>{children}</Heading>
    </Container>
  );
};

export default ModalHeader;
