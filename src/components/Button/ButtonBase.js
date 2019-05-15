import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 600;
  border: none;
  height: 40px;
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  padding: 0 20px;
  white-space: nowrap;
  border-radius: 3px;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
`;

ButtonBase.propTypes = propTypes;
ButtonBase.defaultProps = defaultProps;

export default ButtonBase;
