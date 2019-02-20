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

const GreenButton = styled(ButtonBase)`
  background: ${(props) => props.theme.colors.brandGreenTint};
  color: ${(props) => props.theme.colors.darkBlueShade};
  border: 1px solid ${(props) => props.theme.colors.brandGreenTone};
  &:hover {
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.brandGreenTone} 0%,
      ${(props) => props.theme.colors.brandGreenTint} 100%
    );
    box-shadow: 0 2px 6px ${(props) => props.theme.colors.brandGreenShade};
  }
  &:active {
    background: ${(props) => props.theme.colors.brandGreenTone};
    border: 1px solid ${(props) => props.theme.colors.brandGreenShade};
  }
`;

GreenButton.propTypes = propTypes;
GreenButton.defaultProps = defaultProps;

GreenButton.displayName = 'GreenButton';

export default GreenButton;
