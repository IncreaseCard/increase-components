import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';
import SwitchControl from './SwitchControl';

const propTypes = {
  theme: PropTypes.object,
  value: PropTypes.bool
};

const defaultProps = {
  value: false,
  theme: newTheme
};

const SwitchToggle = styled.div`
  height: 11px;
  width: 11px;
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: ${(props) =>
    props.value ? props.theme.colors.white[100] : props.theme.colors.gray[300]};
  border-radius: 100%;
  transition: transform 200ms cubic-bezier(0.22, 0.61, 0.36, 1);
  pointer-events: none;
  z-index: 1;

  ${SwitchControl}:checked ~ & {
    transform: translateX(10px);
    transition: transform 200ms cubic-bezier(0.22, 0.61, 0.36, 1);
  }
`;

SwitchToggle.propTypes = propTypes;
SwitchToggle.defaultProps = defaultProps;

export default SwitchToggle;
