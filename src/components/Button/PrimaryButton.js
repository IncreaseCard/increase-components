import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';
import { ButtonBase } from './ButtonBase';

const propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const PrimaryButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.lightBlueRegular};
  color: ${(props) => props.theme.colors.whiteRegular};

  &:disabled {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.brandBlueRegular};
    color: ${(props) => props.theme.colors.brandBlueRegular};
    text-shadow: none;
  }
  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.brandBlueRegular};
  }
`;

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
