import React from 'react';
import { storiesOf } from '@storybook/react';
import TaxesTable from './TaxesTable';

const taxes = [
  { categories: ['Impuestos', 'Impuestos', 'IVA'], amount: 0 },
  { categories: ['Impuestos', 'Retenciones', 'IRF'], amount: 12200 },
  { categories: ['Impuestos', 'Retenciones', 'IIBB'], amount: 12200 }
];

storiesOf('TaxesTable', module)
  .add('ecuador', () => (
    <div style={{ width: '1000px' }}>
      <TaxesTable taxes={taxes} currency="USD" />
    </div>
  ))
  .add('emptyTaxes', () => <TaxesTable taxes={[]} currency="USD" />)
  .add('undefinedTaxes', () => <TaxesTable currency="USD" />);
