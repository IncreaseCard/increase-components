import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import TableRow from './TableRow';
import TableRowExpandable from './TableRowExpandable';
import TableData from './TableData';
import TableHeader from './TableHeader';
import TableHead from './TableHead';

storiesOf('Table', module)
  .add('normal', () => (
    <Table style={{ width: '1000px' }}>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha de venta</TableHead>
          <TableHead>Fecha de cobro</TableHead>
          <TableHead>Tarjeta</TableHead>
          <TableHead>Monto de venta (AR$)</TableHead>
          <TableHead>Descripción</TableHead>
          <TableHead>Cuotas</TableHead>
          <TableHead>Cupón</TableHead>
          <TableHead>Lote</TableHead>
          <TableHead>Últ. 4 núm. tarjeta</TableHead>
          <TableHead>Comercio</TableHead>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableData>19/03/2018</TableData>
          <TableData>22/03/2018</TableData>
          <TableData>VISA</TableData>
          <TableData number>$2.200,00</TableData>
          <TableData>CONS. $</TableData>
          <TableData>DEB</TableData>
          <TableData number>1685</TableData>
          <TableData number>586</TableData>
          <TableData number>0284</TableData>
          <TableData>Imaginación</TableData>
        </TableRow>
        <TableRow>
          <TableData>19/03/2018</TableData>
          <TableData>22/03/2018</TableData>
          <TableData>VISA</TableData>
          <TableData number>$200,00</TableData>
          <TableData>CONS. $</TableData>
          <TableData>DEB</TableData>
          <TableData number>1685</TableData>
          <TableData number>586</TableData>
          <TableData number>0284</TableData>
          <TableData>Imaginación</TableData>
        </TableRow>
        <TableRow>
          <TableData>19/03/2018</TableData>
          <TableData>22/03/2018</TableData>
          <TableData>VISA</TableData>
          <TableData number>$10.200,00</TableData>
          <TableData>CONS. $</TableData>
          <TableData>DEB</TableData>
          <TableData number>1685</TableData>
          <TableData number>586</TableData>
          <TableData number>0284</TableData>
          <TableData>Imaginación</TableData>
        </TableRow>
      </tbody>
    </Table>
  ))
  .add('expandable', () => (
    <Table style={{ width: '800px' }}>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead number>Visa</TableHead>
          <TableHead number>Mastercard</TableHead>
          <TableHead number>American Express</TableHead>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRowExpandable
          collapse={
            <React.Fragment>
              <TableRow inset>
                <TableData>Débito</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset>
                <TableData>Crédito</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset>
                <TableData>Crédito en cuotas</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
            </React.Fragment>
          }
        >
          <TableHead>Presentado</TableHead>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
        </TableRowExpandable>
        <TableRowExpandable
          collapse={
            <React.Fragment>
              <TableRow inset red>
                <TableData>Promociones</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset red>
                <TableData>Arancel (costos de tarjeta)</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset red>
                <TableData>Impuestos</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset red>
                <TableData>Cuotas</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
              <TableRow inset red>
                <TableData>Otros</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
                <TableData number>$ 0,00</TableData>
              </TableRow>
            </React.Fragment>
          }
          red
        >
          <TableHead>Descontado</TableHead>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
        </TableRowExpandable>
        <TableRow style={{ backgroundColor: '#008000', color: 'white' }}>
          <TableHead style={{ paddingLeft: '38px' }}>Acreditado</TableHead>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
          <TableData number>$ 0,00</TableData>
        </TableRow>
      </tbody>
    </Table>
  ));
