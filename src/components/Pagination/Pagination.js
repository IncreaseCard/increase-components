import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '../Select/Select';
import SelectItem from '../Select/SelectItem';
import PaginationButton from './PaginationButton';
import newTheme from '../../themes/new';

const propTypes = {
  className: PropTypes.string,
  totalPages: PropTypes.number,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
  itemsPerPage: PropTypes.number,
  onItemsPerPageChanged: PropTypes.func,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  theme: PropTypes.object
};

const defaultProps = {
  itemsPerPageOptions: [10, 20, 50, 100],
  theme: newTheme
};

const PaginationTotals = styled.div``;
const PaginationControls = styled.div``;

export function Pagination({
  className,
  totalPages,
  totalItems,
  currentPage,
  onPageChanged,
  itemsPerPage,
  itemsPerPageOptions,
  onItemsPerPageChanged
}) {
  const pages = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);
  const fromItem = currentPage * itemsPerPage;
  const toItem = fromItem + itemsPerPage;
  return (
    <div className={className}>
      <Select
        id="itemsPerPage"
        name="itemsPerPage"
        labelText="Items por página:"
        onChange={onItemsPerPageChanged}
      >
        {itemsPerPageOptions.map((number) => (
          <SelectItem
            value={number}
            key={number}
            text={number}
            selected={itemsPerPage === number}
          />
        ))}
      </Select>
      <PaginationTotals>
        <span>
          {fromItem}-{toItem} de {totalItems} items
        </span>
        <span>
          {currentPage} de {totalPages} páginas
        </span>
      </PaginationTotals>
      <PaginationControls>
        <PaginationButton>&lt;</PaginationButton>
        <Select id="page" name="page" labelText="Página" labelHidden={true}>
          {pages.map((page) => (
            <SelectItem
              key={page}
              value={page}
              onChange={onPageChanged}
              text={page}
              selected={page === currentPage}
            />
          ))}
        </Select>
        <PaginationButton>&gt;</PaginationButton>
      </PaginationControls>
    </div>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default styled(Pagination)`
  padding: 4px 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 13px;
  color: #1c2644;

  > *:not(:last-child) {
    margin-right: 8px;
  }

  ${PaginationTotals} {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }

  ${PaginationControls} {
    display: flex;
  }
  ${PaginationControls} > *:not(:last-child) {
    margin-right: 2px;
  }
`;
