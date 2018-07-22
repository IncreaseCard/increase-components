import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';
import check from 'file-loader!../../icons/check.svg';
import naturalGrow from '../../animations/naturalGrow';
import CheckboxInputControl from './CheckboxInputControl';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const CheckboxInputFill = styled.div`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: ${(props) => props.theme.colors.primary.blue};
  mask: url(${check});
  mask-size: cover;
  position: absolute;
  top: 2px;
  left: 2px;
  transform: scale(0);
  transition: transform 150ms cubic-bezier(0.55, 0.06, 0.68, 0.19);

  ${CheckboxInputControl}:checked ~ & {
    transform: scale(1);
    animation: ${naturalGrow} 250ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

CheckboxInputFill.propTypes = propTypes;
CheckboxInputFill.defaultProps = defaultProps;

export default CheckboxInputFill;
