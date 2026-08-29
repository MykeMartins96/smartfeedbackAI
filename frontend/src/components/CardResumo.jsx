import React from 'react';

import styled from 'styled-components';

import { MessageSquare, Star, Smile } from 'lucide-react';

// --- ELEMENTOS ESTILIZADOS COM STYLED-COMPONENTS ---

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
`;

const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Rotulo = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Valor = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
`;

const EstrelasMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 4px;
`;

const IconeContainer = styled.div`
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => props.corFundo || '#f1f5f9'};
  color: ${(props) => props.corIcone || '#64748b'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- COMPONENTE PRINCIPAL REACT ---

const CardResumo = ({ feedbacks }) => {
  const totalFeedbacks = feedbacks.length;

  // Considera somente feedbacks que possuem nota
  const feedbacksComNota = feedbacks.filter(
    (feedback) => typeof feedback.nota === 'number'
  );

  // Calcula a média das notas
  const mediaNotas =
    feedbacksComNota.length > 0
      ? feedbacksComNota.reduce(
          (acc, curr) => acc + curr.nota,
          0
        ) / feedbacksComNota.length
      : 0;

  // Arredonda a média para decidir quantas estrelas preencher
  const estrelasPreenchidas = Math.round(mediaNotas);

  const totalPositivos = feedbacks.filter(
    (f) => f.sentimento === 'Positivo'
  ).length;

  return (
    <GridCards>
      {/* CARD 1: VOLUME TOTAL */}
      <Card>
        <Info>
          <Rotulo>Total Analisado</Rotulo>

          <Valor>{totalFeedbacks}</Valor>
        </Info>

        <IconeContainer corFundo="#eff6ff" corIcone="#3b82f6">
          <MessageSquare size={24} />
        </IconeContainer>
      </Card>

      {/* CARD 2: MÉDIA DE NOTAS */}
      <Card>
        <Info>
          <Rotulo>Média de Notas</Rotulo>

          <Valor>{mediaNotas.toFixed(1)} / 5.0</Valor>

          <EstrelasMedia>
            {[1, 2, 3, 4, 5].map((estrela) => (
              <Star
                key={estrela}
                size={16}
                fill={
                  estrela <= estrelasPreenchidas
                    ? '#eab308'
                    : 'none'
                }
                color={
                  estrela <= estrelasPreenchidas
                    ? '#eab308'
                    : '#cbd5e1'
                }
              />
            ))}
          </EstrelasMedia>
        </Info>

        <IconeContainer corFundo="#fefce8" corIcone="#eab308">
          <Star size={24} />
        </IconeContainer>
      </Card>

      {/* CARD 3: CLIENTES SATISFEITOS */}
      <Card>
        <Info>
          <Rotulo>Satisfeitos (IA)</Rotulo>

          <Valor>{totalPositivos}</Valor>
        </Info>

        <IconeContainer corFundo="#f0fdf4" corIcone="#22c55e">
          <Smile size={24} />
        </IconeContainer>
      </Card>
    </GridCards>
  );
};

export default CardResumo;