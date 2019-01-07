import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './Pagination';

storiesOf('Pagination', module).add('pagination', () => {
  return (
    <div style={{ width: '800px' }}>
      <Pagination currentPage={2} itemsPerPage={20} totalItems={156} totalPages={15} />
    </div>
  );
});
