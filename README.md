<h1 align="center"> :shirt: Vitrine de produtos</h1>

Este projeto tem como objetivo simular uma loja virtual, permitindo que o usuário logue, favorite e desfavorite produtos, criando a sua própria lista de favoritos.

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

### Tabela de conteúdos
=================
<!--ts-->
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Funcionalidades](#funcionalidades)
   * [Rotas](#rotas)
      * [Produto](#produto)
      * [Usuário](#usuario)
      * [Favorito](#favorito)
   * [Pré-requisitos](#pre-requisitos)
   * [Rodando o servidor](#rodando-o-servidor)
   * [Tecnologias](#tecnologias)
   * [Autora](#autora)
   * [Licença](#licença)
   (#tecnologias)
<!--te-->

## :wrench: Funcionalidades
- [x] Cadastro de usuários
- [x] Cadastro de favoritos
- [x] Lista de favoritos
- [x] Autenticação via web token
- [x] Hash de senhas
- [ ] Envio de e-mails
- [ ] Somar e mostrar valor total na lista de favoritos

## :left_right_arrow: Rotas
#### Produto:
- GET http://localhost:3010/products

#### Usuário:
- POST http://localhost:3010/register
- POST http://localhost:3010/login

#### Favorito
- POST http://localhost:3010/favorite/add/
- POST http://localhost:3010/favorite/delete/
- GET http://localhost:3010/favorites

## :hammer: Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Git, Node.js, editor de código (VSCode, por exemplo).

## 🎲 Rodando o servidor
#### Clone este repositório
$ git clone <https://github.com/GabriellaHuzyk/showcase-products.git>

#### Acesse a pasta do projeto no terminal/cmd
$ cd showcase-products

#### Vá para a pasta src
$ cd src

#### Instale as dependências
$ yarn install

#### Execute a aplicação em modo de desenvolvimento
$ yarn dev

#### O servidor inciará na porta 3010.


## :rocket: Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com)

## :star2: Autora

Feito por Gabriella Huzyk ❤️ 



## 📝 Licença
Licença MIT.











