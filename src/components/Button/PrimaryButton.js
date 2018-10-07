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

const PrimaryButton = ButtonBase.extend`
  background-color: ${(props) => props.theme.colors.lightBlue[500]};
  color: ${(props) => props.theme.colors.white[100]};

  &:disabled {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.brand.blue[500]};
    color: ${(props) => props.theme.colors.brand.blue[500]};
    text-shadow: none;
  }
  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.brand.blue[500]};
  }
`;

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
