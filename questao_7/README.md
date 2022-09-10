# Api de Mockagem de Categorias

Esta api foi criada para Mockar os dados do endpoint `/categorias`.

# Tecnologias

Esse projeto utiliza as seguintes tecnologias:

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Faker](https://fakerjs.dev/)
- [Express](https://expressjs.com/pt-br/)

# Como Executar o projeto:

Para conseguir executar o projeto, é necessário que tenha o [NodeJS](https://nodejs.org/) instalado na sua máquina e o mesmo deve estar nas suas varíaveis de ambiente (`PATH`).

Para executar o projeto deve seguir o seguinte passo a passo:

1. Clone o Repositório e acesse a pasta `questao_7` que está no projeto.

```batch
git clone https://github.com/victorgrodriguesm7/teste-niky
cd teste-niky
cd questao_7
```

Após isso, com o Node instalado execute o seguinte comando:

```batch
npm i
```

Este comando será responsável por instalar todas as depedências utilizadas no projeto.

Agora com tudo no lugar, basta executar o comando:

```
node ./index.js
```

E o servidor estará rodando na porta 3000.

Para testar o mesmo basta abrir no seu navegador a url: `localhost:3000/categorias`

Você pode especificar a quantidade de categorias geradas passando um QueryParam amount:

`localhost:3000/categorias?amount=1`