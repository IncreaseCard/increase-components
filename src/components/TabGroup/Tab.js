import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';

export const Tab = styled.button`
  box-sizing: border-box;
  background: transparent;
  border: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid
    ${(props) => (props.active ? props.theme.colors.lightBlue[500] : 'transparent')};
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  height: calc(100% + 1px); /* 1px correction for TabGroup bottom border */
  margin-bottom: -1px;
  padding: 0 20px;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.lightBlue[500]};
  }

  * + & {
    margin-left: 20px;
  }

  ${(props) => (props.disabled ? null : `cursor: pointer;`)} ${(props) => {
    const colors = props.theme.colors;
    if (props.disabled) {
      return `color: ${colors.gray[500]};`;
    } else if (props.active) {
      return `color: ${colors.lightBlue[500]};`;
    } else {
      return `color: ${colors.brand.blue[500]};`;
    }
  }};
`;

Tab.propTypes = {
  theme: PropTypes.object
};

Tab.defaultProps = {
  theme: newTheme
};

export default Tab;
