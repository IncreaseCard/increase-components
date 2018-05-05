import styled from "styled-components";
import PropTypes from "prop-types";

import defaultTheme from "../../newTheme";

const propTypes = {
  theme: PropTypes.object,
  isActive: PropTypes.bool,
  isDone: PropTypes.bool
};

const defaultProps = {
  theme: defaultTheme,
  isActive: false,
  isDone: false
};

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 9px;
  user-select: none;

  background-color: ${props => {
    if (props.isDone) {
      return props.theme.colors.black;
    } else if (props.isActive) {
      return props.theme.colors.primary.green;
    } else {
      return props.theme.colors.transparent;
    }
  }};

  ${props =>
    props.isActive || props.isDone
      ? `
      color: ${props.theme.colors.white};
    `
      : `
      border: 1px solid ${props.theme.colors.black};
      color: ${props.theme.colors.black};
    `};
`;

StepNumber.propTypes = propTypes;
StepNumber.defaultProps = defaultProps;
StepNumber.displayName = "StepNumber";

export default StepNumber;
