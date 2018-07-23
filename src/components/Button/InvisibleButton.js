import newTheme from '../../themes/new';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const InvisibleButton = styled.button`
  border: none;
  display: inline-block;

  &:disabled {
    opacity: 0.2;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  font-size: ${(props) => props.theme.typography.bodyFontSizes[props.primary ? 0 : 1]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[props.primary ? 0 : 1]};
  white-space: nowrap;

  background-color: transparent;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  color: ${(props) => props.theme.colors.secondary.blue};
  padding: 0;
  margin: 6px 20px;

  &:hover:not([disabled]) {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary.green};
  }
`;

InvisibleButton.propTypes = propTypes;

InvisibleButton.defaultProps = defaultProps;

export default InvisibleButton;
