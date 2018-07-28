import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object,
  red: PropTypes.bool
};

const defaultProps = {
  theme: newTheme
};

const fontColor = (props) =>
  props.red ? props.theme.colors.red[500] : props.theme.colors.brand.blue[500];

const insetBorderColor = (props) =>
  props.red ? props.theme.colors.red[500] : props.theme.colors.lightBlue[500];

export const TableRow = styled.tr`
  color: ${fontColor};
  height: 60px;
  ${(props) =>
    props.inset &&
    css`
      background-color: #f7f7f7;
      border-left: 2px solid ${insetBorderColor};
      & > td:first-child {
        padding-left: 38px;
      }
    `} &:hover {
    background-color: #f7f7f7;
  }
  & > th:first-child,
  & > td:first-child {
    padding-left: 26px;
  }
  & > th:last-child,
  & > td:last-child {
    padding-right: 26px;
  }
`;

export default TableRow;

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;
