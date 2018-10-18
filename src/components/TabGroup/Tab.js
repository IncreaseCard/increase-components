import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import newTheme from '../../themes/new';

export const Tab = styled.button`
  ${(props) => {
    const colors = props.theme.colors;
    if (props.disabled) {
      return `color: ${colors.gray[500]};`;
    } else if (props.active) {
      return `color: ${colors.lightBlue[500]};`;
    } else {
      return `color: ${colors.brand.blue[500]};`;
    }
  }}
  box-sizing: border-box;
  background: transparent;
  border: none;
  ${(props) => (props.disabled ? null : `cursor: pointer;`)}
  font-size: ${(props) => props.theme.typography.bodyFontSizes[0]};
  line-height: ${(props) => props.theme.typography.bodyLineHeights[0]};
  height: 100%;
  padding: 0 20px;

  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.lightBlue[500]};
  }
  * + & {
    margin-left: 20px;
  }

  ${(props) =>
    props.active
      ? css`
          border-bottom: 2px solid ${props.theme.colors.lightBlue[500]};
        `
      : null}
`;

Tab.propTypes = {
  theme: PropTypes.object
};

Tab.defaultProps = {
  theme: newTheme
};

export default Tab;
