import React from "react";
import PropTypes from "prop-types";

import Step from "./Step";
import StepNumber from "./StepNumber";
import StepName from "./StepName";
import StepSeparator from "./StepSeparator";
import styled from "styled-components";

const propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
  hasIntroStep: PropTypes.bool
};

const defaultProps = {
  hasIntroStep: false
};

const StepListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export default function StepList({ steps, activeStep, hasIntroStep }) {
  const introStep = steps[0];
  const numberedSteps = (hasIntroStep && steps.slice(1)) || steps;
  const activeNumberedStep = activeStep - (hasIntroStep ? 1 : 0);
  return (
    <StepListWrapper>
      {hasIntroStep && (
        <React.Fragment>
          <Step isActive={activeStep === 0} isDone={0 < activeStep}>
            <StepName isActive={activeStep === 0}>{introStep}</StepName>
          </Step>
          <StepSeparator />
        </React.Fragment>
      )}
      {numberedSteps.map((name, index) => (
        <React.Fragment key={index}>
          <Step
            isActive={index === activeNumberedStep}
            isDone={index < activeNumberedStep}
          >
            <StepNumber
              isActive={index === activeNumberedStep}
              isDone={index < activeNumberedStep}
            >
              {index + 1}
            </StepNumber>
            <StepName
              isActive={index === activeNumberedStep}
              isDone={index < activeNumberedStep}
            >
              {name}
            </StepName>
          </Step>
          {index < numberedSteps.length - 1 && <StepSeparator />}
        </React.Fragment>
      ))}
    </StepListWrapper>
  );
}

StepList.propTypes = propTypes;
StepList.defaultProps = defaultProps;
