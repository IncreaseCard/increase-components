import styled from "styled-components";
import PropTypes from 'prop-types';
import { ButtonBase } from './ButtonBase';
import newTheme from '../../themes/new';

const propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const SecondaryButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.colors.gray[300]};
  border: 1px solid ${(props) => props.theme.colors.gray[500]};
  color: ${(props) => props.theme.colors.black[700]};

  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.paleGray[300]};
  }
  &:disabled {
    border: 1px solid ${(props) => props.theme.colors.gray[700]};
    color: ${(props) => props.theme.colors.gray[700]};
  }
`;

SecondaryButton.propTypes = propTypes;
SecondaryButton.defaultProps = defaultProps;

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
