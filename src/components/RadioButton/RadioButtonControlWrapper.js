import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const RadioButtonControlWrapper = styled.div`
  height: 15px;
  width: 15px;
  position: relative;
  margin-right: 6px;

  &::before {
    content: '';
    border: 1px solid ${(props) => props.theme.colors.brand.blue[500]};
    border-radius: 100%;
    box-sizing: border-box;
    z-index: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
`;

RadioButtonControlWrapper.propTypes = propTypes;
RadioButtonControlWrapper.defaultProps = defaultProps;

export default RadioButtonControlWrapper;
