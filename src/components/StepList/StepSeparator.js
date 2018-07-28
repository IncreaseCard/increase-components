import React from 'react';
import styled from 'styled-components';

export const StepSeparatorBox = styled.span`
  font-size: 8px;
  width: 45px;
  height: 15px;
  margin: 0 9px;
  opacity: 0.2;
  white-space: nowrap;
  letter-spacing: 3.5px;
  user-select: none;
`;

export default function StepSeparator() {
  return <StepSeparatorBox>.........</StepSeparatorBox>;
}
