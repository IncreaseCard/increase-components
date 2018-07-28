import styled from 'styled-components';
import PropTypes from 'prop-types';

import RadioButtonControl from './RadioButtonControl';
import newTheme from '../../themes/new';
import naturalGrow from '../../animations/naturalGrow';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const RadioButtonFill = styled.div`
  background: ${(props) => props.theme.colors.brand.blue[500]};
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  transform: scale(0);
  transition: transform 150ms cubic-bezier(0.55, 0.06, 0.68, 0.19);
  pointer-events: none;
  z-index: 1;

  ${RadioButtonControl}:checked ~ & {
    transform: scale(1);
    animation: ${naturalGrow} 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

RadioButtonFill.propTypes = propTypes;
RadioButtonFill.defaultProps = defaultProps;

export default RadioButtonFill;
