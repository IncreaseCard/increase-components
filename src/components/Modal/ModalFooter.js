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
  margin: ${(props) => (props.fullWidthActionButtons ? '30px 0 0 0' : '15px 20px')};
  ${(props) => {
    return props.fullWidthActionButtons
      ? `
        & > * {
          flex-grow: 1;
          border: 1px solid white;
        }
        & > *:first-child {
          border-radius: 0 0 0 3px;
        }
        & > *:last-child {
          border-radius: 0 0 3px 0;
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
