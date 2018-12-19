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

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 13px;
  user-select: none;

  background-color: ${(props) => {
    if (props.isDone || props.isActive) {
      return props.theme.colors.lightBlue[700];
    } else {
      return props.theme.colors.transparent;
    }
  }};

  ${(props) =>
    props.isDone || props.isActive
      ? `
      color: ${props.theme.colors.white[100]};
    `
      : `
      border: 1px solid ${props.theme.colors.lightBlue[700]};
      color: ${props.theme.colors.lightBlue[700]};
    `};
`;

StepNumber.propTypes = propTypes;
StepNumber.defaultProps = defaultProps;
StepNumber.displayName = 'StepNumber';

export default StepNumber;
