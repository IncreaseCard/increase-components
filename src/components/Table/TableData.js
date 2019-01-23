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
  border-bottom: 1px solid ${(props) => props.theme.colors.grayShade};
  padding: 20px 10px;
  text-align: ${(props) => (props.number ? 'right' : 'left')};
`;

export default TableData;

TableData.propTypes = propTypes;
TableData.defaultProps = defaultProps;
