import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  logoUrl: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {};

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  & > *:not(:last-child) {
    border-right: 1px solid #d8d8d8;
  }

  & > * {
    padding: 0 12px;
  }

  & > *:last-child {
    padding-right: 0;
  }
`;

function ApplicationHeader({ className, logoUrl, children }) {
  return (
    <div className={className}>
      <img src={logoUrl} style={{ height: '40px' }} />
      <Actions>{children}</Actions>
    </div>
  );
}

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default styled(ApplicationHeader)`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 100px;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
`;
