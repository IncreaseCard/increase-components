import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonBase } from './ButtonBase';
import newTheme from '../../themes/new';

const propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  theme: PropTypes.object
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const InvisibleButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.lightBlueRegular};
  border: 1px solid transparent;
  position: relative;
  &:hover {
    background-color: ${(props) => props.theme.colors.whiteTint};
  }
  &:hover::after {
    border-bottom: 2px solid ${(props) => props.theme.colors.brandGreenRegular};
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 8px;
  }
`;

InvisibleButton.propTypes = propTypes;
InvisibleButton.defaultProps = defaultProps;
export default InvisibleButton;
