# 🤖 SmartFeedback AI

Aplicação Full Stack desenvolvida com **React.js, Node.js e MongoDB** para análise de feedbacks de clientes utilizando **Inteligência Artificial**.

O usuário pode enviar um comentário sobre um produto ou serviço, e a aplicação utiliza a **API do Google Gemini** para analisar o conteúdo, identificar o sentimento, gerar uma avaliação e produzir um insight sobre o feedback.

---

## 📸 Preview

![SmartFeedback AI](https://github.com/MykeMartins96/smartfeedbackAI/blob/main/backend/src/Captura%20de%20tela%202026-08-23%20215402.png?raw=true)

---

## 🚀 Sobre o projeto

O **SmartFeedback AI** foi desenvolvido para transformar feedbacks escritos por clientes em informações que possam ser visualizadas e acompanhadas através de um dashboard.

A aplicação integra Front-End, Back-End, banco de dados e Inteligência Artificial em um fluxo completo.

Após o usuário enviar um comentário, o Back-End utiliza o **Google Gemini** para analisar o conteúdo. O resultado é armazenado no MongoDB e apresentado no dashboard juntamente com o histórico das análises.

---

## ✨ Funcionalidades

- 🤖 Análise de feedbacks com Inteligência Artificial
- 😊 Classificação de sentimento: Positivo, Neutro ou Negativo
- ⭐ Geração automática de nota de 1 a 5
- 💡 Geração de insight sobre o comentário
- 📝 Histórico de feedbacks analisados
- 📊 Dashboard com informações atualizadas
- ⭐ Cálculo da média das avaliações
- 😊 Contagem de feedbacks positivos
- 💾 Persistência das análises no banco de dados
- 🔄 Integração entre Front-End, Back-End e IA

---

## 🛠 Tecnologias utilizadas

### 🎨 Front-End

- **React.js** — construção da interface e componentização
- **JavaScript** — lógica e funcionalidades
- **Styled Components** — estilização dos componentes
- **Axios** — comunicação com a API REST
- **Lucide React** — ícones da interface

### ⚙️ Back-End

- **Node.js** — ambiente de execução do servidor
- **Express.js** — criação da API REST
- **MongoDB** — persistência dos feedbacks
- **Mongoose** — modelagem e comunicação com o MongoDB
- **Google Gemini API** — análise dos feedbacks com IA

### 🚀 Deploy

- **Vercel** — Front-End
- **Render** — Back-End
- **MongoDB Atlas** — banco de dados

---

## 🤖 Integração com Inteligência Artificial

O principal recurso do SmartFeedback AI é a integração com o **Google Gemini**.

Quando um feedback é enviado, a Inteligência Artificial analisa o conteúdo e retorna informações utilizadas pela aplicação, como:

- Sentimento do comentário
- Nota da avaliação
- Insight sobre o feedback

Essas informações são processadas pelo Back-End, armazenadas no banco de dados e posteriormente exibidas no Front-End.

---

## 🔄 Como funciona

O fluxo da aplicação funciona da seguinte maneira:

1. O usuário escreve um feedback.
2. O React envia o conteúdo para a API REST.
3. O Back-End em Node.js recebe o feedback.
4. O Back-End envia o conteúdo para o Google Gemini.
5. A IA analisa o comentário.
6. O resultado é processado pela aplicação.
7. Os dados são armazenados no MongoDB.
8. O Front-End atualiza o dashboard e o histórico.

---

## 🏗️ Arquitetura da aplicação

```text
Usuário
   ↓
React.js
   ↓
Axios / API REST
   ↓
Node.js + Express
   ↓
Google Gemini
   ↓
Análise do feedback
   ↓
MongoDB
   ↓
Dashboard / Histórico
```

Essa arquitetura permite separar a interface, a lógica do servidor, a análise realizada pela IA e a persistência dos dados.

---

## 🧠 O que pratiquei neste projeto

Durante o desenvolvimento do SmartFeedback AI, pratiquei conceitos importantes de desenvolvimento web, como:

- Desenvolvimento de interfaces com React
- Componentização
- Gerenciamento de estado
- Consumo de API REST com Axios
- Integração entre Front-End e Back-End
- Criação de API com Node.js e Express
- Integração com API de Inteligência Artificial
- Processamento das respostas da IA
- Persistência de dados com MongoDB
- Modelagem utilizando Mongoose
- Criação de dashboards
- Manipulação e exibição dinâmica de dados
- Tratamento de erros
- Variáveis de ambiente
- Deploy de Front-End e Back-End

---

## 💡 Desafios durante o desenvolvimento

Durante o desenvolvimento, trabalhei na integração entre diferentes partes da aplicação, principalmente na comunicação entre **React, Node.js, MongoDB e Google Gemini**.

Também foram realizados ajustes relacionados à comunicação entre Front-End e Back-End, processamento das respostas da IA, persistência das análises e atualização dos dados apresentados no dashboard.

Esses desafios contribuíram para uma melhor compreensão do fluxo completo de uma aplicação Full Stack integrada a um serviço externo de Inteligência Artificial.

---

## 🌐 Projeto publicado

Acesse o SmartFeedback AI:

https://smartfeedback-ai.vercel.app/

---

## 💻 Código-fonte

Repositório:

https://github.com/MykeMartins96/smartfeedbackAI

---

## 👨‍💻 Autor

**Myke Santana Martins**

Desenvolvedor Front-End em formação, com experiência prática na criação de aplicações utilizando **React.js, JavaScript, APIs REST e integração com Inteligência Artificial**.

- GitHub: https://github.com/MykeMartins96
- LinkedIn: https://www.linkedin.com/in/myke-santana-martins
