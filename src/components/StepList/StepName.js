import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultTheme from '../../themes/new';

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
  font-size: 13px;
  color: ${(props) => props.theme.colors.lightBlue[700]};
  white-space: nowrap;
`;

StepName.propTypes = propTypes;
StepName.defaultProps = defaultProps;
StepName.displayName = 'StepName';

export default StepName;
