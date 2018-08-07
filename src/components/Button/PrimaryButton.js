import newTheme from '../../themes/new';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  disabled: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const PrimaryButton = styled.button`
  border: none;
  display: inline-block;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.2;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  white-space: nowrap;

  background-color: ${(props) => props.theme.colors.lightBlue[500]};
  border-radius: 3px;
  color: ${(props) => props.theme.colors.white[100]};
  padding: 6px 20px;

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
