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
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.lightBlueRegular};
  }
`;

InvisibleButton.propTypes = propTypes;
InvisibleButton.defaultProps = defaultProps;
export default InvisibleButton;
