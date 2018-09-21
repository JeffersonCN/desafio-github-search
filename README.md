# Desafio Concrete - Github Search
Este repositório contém o código fonte do projeto feito para o desafio da Concrete Solutions.

Uma versão demo encontra-se publicada no [Netlify](https://github-search.jeffersoncruz.com/).

O projeto tinha como objetivo consumir a [API pública](https://developer.github.com/v3/) do Github listar detalhes de usuários e repositórios.

## User Stories

Os requisitos funcionais foram baseados em três User Stories:

- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas.
## Tecnologias

O projeto foi desenvolvido utilizando o React 16 com ajuda da ferramenta CRA ([create-react-app](https://github.com/facebook/create-react-app)). Para as rotas foi utilizado o [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) e os estilos foram feitos usando o pré-processador [Sass](https://github.com/sass/node-sass). 
As requisições foram feitas utilizando a própria [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) e para os testes foi utilizado o [Enzyme](https://github.com/airbnb/enzyme).

## Segurança

Para não expor o Token de acesso pessoal da API do Github, foi utilizada uma variável de ambiente que pode ser definida em um arquivo .env, que deve seguir o exemplo disponibilizado no repositório (.env.example) ou setada no próprio sistema operacional.

## Desenvolvimento

Para desenvolver o projeto é preciso:

- clonar este repositório;
- instalar as dependências utilizando o yarn ou npm;
- copiar .env.example para .env;
- preencher a variável com um token válido;
- executar o projeto com npm start ou yarn start;

