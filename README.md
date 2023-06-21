# Projeto CRUD de Lista de Aniversários

## Descrição

Este projeto consiste em um aplicativo de lista de aniversários que permite aos usuários adicionar e atualizar nomes e datas de aniversário. Os dados são armazenados localmente no navegador usando o recurso **`localStorage`**, permitindo que as informações persistam entre sessões.
Funcionalidades

O aplicativo inclui as seguintes funcionalidades:

   - Adicionar um novo aniversário, fornecendo o nome da pessoa e a data de nascimento.
   - Visualizar a lista de aniversários existentes, exibindo os nomes e as datas de nascimento.
   - Atualizar os detalhes de um aniversário existente, permitindo a edição do nome e da data de nascimento.
   - Os dados dos aniversários são armazenados localmente no navegador usando o localStorage.
   - Os dados são mantidos mesmo após o fechamento do navegador ou a atualização da página.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

   - Linguagem de programação: JavaScript
   - Manipulação do DOM: JavaScript DOM API
   - Armazenamento local: localStorage
   - Estilização: CSS
   - Estruturação da página: HTML

## Estrutura de Arquivos

A estrutura de arquivos do projeto é a seguinte:

```
├── src
│   ├── assets
│   │   ├── js
│   │   │   ├── modules
│   │   │   └── index.js
│   │   └── css
│   │       └── style.css
│   └── index.html
├── README.md
```

   - O diretório **`src`** é o diretório raiz do projeto.
   - Dentro do diretório **`src`**, temos o diretório **`assets`**, que contém os arquivos JavaScript e CSS.
   - A pasta **js** dentro de **`assets`** contém o arquivo **`index.js`**, que é o ponto de entrada do JavaScript do projeto.
   - A pasta **js** dentro de **`assets`** contém o diretório **`modules`**, que contém os módulos do JavaScript representados por arquivos com a extensão .mjs.
   - O diretório **css** dentro de **`assets`** contém o arquivo **`style.css`** responsável pela estilização do projeto.
   - O arquivo principal do projeto é o **`index.html`**, localizado diretamente dentro do diretório **`src`**.

## Como Executar o Projeto

Você pode visualizar e executar o projeto online através do seguinte link: [Lista de Aniversários](https://pass0n.github.io/CRUD-CALENDARIO/src/index.html)

----

Sinta-se à vontade para explorar o código-fonte e personalizar o aplicativo de acordo com suas necessidades. Você pode adicionar recursos adicionais, como ordenação da lista de aniversários, filtragem de aniversários, pesquisa de aniversários, notificações ou até mesmo estilização aprimorada.

Para mais informações sobre as funcionalidades específicas do aplicativo, consulte o arquivo script.js.
