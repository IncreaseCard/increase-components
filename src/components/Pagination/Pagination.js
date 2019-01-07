import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '../Select/Select';
import SelectItem from '../Select/SelectItem';
import PaginationButton from './PaginationButton';

const propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  onItemsPerPageChanged: PropTypes.func,
  onPageChanged: PropTypes.func,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number
};

const defaultProps = {
  itemsPerPageOptions: [10, 20, 50, 100]
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
        labelText="Items por página:"
        name="itemsPerPage"
        onChange={onItemsPerPageChanged}
      >
        {itemsPerPageOptions.map((number) => (
          <SelectItem
            key={number}
            selected={itemsPerPage === number}
            text={number}
            value={number}
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
        <Select id="page" labelHidden={true} labelText="Página" name="page">
          {pages.map((page) => (
            <SelectItem
              key={page}
              onChange={onPageChanged}
              selected={page === currentPage}
              text={page}
              value={page}
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
