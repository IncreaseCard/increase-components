import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

export const Table = styled.table`
  border-collapse: collapse;
`;

export default Table;

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
