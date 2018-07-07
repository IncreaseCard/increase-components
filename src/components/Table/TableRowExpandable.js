import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import TableRow from './TableRow';
import Expandable from './Expandable';
import newTheme from '../../themes/new';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapse: PropTypes.node
};

const defaultProps = {};

const Wrapper = TableRow.extend`
  height: 60px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  & > th:first-child,
  & > td:first-child {
    padding-left: 38px;
  }

  & > th::before {
    content: '';
    position: absolute;
    left: 12px;
    bottom: 24px;
    background-size: contain;
    display: inline-block;
    height: 16px;
    width: 16px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTc5MiIg
aGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53
My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMTUyIDg5NnEwIDI2LTE5IDQ1bC00NDggNDQ4cS0x
OSAxOS00NSAxOXQtNDUtMTktMTktNDV2LTg5NnEwLTI2IDE5LTQ1dDQ1LTE5IDQ1IDE5bDQ0OCA0
NDhxMTkgMTkgMTkgNDV6Ii8+PC9zdmc+);
    ${(props) =>
      props.expanded &&
      css`
        transform: rotate(90deg);
      `};
  }
`;

Wrapper.propTypes = { expanded: PropTypes.bool, theme: PropTypes.object };
Wrapper.defaultProps = { expanded: false, theme: newTheme };

export default function TableRowExpandable({ children, collapse, ...other }) {
  return (
    <Expandable>
      {(expanded, toggleExpand) => (
        <React.Fragment>
          <Wrapper expanded={expanded} onClick={toggleExpand} {...other}>
            {children}
          </Wrapper>
          {expanded && collapse}
        </React.Fragment>
      )}
    </Expandable>
  );
}

TableRowExpandable.propTypes = propTypes;
TableRowExpandable.defaultProps = defaultProps;
