import React from 'react';
import PropTypes from 'prop-types';
import icDone from 'material-design-icons/action/svg/production/ic_done_24px.svg';

import Step from './Step';
import StepNumber from './StepNumber';
import StepName from './StepName';
import StepSeparator from './StepSeparator';
import styled from 'styled-components';

const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number
};

const defaultProps = {};

const IcDone = styled.div`
  mask: url(${icDone});
  background-color: white;
  height: 24px;
  width: 24px;
`;

const StepListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

function StepList({ steps, activeStep }) {
  return (
    <StepListWrapper>
      {steps.map((name, index) => {
        const isActive = index === activeStep;
        const isDone = index < activeStep;
        return (
          <React.Fragment key={index}>
            <Step isActive={isActive} isDone={isDone}>
              <StepNumber isActive={isActive} isDone={isDone}>
                {isDone ? <IcDone /> : index + 1}
              </StepNumber>
              <StepName isActive={isActive} isDone={isDone}>
                {name}
              </StepName>
            </Step>
            {index < steps.length - 1 && <StepSeparator />}
          </React.Fragment>
        );
      })}
    </StepListWrapper>
  );
}

StepList.propTypes = propTypes;
StepList.defaultProps = defaultProps;

export default StepList;
