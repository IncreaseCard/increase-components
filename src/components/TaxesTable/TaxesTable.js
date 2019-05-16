import React from 'react';
import PropTypes from 'prop-types';
import { groupBy } from '../../utils';
import styled from 'styled-components';

import currentTheme from '../../themes/current';
import Currency from '../Currency/Currency';
import { TaxesRegions } from './TaxesRegions';

const propTypes = {
  className: PropTypes.string,
  currency: PropTypes.string.isRequired,
  language: PropTypes.string,
  taxes: PropTypes.arrayOf(
    PropTypes.shape({ categories: PropTypes.arrayOf(PropTypes.string), amount: PropTypes.number })
  )
};

const defaultProps = {};

export const ArrowDown = styled.div`
  display: inline-block;
  height: 6px;
  margin-left: 5px;
  width: 10px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiA3LjQxIj48cGF0aCBkPSJNMS40MSAwTDYgNC41OCAxMC41OSAwIDEyIDEuNDFsLTYgNi02LTZ6Ii8+PC9zdmc+);
  background-repeat: no-repeat;
  background-size: auto;
`;

function TaxesTable({ taxes, className, currency, language }) {
  if (taxes === undefined) {
    return null;
  }

  const groupedTaxes = groupBy(taxes, (tax) => tax.categories[1]);
  const groupedTaxesRowSpan = {};
  Object.keys(groupedTaxes).map((category) => {
    groupedTaxesRowSpan[category] = groupedTaxes[category].length;
    groupedTaxes[category].map((tax) => {
      if (tax['regions']) {
        groupedTaxesRowSpan[category] += Object.keys(tax['regions']).length;
      }
    });
  });

  return (
    <table className={className}>
      <tbody>
        {Object.keys(groupedTaxes).map((category) =>
          groupedTaxes[category].map((tax, index) => (
            <React.Fragment key={`${category}-${index}`}>
              <tr key={`${category}-${index}`}>
                {index === 0 && <th rowSpan={groupedTaxesRowSpan[category]}>{category}</th>}
                <td>
                  {`${tax.categories[2]} ${tax.categories[3] || ''}`}
                  {tax['regions'] !== undefined && Object.keys(tax['regions']).length !== 0 && (
                    <ArrowDown />
                  )}
                </td>
                <td style={{ textAlign: 'right' }}>
                  <Currency currency={currency} language={language} value={tax.amount} />
                </td>
              </tr>
              <TaxesRegions
                category={category}
                currency={currency}
                language={language}
                regions={tax['regions']}
              />
            </React.Fragment>
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
    font-weight: 600;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary.blue};
    text-transform: uppercase;
  }
`;

StyledTaxesTable.defaultProps = { theme: currentTheme };

export default StyledTaxesTable;
