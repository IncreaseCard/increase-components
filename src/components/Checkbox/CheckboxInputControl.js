import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const CheckboxInputControl = styled.input.attrs({ type: 'checkbox' })`
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

CheckboxInputControl.propTypes = propTypes;
CheckboxInputControl.defaultProps = defaultProps;

export default CheckboxInputControl;
