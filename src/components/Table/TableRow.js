import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  red: PropTypes.bool,
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

const fontColor = (props) =>
  props.red ? props.theme.colors.redRegular : props.theme.colors.brandBlueRegular;

const insetBorderColor = (props) =>
  props.red ? props.theme.colors.redRegular : props.theme.colors.lightBlueRegular;

export const TableRow = styled.tr`
  color: ${fontColor};
  border-bottom: 1px solid ${(props) => (props.theme.colors.brandBlueRegular)};
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
`;

export default TableRow;

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;
