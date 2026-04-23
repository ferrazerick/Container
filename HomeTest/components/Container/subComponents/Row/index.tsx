import styled from 'styled-components';
import { BaseLayout } from '../BaseLayout';

export const Row = styled(BaseLayout)`
  flex-direction: row;
  justify-content: ${props => props.align ?? 'flex-start'};
  align-items: ${props => props.vAlign ?? 'center'};
`;