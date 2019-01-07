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
      <TaxesTable currency="USD" taxes={taxes} />
    </div>
  ))
  .add('emptyTaxes', () => <TaxesTable currency="USD" taxes={[]} />)
  .add('undefinedTaxes', () => <TaxesTable currency="USD" />);
