import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 8px;
  }
`;

export function Pagination({children}) {
  return (
    <PaginationWrapper>
      {children}
    </PaginationWrapper>
  );
}

Pagination.propTypes = {
  children: PropTypes.node
};

export default Pagination;
