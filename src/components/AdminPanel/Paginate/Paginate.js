import React from 'react';
import PrimaryButton from '../../Button/PrimaryButton';

export default function Paginate({ onPageChange }) {
  return (
    <React.Fragment>
      <PrimaryButton onClick={() => onPageChange(-1)} theme="light">
        Anterior
      </PrimaryButton>
      <PrimaryButton onClick={() => onPageChange(1)} theme="light">
        Siguiente
      </PrimaryButton>
    </React.Fragment>
  );
}
