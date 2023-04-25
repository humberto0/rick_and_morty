# Aplicação de visualização de personagens Rick and Morty

Esta é uma aplicação que utiliza a tecnologia GraphQL e o gerenciador de estado Redux. Nessa aplicação, é possível verificar o status do personagem, nome e em qual episódio ele apareceu.

![Captura de tela de 2023-04-25 11-05-04](https://user-images.githubusercontent.com/15384670/234310395-55957793-9530-406c-b4db-6a025c1e6b7e.png)


## Instalação

Para instalar as dependências do projeto, é necessário ter o Node.js instalado em sua máquina. Em seguida, execute o seguinte comando no terminal:

* Caso você use gerenciador yarn :

```bash
yarn
```
* Caso você use gerenciador npm :

```bash
npm install
```

## Uso

Para executar a aplicação em modo de desenvolvimento, utilize o seguinte comando:

* Caso você use gerenciador yarn :

```bash
yarn start
```
* Caso você use gerenciador npm :

```bash
npm start
```

Isso iniciará a aplicação em `http://localhost:3000`.

## Tecnologias utilizadas

Abaixo estão as tecnologias utilizadas neste projeto:

* GraphQL
* Redux
* React
* Styled Components

## Estrutura de arquivos

A estrutura de arquivos do projeto está organizada da seguinte maneira:

```bash
rick_and_morty/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.tsx
    index.tsx
    components/
      Character/
        Character.tsx
        Character.test.tsx
        index.ts
      CharacterList/
        CharacterList.tsx
        CharacterList.test.tsx
        index.ts
      StatusIcon/
        StatusIcon.tsx
        StatusIcon.test.tsx
        index.ts
    graphql/
      queries.ts
    reducers/
      index.ts
    store/
      configureStore.ts
    styles/
      GlobalStyle.ts
      theme.ts

```

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.


