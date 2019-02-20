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

const BlueButton = styled(ButtonBase)`
  background: ${(props) => props.theme.colors.lightBlueTint};
  color: ${(props) => props.theme.colors.whiteRegular};
  border: 1px solid ${(props) => props.theme.colors.lightBlueTone};
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.lightBlueTone} 0%,
      ${(props) => props.theme.colors.lightBlueTint} 100%
    );
    box-shadow: 0 2px 6px ${(props) => props.theme.colors.lightBlueShade};
  }
  &:active {
    background-image: none;
    background: ${(props) => props.theme.colors.lightBlueTone};
    border: 1px solid ${(props) => props.theme.colors.lightBlueShade};
  }
`;

BlueButton.propTypes = propTypes;
BlueButton.defaultProps = defaultProps;

BlueButton.displayName = 'BlueButton';

export default BlueButton;
