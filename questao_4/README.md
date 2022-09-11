# Api de Academia

Esta Api foi criada para implementar os Modelo Entidade Relacionamento criado na Primeira questão e os contratos criado na questão 3.

Você pode ter acesso a API na Url: [#](#)

# Tecnologias

Esse projeto utiliza as seguintes tecnologias:

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Faker](https://fakerjs.dev/)
- [Express](https://expressjs.com/pt-br/)

# Como Executar o projeto:

Para conseguir executar o projeto, é necessário que tenha o [NodeJS](https://nodejs.org/) instalado na sua máquina e o mesmo deve estar nas suas varíaveis de ambiente (`PATH`).

Para executar o projeto deve seguir o seguinte passo a passo:

1. Clone o Repositório e acesse a pasta `questao_4` que está no projeto.

```batch
git clone https://github.com/victorgrodriguesm7/teste-niky
cd teste-niky
cd questao_4
```

Após isso, com o Node instalado execute o seguinte comando:

```batch
npm i
```

Este comando será responsável por instalar todas as depedências utilizadas no projeto.

Agora com tudo no lugar, basta executar o comando:

```batch
node ./index.js
```

E o servidor estará rodando na porta 3000.

Para testar, abra o Insomnia e importe o arquivo `endpoints_insomnia.json`. Ele trará todos os endpoints existentes na Api com dados já preenchidos.