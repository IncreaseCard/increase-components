import React from 'react';
import styled from 'styled-components';
import Currency from '../Currency/Currency';
const InsetTableData = styled.td`
  border: 1px black inset;
  background-color: rgba(0, 0, 0, 0.25);
`;

export function TaxesRegions({ regions, currency, language }) {
  let regions_table = null;
  if (regions !== undefined) {
    regions_table = Object.keys(regions).map((name, index) => (
      <tr key={index}>
        <InsetTableData>{name}</InsetTableData>
        <InsetTableData style={{ textAlign: 'right' }}>
          <Currency currency={currency} language={language} value={regions[name]} />
        </InsetTableData>
      </tr>
    ));
  }
  return regions_table;
}
