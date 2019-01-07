import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';

export const Tab = styled.button`
  box-sizing: border-box;
  background: transparent;
  border: none;
  border-top: 4px solid transparent;
  border-bottom: 4px solid
    ${(props) => (props.active ? props.theme.colors.lightBlueRegular : 'transparent')};
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  height: calc(100% + 1px); /* 1px correction for TabGroup bottom border */
  margin-bottom: -1px;
  margin: 0;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.lightBlueRegular};
  }

  * + & {
    margin-left: 15px;
  }

  ${(props) => (props.disabled ? null : `cursor: pointer;`)} ${(props) => {
    const colors = props.theme.colors;
    if (props.disabled) {
      return `color: ${colors.grayShade};`;
    } else if (props.active) {
      return `color: ${colors.lightBlueRegular};`;
    } 
      return `color: ${colors.brandBlueRegular};`;
    
  }};
`;

Tab.propTypes = {
  theme: PropTypes.object
};

Tab.defaultProps = {
  theme: newTheme
};

export default Tab;
