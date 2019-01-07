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
      return props.theme.colors.lightBlueShade;
    } 
      return props.theme.colors.transparent;
    
  }};

  ${(props) =>
    props.isDone || props.isActive
      ? `
      color: ${props.theme.colors.whiteRegular};
    `
      : `
      border: 1px solid ${props.theme.colors.lightBlueShade};
      color: ${props.theme.colors.lightBlueShade};
    `};
`;

StepNumber.propTypes = propTypes;
StepNumber.defaultProps = defaultProps;
StepNumber.displayName = 'StepNumber';

export default StepNumber;
