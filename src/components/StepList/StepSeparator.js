import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = { theme: PropTypes.object };

const defaultProps = { theme: newTheme };

export const StepSeparatorBox = styled.span`
  font-size: 8px;
  max-width: 180px;
  flex: 1;
  height: calc(38px / 2);
  margin: 0 10px;
  letter-spacing: 3.5px;
  user-select: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBlue[700]};
`;

StepSeparatorBox.propTypes = propTypes;
StepSeparatorBox.defaultProps = defaultProps;

export default StepSeparatorBox;
