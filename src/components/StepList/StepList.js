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
  activeStep: PropTypes.number,
  hasIntroStep: PropTypes.bool
};

const defaultProps = {
  hasIntroStep: false
};

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
`;

export default function StepList({ steps, activeStep, hasIntroStep }) {
  return (
    <StepListWrapper>
      {steps.map((name, index) => {
        const isActive = index === activeStep;
        return (
          <React.Fragment key={index}>
            <Step isActive={isActive} isDone={index < activeStep}>
              <StepNumber isActive={isActive} isDone={index < activeStep}>
                {isActive ? <IcDone /> : index + 1}
              </StepNumber>
              <StepName isActive={isActive} isDone={index < activeStep}>
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
