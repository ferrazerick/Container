import React from 'react';

export type AlignOptions = 'flex-start' | 'center' | 'flex-end' | 'space-between';

export interface ContainerProps {
  children?: React.ReactNode;
  /** Define a largura baseada em um grid de 12 colunas */
  size?: number;
  /** Espaçamento entre os elementos filhos (padrão: 8px) */
  gap?: number;
  /** Alinhamento no eixo principal (Horizontal na Row, Vertical na Column) */
  align?: AlignOptions;
  /** Alinhamento no eixo cruzado (Vertical na Row, Horizontal na Column) */
  vAlign?: AlignOptions;
  /** Se true, o container se expande para ocupar a altura disponível (flex: 1) */
  fullHeight?: boolean;
}