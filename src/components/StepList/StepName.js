import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultTheme from '../../themes/new';

const propTypes = {
  isActive: PropTypes.bool,
  isDone: PropTypes.bool,
  theme: PropTypes.object
};

const defaultProps = {
  theme: defaultTheme,
  isActive: false,
  isDone: false
};

export const StepName = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.lightBlueShade};
  white-space: nowrap;
`;

StepName.propTypes = propTypes;
StepName.defaultProps = defaultProps;
StepName.displayName = 'StepName';

export default StepName;
