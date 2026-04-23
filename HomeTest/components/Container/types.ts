import React from 'react';

export type AlignOptions = 'flex-start' | 'center' | 'flex-end' | 'space-between';

export interface ContainerProps {
  children?: React.ReactNode;
  size?: number;
  gap?: number;
  align?: AlignOptions;
  vAlign?: AlignOptions;
  fullHeight?: boolean;
}