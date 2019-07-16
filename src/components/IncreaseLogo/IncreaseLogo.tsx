import React from 'react';
import isotype from '../../icons/increase-isotype.svg';
import styled from 'styled-components';

export type LogoSize = 'small' | 'medium' | 'big';

export type IncreaseLogoProps = {
  size: LogoSize;
  onClick: (message: string) => void;
  blackAndWhite?: boolean; // Optional prop
};

const SizesMap: Record<LogoSize, number> = {
  small: 25,
  medium: 80,
  big: 120
};

const Wrap = styled.div<IncreaseLogoProps>`
  width: ${({ size }) => SizesMap[size]}px;
  filter: ${({ blackAndWhite }) => (blackAndWhite ? 'contrast(0) brightness(0)' : 'none')};
  cursor: pointer;
`;

export default function IncreaseLogo({ size, onClick, blackAndWhite }: IncreaseLogoProps) {
  const onClickHandler = () => {
    onClick('Logo Clicked');
  };

  return (
    <Wrap blackAndWhite={blackAndWhite} onClick={onClickHandler} size={size}>
      <img alt="Increase Logo" src={isotype} />
    </Wrap>
  );
}
