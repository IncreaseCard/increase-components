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
  padding: ${(props) => (props.fullWidthActionButtons ? '30px 0 0 0' : '15px 20px')};
  & button:not(:last-child) {
    margin-right: 0.5rem;
  }
  ${(props) => {
    return props.fullWidthActionButtons
      ? `
        margin: 1px;
        & button:not(:last-child) {
          margin-right: 1px;
        }
        & > * {
          flex-grow: 1;
        }
        & > *:first-child {
          border-radius: 0 0 0 3px;
          border-right: 0;
          margin: 0;
        }
        & > *:last-child {
          border-radius: 0 0 3px 0;
        }`
      : 'margin-right: 4px;';
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
