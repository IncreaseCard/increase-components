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
  background: ${(props) => props.theme.colors.whiteTint};
  color: ${(props) => props.theme.colors.brandBlueRegular};
  border: 1px solid ${(props) => props.theme.colors.whiteTone};
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.whiteTint} 0%,
      ${(props) => props.theme.colors.whiteRegular} 100%
    );
    box-shadow: 0 2px 6px ${(props) => props.theme.colors.whiteTone};
  }
  &:active {
    background-image: none;
    background: ${(props) => props.theme.colors.whiteTone};
    border: 1px solid ${(props) => props.theme.colors.whiteShade};
    box-shadow: 0 0 2px ${(props) => props.theme.colors.whiteShade};
  }
`;

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
