import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, Loader2 } from 'lucide-react';
import api from '../services/api';

// --- ELEMENTOS ESTILIZADOS COM STYLED-COMPONENTS ---
const ContainerForm = styled.form`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Titulo = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
`;

const AreaTexto = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #334155;
  resize: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const BotaoEnviar = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

// --- COMPONENTE PRINCIPAL REACT ---
const Formulario = ({ aoAdicionarFeedback }) => {
  const [texto, setTexto] = useState('');
  const [carregando, setCarregando] = useState(false);

  const manipularEnvio = async (e) => {
    e.preventDefault();

    if (!texto.trim()) return;

    try {
      setCarregando(true);

      // Chamada HTTP POST oficial ligando o React ao seu servidor Node.js
      const resposta = await api.post('/feedbacks', { comentarioBruto: texto });

      // Passa o feedback analisado e salvo no MongoDB de volta para a tela principal
      aoAdicionarFeedback(resposta.data);
      
      // Reseta e limpa o campo de texto após o sucesso
      setTexto('');
    } catch (erro) {
      console.error('Erro ao enviar feedback para a API:', erro);
      alert('Erro ao processar a análise com IA. Verifique se o Back-end está ligado.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ContainerForm onSubmit={manipularEnvio}>
      <Titulo>Analisar Novo Feedback</Titulo>
      
      <AreaTexto
        placeholder="Cole ou digite aqui a avaliação do cliente (Ex: O produto é fantástico, mas o frete atrasou)..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={carregando}
      />

      <BotaoEnviar type="submit" disabled={carregando || !texto.trim()}>
        {carregando ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Analisando com IA...
          </>
        ) : (
          <>
            <Send size={18} />
            Enviar para Análise
          </>
        )}
      </BotaoEnviar>
    </ContainerForm>
  );
};

export default Formulario;
