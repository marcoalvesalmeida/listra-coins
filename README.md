# Listra Coins

Esse projeto foi desenvolvido utilizando

- React Native
- Expo
- Expo Router
- Expo Image
- Expo Notifications
- NativeWind/TailwindCSS
- Moti
- Zustand
- Axios
- Shopify FlashList
- Google Fonts
- Typescript
- React Hook Form
- Zod
- Eslint
- Prettier

O projeto está organizado seguindo a seguinte estrutura:

```sh
.
├── app.json
├── babel.config.js
├── db.json
├── metro.config.js
├── package.json
├── package-lock.json
├── src
│   ├── app
│   │   ├── (app)
│   │   │   ├── _layout.tsx
│   │   │   ├── login.tsx
│   │   │   └── (tabs)
│   │   │       ├── index.tsx
│   │   │       ├── _layout.tsx
│   │   │       └── wallet.tsx
│   │   └── _layout.tsx
│   ├── assets
│   │   ├── adaptive-icon.png
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── icons
│   │   │   ├── check_circle.svg
│   │   │   ├── home_focused.svg
│   │   │   ├── home.svg
│   │   │   ├── lock.svg
│   │   │   ├── logo.svg
│   │   │   ├── shopping_cart.svg
│   │   │   ├── user.svg
│   │   │   ├── wallet_focused.svg
│   │   │   └── wallet.svg
│   │   ├── notification-icon.png
│   │   └── splash.png
│   ├── components
│   │   ├── BalanceCard.tsx
│   │   ├── CustomButton.tsx
│   │   ├── CustomTextInput.tsx
│   │   ├── DefaultLayout.tsx
│   │   ├── Header.tsx
│   │   ├── IconButton.tsx
│   │   ├── LinkButton.tsx
│   │   ├── ProductCard.tsx
│   │   ├── SafeAreaContent.tsx
│   │   ├── TextAux.tsx
│   │   ├── TextLarge.tsx
│   │   └── TransactionCard.tsx
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useBreakpoints.ts
│   │   ├── useCheckout.ts
│   │   ├── useProductsStore.ts
│   │   ├── useProducts.ts
│   │   ├── useTransactionsStore.ts
│   │   ├── useTransactions.ts
│   │   └── useUserStore.ts
│   ├── services
│   │   ├── api.ts
│   │   ├── Messaging
│   │   │   └── Notifications.ts
│   │   ├── Persistence
│   │   │   ├── keys.ts
│   │   │   └── Storage.ts
│   │   ├── Request
│   │   │   ├── Product.ts
│   │   │   ├── Transactions.ts
│   │   │   ├── types.ts
│   │   │   └── User.ts
│   │   └── Security
│   │       └── Token.ts
│   ├── store
│   │   ├── productsStore.ts
│   │   ├── transactionsStore.ts
│   │   └── userStore.ts
│   ├── styles
│   │   └── Theme.ts
│   └── utils
│       └── Currency.ts
├── tailwind.config.js
├── __test__
│   ├── BallanceCard.test.tsx
│   ├── CustomButton.test.tsx
│   ├── Header.test.tsx
│   ├── LinkButton.test.tsx
│   ├── TextAux.test.tsx
│   ├── TextLarge.test.tsx
│   └── TransactionCard.test.tsx
├── tsconfig.json
└── @types
  └── global.d.ts

```

## Pré-Requisitos

Para utilizar esse projeto localmente é necessário a instalação do NodeJS.

## API e Banco de Dados

O banco de dados e a API estão sendo simulados usando **json-server** e os dados se encontram no arquivo **db.json**.

## Instalação

Para realizar a instalação local siga os seguintes passos:

1. Clone o repositório
   ```sh
   git clone https://github.com/marcoalvesalmeida/listra-coins.git
   ```
2. Entre na pasta raiz do projeto com os seguintes comandos:
   ```sh
   cd listra-coins
   ```
3. E em seguida instale as dependências:
   ```sh
   npm install
   ```
4. Agora copie o arqivo ".env.example" para um arquivo ".env":
   ```sh
   cp .env.example .env
   ```
5. Edite o arquivo inserindo os dados que você deseja, lembre-se de colocar o endereço do IP local da máquina que irá rodar o servidor:
   ```sh
   EXPO_PUBLIC_API_URL=http://SEU_IP_LOCAL:3000
   ```
6. Para rodar o servidor simulado basta rodar o comando (Importante: O json-server gera id's automáticos para os recursos, então não desligue o servidor enquanto realiza os testes, se desligar o servidor será necessário fazer logout no app para que o ele se comporte corretamente):
   ```sh
   npm run server
   ```
7. E então poderá rodar o app:
   ```sh
   npm start
   ```
8. O app simula o login do usuário, então para entrar você precisa digitar o email e a senha correta para um dos 2 usuários de teste já criados:

```sh
"email": "mary@listracoins.com"
"password": "abcd1234",

OU

"email": "margaret@listracoins.com",
"password": "abcd1234",
```

11. A partir de então você estará pronto para visualizar o app. Para rodar em um simulador iOS clique na tecla **i** dentro do terminal. Para rodar em um emulador Android clique na tecla **a**. Para testar em um dispositivo real utilize o Aplicativo Expo GO e escaneie o QRCode que aparece na tela.

## Rodando os testes

Para rodar os testes entre no diretório raiz e execute:

```bash
  npm test
```
