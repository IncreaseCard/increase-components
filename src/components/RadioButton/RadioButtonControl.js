import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  checked: PropTypes.bool,
  readOnly: PropTypes.bool
};

const defaultProps = {
  checked: false
};

const RadioButtonControl = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 2;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

RadioButtonControl.propTypes = propTypes;
RadioButtonControl.defaultProps = defaultProps;

export default RadioButtonControl;
