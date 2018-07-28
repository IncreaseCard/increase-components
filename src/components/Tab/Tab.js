import PropTypes from "prop-types";
import styled from "styled-components";

import newTheme from "../../themes/new";

export const Tab = styled.button`
  ${props => {
    const colors = props.theme.colors;
    if (props.disabled) {
      return `color: ${colors.gray[500]};`;
    } else if (props.active) {
      return `color: ${colors.lightBlue[500]};`;
    } else {
      return `color: ${colors.black[700]};`;
    }
  }}
  background-color: ${props => props.theme.colors.white[100]};
  border: 1px solid ${props => props.theme.colors.gray[500]};
  ${props => (props.disabled ? null : `cursor: pointer;`)}
  font-size: ${props => props.theme.typography.bodyFontSizes[1]};
  line-height: ${props => props.theme.typography.bodyLineHeights[1]};
  padding: 4px 12px;

  * + & {
    border-left: 0;
  }
`;

Tab.propTypes = {
  theme: PropTypes.object
};

Tab.defaultProps = {
  theme: newTheme
};

export default Tab;
