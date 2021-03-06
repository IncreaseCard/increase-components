import React from 'react';
import { storiesOf } from '@storybook/react';
import TaxesTable from './TaxesTable';

const taxes = [
  { categories: ['Impuestos', 'Impuestos', 'IVA', '10,5%'], amount: 120 },
  { categories: ['Impuestos', 'Impuestos', 'IVA', '21,0%'], amount: 300 },
  { categories: ['Impuestos', 'Retenciones', 'IRF'], amount: 12200 },
  { categories: ['Impuestos', 'Retenciones', 'IIBB'], amount: 12200 },
  { categories: ['Impuestos', 'Percepciones', 'IRF'], amount: 12200 },
  { categories: ['Impuestos', 'Percepciones', 'IIBB'], amount: 12200, regions: {} },
  {
    categories: ['Impuestos', 'Retenciones', 'Ingresos brutos'],
    amount: 12200,
    regions: { 'Buenos Aires': 12000, Chubut: 200 }
  }
];

storiesOf('TaxesTable', module)
  .add('ecuador', () => (
    <div style={{ width: '1000px' }}>
      <TaxesTable currency="USD" language="es-EC" taxes={taxes} />
    </div>
  ))
  .add('dominicana', () => (
    <div style={{ width: '1000px' }}>
      <TaxesTable currency="DOP" language="es-DO" taxes={taxes} />
    </div>
  ))
  .add('emptyTaxes', () => <TaxesTable currency="USD" taxes={[]} />)
  .add('undefinedTaxes', () => <TaxesTable currency="USD" />);
