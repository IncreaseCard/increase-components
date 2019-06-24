import React from 'react';
import styled from 'styled-components';

const alignments = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
};
const Container = styled.div`
  display: flex;
  justify-content: ${(props) => alignments[props.align]};
  & > * {
    flex-grow: ${(props) => (props.fullWidthActionButtons ? 1 : 'unset')};
    justify-content: center;
  }
  margin: ${(props) => (props.fullWidthActionButtons ? '30px 0 0 0' : '15px 20px')};
  ${(props) => {
    return props.fullWidthActionButtons
      ? `
        & > * {
          border: 1px solid white;
        }
        & > *:first-child {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          border-bottom-left-radius: 3px;
        }
        & > *:last-child {
          border-top-left-radius: 0px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 3px;
          border-bottom-left-radius: 0px;
        }`
      : '';
  }};
`;

const FooterContainer = ({ align, fullWidthActionButtons = false, children }) => {
  return (
    <Container align={align} fullWidthActionButtons={fullWidthActionButtons}>
      {children}
    </Container>
  );
};

export default FooterContainer;
