import React from 'react';
import PropTypes from 'prop-types';
import { groupBy } from '../../utils';
import styled from 'styled-components';

import currentTheme from '../../themes/current';
import Currency from '../Currency/Currency';

const propTypes = {
  taxes: PropTypes.arrayOf(
    PropTypes.shape({ categories: PropTypes.arrayOf(PropTypes.string), amount: PropTypes.number })
  ),
  className: PropTypes.string,
  currency: PropTypes.string.isRequired
};

const defaultProps = {};

function TaxesTable({ taxes, className, currency }) {
  const groupedTaxes = groupBy(taxes, (tax) => tax.categories[1]);
  return (
    <table className={className}>
      <tbody>
        {Object.keys(groupedTaxes).map((category) =>
          groupedTaxes[category].map((tax, index) => (
            <tr key={category}>
              {index === 0 && <th rowSpan={groupedTaxes[category].length}>{category}</th>}
              <td>{tax.categories[2]}</td>
              <td style={{ textAlign: 'right' }}>
                <Currency value={tax.amount} currency={currency} />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

TaxesTable.propTypes = propTypes;
TaxesTable.defaultProps = defaultProps;

const StyledTaxesTable = styled(TaxesTable)`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    border: 1px solid ${(props) => props.theme.colors.gray};
    text-align: center;
    padding: 8px;
    width: 33.33333%;
  }

  th {
    font-weight: 700;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary.blue};
    text-transform: uppercase;
  }
`;

StyledTaxesTable.defaultProps = { theme: currentTheme };

export default StyledTaxesTable;
