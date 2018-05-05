import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  isActive: PropTypes.bool,
  isDone: PropTypes.bool
};

const defaultProps = {
  isActive: false,
  isDone: false
};

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.isDone ? "0.3" : props.isActive ? "1" : "0.2")};
`;

Step.displayName = "Step";

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;

export default Step;
