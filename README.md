# Testes Unitários vs Testes E2E em Aplicações Mobile

**Testes Unitários:** Validam partes específicas do código de forma isolada, garantindo que cada função ou método funcione corretamente. São rápidos e ideais para detectar bugs durante o desenvolvimento.

**Testes E2E:** Simulam o comportamento do usuário, testando o fluxo completo da aplicação. São mais lentos e complexos, mas garantem que a aplicação funcione como um todo em cenários reais.

# 📱 Projeto de Testes Unitários em React Native

Este projeto foi desenvolvido como parte da disciplina de **Programação para Dispositivos Móveis**, utilizando **React Native com Expo** e implementando testes unitários com **Jest** e **React Testing Library**.

---

## Tecnologias Utilizadas

- **React Native (Expo)**
- **TypeScript**
- **Jest** (para testes unitários)
- **React Testing Library** (para testes de componentes)
- **React Hooks Testing Library** (para testes de hooks)

---

## Instalação

### 1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2️⃣ **Instale as dependências do projeto**
npm install -g expo-cli
yarn install

3️⃣ **Instale as bibliotecas para testes**
yarn add --dev jest @testing-library/react-native @testing-library/jest-native @testing-library/react-hooks

**Como Executar a Aplicação**
yarn expo start

**Como executar os testes**
yarn test ou npm test

📝 Testes Implementados
Foram desenvolvidos 5 testes unitários para garantir o funcionamento dos componentes e hooks principais do projeto:

1️⃣ Teste do Button
Verifica se o botão chama a função onPress corretamente.
2️⃣ Teste do Form
Testa a entrada de texto e o envio do formulário.
3️⃣ Teste do Intro (Snapshot Test)
Garante que o layout do componente Intro não mudou inesperadamente.
4️⃣ Teste do useCounter (Hook Customizado)
Verifica se o hook de contador funciona corretamente ao incrementar e decrementar valores.
5️⃣ Teste do Greeting
Verifica se o componente exibe corretamente uma saudação personalizada baseada no nome do usuário.
