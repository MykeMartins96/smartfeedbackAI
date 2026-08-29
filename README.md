# 🤖 SmartFeedback AI

Aplicação Full Stack desenvolvida para analisar feedbacks de clientes utilizando Inteligência Artificial.

O usuário pode escrever um comentário sobre um produto ou serviço, e a aplicação utiliza a API do Google Gemini para analisar automaticamente esse feedback.

## 🚀 Funcionalidades

- Análise de feedbacks com Inteligência Artificial
- Classificação de sentimento: Positivo, Neutro ou Negativo
- Geração automática de nota de 1 a 5
- Insight gerado pela IA sobre o comentário
- Histórico de feedbacks analisados
- Cálculo da média das avaliações
- Contagem de feedbacks positivos
- Dashboard com informações atualizadas

## 🛠️ Tecnologias utilizadas

### Frontend
- React
- JavaScript
- Styled Components
- Axios
- Lucide React

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Google Gemini API

### Deploy
- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Banco de dados

## ⚙️ Como funciona

1. O usuário escreve um feedback.
2. O React envia o texto para a API desenvolvida em Node.js.
3. O backend envia o feedback para o Google Gemini.
4. A IA identifica o sentimento, gera uma nota e um insight.
5. O resultado é salvo no MongoDB.
6. O frontend atualiza o dashboard e o histórico de análises.

## 💡 Desafios durante o desenvolvimento

Durante o desenvolvimento, trabalhei na integração entre frontend e backend, consumo da API do Gemini, persistência dos dados no MongoDB e deploy da aplicação.

Também resolvi problemas relacionados à comunicação entre frontend e backend, tratamento das respostas da IA e cálculo das médias de avaliações.

## 🔗 Projeto online

👉 [Acessar SmartFeedback AI](https://smartfeedback-ai.vercel.app/)

## 📸 Imagem do Projeto

![SmartFeedback AI](https://github.com/MykeMartins96/smartfeedbackAI/blob/main/backend/src/Captura%20de%20tela%202026-08-23%20215402.png?raw=true)
