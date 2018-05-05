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

export const StepName = styled.span`
  font-size: 15px;
  ${props =>
    props.isActive &&
    `
      color: ${props.theme.colors.primary.green};
      font-weight: bold;
    `};
`;

StepName.propTypes = propTypes;
StepName.defaultProps = defaultProps;
StepName.displayName = "StepName";

export default StepName;
