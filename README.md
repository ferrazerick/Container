Este projeto é uma demonstração técnica de uma arquitetura de layout escalável utilizando React Native (Expo), TypeScript e Styled Components. O foco principal foi a criação de um sistema de grid flexível baseado em Compound Components para resolver problemas comuns de alinhamento e responsividade sem o uso de estilos inline.

#### Tecnologias utilizadas:
- React Native com Expo
- TypeScript
- Styled Components
- Atomic Design / Modular Architeture - Esturtura de pastas organizadas para marior escalabilidade.

#### Arquitetura do sistema de Grid
- O foco do projeto é o componente Container, que faz a abstração da complexidade do Flexbox em uma API declarativa.

##### Como funciona?
- O `Container.Main` Centraliza o conteúdo e determina um espaço limitado na tela do computador, tornando a visualização confortável independentemente do tamanho de tela.
- O espaço delimitado é dividido em 12 colunas invisíveis com gaps iguais. Tudo que é posicionado dentro do `Container.Main`, considera essas colunas como medida.
- Então, se passar um

  ```tsx
    <Container.Row size={3}>
      <Button>
    </ Container.Row>
  ```
- O botão ocupará na tela o espaço esquivalente a 3 colunas + 2 gaps
- Ao utilizar `Container.Row` ou `Container.Column` o código se torna autoexplicativo, o que reduz a curva de aprendizado e agiliza na contrução de telas, visto que o desenvolver precisa "pensar menos" no que usar.
- 
