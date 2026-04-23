import styled from 'styled-components';
import { BaseLayout } from '../BaseLayout';

export const Column = styled(BaseLayout)`
  flex-direction: column;
  justify-content: ${props => props.align ?? 'flex-start'};
  align-items: ${props => props.vAlign ?? 'stretch'};
`;