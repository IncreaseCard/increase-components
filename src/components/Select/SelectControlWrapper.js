import PropTypes from 'prop-types';
import styled from 'styled-components';
import dropdownMore from 'material-design-icons/navigation/svg/production/ic_expand_more_18px.svg';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const SelectControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 32px;
  position: relative;
  &::after {
    content: '';
    mask: url(${dropdownMore});
    mask-position: center;
    background-color: ${(props) => props.theme.colors.brandBlueRegular};
    pointer-events: none;
    width: 12px;
    height: 8px;
    position: absolute;
    right: 10px;
    bottom: 12px;
  }
`;

SelectControlWrapper.propTypes = propTypes;
SelectControlWrapper.defaultProps = defaultProps;

export default SelectControlWrapper;
