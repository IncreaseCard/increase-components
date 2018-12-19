import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  width: 38px;

  > *:not(:last-child) {
    margin-bottom: 6px;
  }
`;

Step.displayName = 'Step';

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;

export default Step;
