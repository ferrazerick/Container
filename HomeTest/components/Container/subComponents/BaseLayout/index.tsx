import styled, { css } from 'styled-components';
import { ContainerProps } from '../../types';

export const BaseLayout = styled.div<ContainerProps>`
  display: flex;
  gap: ${props => props.gap ?? 8}px;
  box-sizing: border-box;
  
  /* Se a prop fullHeight for passada, o container cresce para ocupar o espaço vertical */
  ${props => props.fullHeight && css`flex: 1;`}

  /* Lógica do Ajustador (Sistema de 12 colunas) */
  ${({ size }) => size 
    ? css`
      width: ${(size / 12) * 100}%; 
      flex-grow: 0; 
      flex-shrink: 0;
    ` 
    : css`
      width: 100%;
    `
  }
`;