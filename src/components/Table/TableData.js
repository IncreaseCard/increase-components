import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  number: PropTypes.bool,
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme,
  number: false
};

export const TableData = styled.td`
  padding: 20px 10px;
  text-align: ${(props) => (props.number ? 'right' : 'left')};
  display: ${(props) => (props.inline ? 'flex' : 'table-cell')};
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`;

export default TableData;

TableData.propTypes = propTypes;
TableData.defaultProps = defaultProps;
