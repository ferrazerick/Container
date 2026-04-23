import styled from 'styled-components';
import { BaseLayout } from '../BaseLayout';

export const Row = styled(BaseLayout)`
  flex-direction: row;
  /* No Row, o align controla o eixo horizontal (justify-content) */
  justify-content: ${props => props.align ?? 'flex-start'};
  /* No Row, o vAlign controla o eixo vertical (align-items) */
  align-items: ${props => props.vAlign ?? 'center'};
`;