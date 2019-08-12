import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  text-align: ${(props) => props.align};
  overflow-wrap: break-word;
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  font-weight: 400;
  &.scrollable {
    overflow-y: auto;
    max-height: 60vh;
  }
  & p {
    margin: 0;
  }
`;

const ModalContent = ({ align, children, scrollable }) => {
  return (
    <Container align={align} className={scrollable && 'scrollable'}>
      {children}
    </Container>
  );
};

export default ModalContent;
