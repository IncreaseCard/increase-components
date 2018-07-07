import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object,
  number: PropTypes.bool
};

const defaultProps = {
  theme: newTheme,
  number: false
};

const TableData = styled.td`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  padding: 20px 10px;

  ${(props) =>
    props.number
      ? css`
          text-align: right;
        `
      : css`
          text-align: left;
        `};
`;

export default TableData;

TableData.propTypes = propTypes;
TableData.defaultProps = defaultProps;