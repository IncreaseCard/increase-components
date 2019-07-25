import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-y: auto;
  text-align: ${(props) => props.align};
  overflow-wrap: break-word;
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  font-weight: 400;
  & p {
    margin: 0;
  }
`;

const ModalContent = ({ align, children }) => {
  return <Container align={align}>{children}</Container>;
};

export default ModalContent;
