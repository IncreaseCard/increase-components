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

const RedButton = styled(ButtonBase)`
  background: ${(props) => props.theme.colors.redRegular};
  color: ${(props) => props.theme.colors.whiteRegular};
  border: 1px solid ${(props) => props.theme.colors.redShade};
  &:hover {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.redShade} 0%,
      ${(props) => props.theme.colors.redRegular} 100%
    );
    box-shadow: 0 2px 6px ${(props) => props.theme.colors.redShade};
  }
  &:active {
    background-image: none;
    background: ${(props) => props.theme.colors.redShade};
    border: 1px solid ${(props) => props.theme.colors.redShade};
  }
`;

RedButton.propTypes = propTypes;
RedButton.defaultProps = defaultProps;

RedButton.displayName = 'RedButton';

export default RedButton;
