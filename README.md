# 🚀 b2x-front

Frontend React para o projeto **b2x**, utilizando TypeScript, Redux e React Router. O projeto é inicializado com `react-scripts` e segue boas práticas de testes com Testing Library.

---

## 📦 Tecnologias principais

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM v7](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/)
- [Testing Library](https://testing-library.com/)

---

## ▶️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/b2x-front.git
cd b2x-front
npm install
# ou
yarn
```

### Rodar o projeto
```bash
npm start
# ou
yarn start
```
A aplicação será iniciada em http://localhost:3000.

### 🧪 Rodando os testes
```bash
npm test
# ou
yarn test
```
### 📁 Scripts disponíveis

| Comando        | Descrição                         |
|----------------|-----------------------------------|
| `npm start`    | Inicia a aplicação localmente     |
| `npm run build`| Cria a versão de produção         |
| `npm test`     | Executa os testes                 |
| `npm run eject`| Ejeção do create-react-app (irreversível) |

---

## 🔌 Backend (API)

Este projeto depende de uma API desenvolvida com NestJS e Prisma. O código-fonte da API está disponível neste repositório:

👉 [emoises/nest-auth-prisma](https://github.com/emoises/nest-auth-prisma)

### Como rodar a API

1. Clone o repositório:
  
  via http:
```bash
git clone https://github.com/emoises/nest-auth-prisma.git
``` 
  via ssh:
```bash
git clone git@github.com:emoises/nest-auth-prisma.git
```
```bash
cd nest-auth-prisma

```
Siga as instruções contidas no README.md do repositório para configurar e iniciar o servidor.
  
  >A documentação completa da API, incluindo variáveis de ambiente, banco de dados e autenticação, está disponível no próprio repositório.
