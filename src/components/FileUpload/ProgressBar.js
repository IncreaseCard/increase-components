import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalBar = styled.div`
  height: 2px;
  margin: 10px 0 10px 0;
  background-color: #a3a3a3;
`;

const Progress = styled.hr`
  height: 2px;
  margin: 10px 0 10px 0;
  border: 0;
  background-color: #00dd00;
`;

function ProgressBar({ progress }) {
  return (
    <TotalBar>
      <Progress align="left" width={`${progress}%`} />
    </TotalBar>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
