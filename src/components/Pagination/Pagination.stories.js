import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './Pagination';
import PaginationButton from '../PaginationButton/PaginationButton';

storiesOf('Pagination', module)
  .add('pagination', () => {
    return (
      <Pagination>
        <PaginationButton disabled>&lt;</PaginationButton>
        <PaginationButton active>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
        <PaginationButton>&gt;</PaginationButton>
      </Pagination>
    );
  });
