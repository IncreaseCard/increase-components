import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import increaseIsotype from '../../icons/increase-isotype.svg';

const propTypes = {
  appName: PropTypes.string,
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

const ApplicationName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  > * {
    margin-right: 15px;
  }
`;

function ApplicationHeader({ className, appName, children }) {
  return (
    <div className={className}>
      <ApplicationName>
        <img src={increaseIsotype} style={{ height: '40px' }} />
        {appName}
      </ApplicationName>
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
  box-sizing: border-box;
  width: 100%;
  padding: 10px 100px;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
`;
