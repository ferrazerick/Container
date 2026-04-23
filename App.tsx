import styled from 'styled-components';
import { Container } from './HomeTest/components/Container';

export default function App() {
  return (
    <Container.Main>
      <Container.Row>
        <Container.Column size={2}>
          <button>Menu</button>
        </Container.Column>
        
        <Container.Column>
          <button>Ocupo o restante das 10 colunas</button>
        </Container.Column>
      </Container.Row>
      <Container.Row>
        <Container.Row size={4}>
          <SkeletonTexto>
            Campo de texto ocupando 4 colunas + gaps
          </SkeletonTexto>
        </Container.Row>
      </Container.Row>
      <br />
      <Title>Como eu contruiria uma tela de login, usando este componente:</Title>
      <Container.Main>
       <LoginCard>
         <Container.Column  align="center" vAlign="center">
          <Container.Column  >
            <Title>Login</Title>
            <Container.Column >
              <Container.Row>Usuário/Email</Container.Row>
              <Input placeholder="Digite seu e-mail ou nome de usuário" />
            </Container.Column>
            <Container.Column >
              <Container.Row>Senha</Container.Row>
              <Input type="password" placeholder="Digite sua senha" />
            </Container.Column>
            <Container.Row align="flex-end">
              <Link>Esqueci minha senha</Link>
            </Container.Row>
            <Container.Row>
              <ButtonPrimary>Entrar</ButtonPrimary>
            </Container.Row>
          </Container.Column>
        </Container.Column>
       </LoginCard>
      </Container.Main>      
    </Container.Main>
  );
}

const SkeletonTexto = styled.div`
  background-color: rgb(118, 78, 150);
  height: 20px;
  border-radius: 10px;
  flex: 1;
`

const LoginCard = styled.div`
  border: 0.05rem solid black;
  border-radius: 0.5rem;
  padding: 1rem
`

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Label = styled.span`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.3rem;
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`

const ButtonPrimary = styled.button`
  background: #4e3496;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  flex: 1; cursor: pointer;
`

const Link = styled.a`
  font-size: 0.75rem;
  color: #4e3496;
  text-decoration: none;
`