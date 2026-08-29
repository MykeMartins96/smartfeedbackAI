import React from 'react';

import styled from 'styled-components';

import { Star, MessageSquareCode } from 'lucide-react';

// --- ELEMENTOS ESTILIZADOS COM STYLED-COMPONENTS ---

const ContainerLista = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Titulo = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SemDados = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  text-align: center;
  padding: 32px 0;
`;

const ItemFeedback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const LinhaSuperior = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

const SeloSentimento = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  text-transform: uppercase;

  background-color: ${(props) =>
    props.tipo === 'Positivo'
      ? '#dcfce7'
      : props.tipo === 'Negativo'
        ? '#fee2e2'
        : '#f1f5f9'};

  color: ${(props) =>
    props.tipo === 'Positivo'
      ? '#166534'
      : props.tipo === 'Negativo'
        ? '#991b1b'
        : '#475569'};
`;

const BlocoEstrelas = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const TextoBruto = styled.p`
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.5;
  font-style: italic;
  background-color: #f8fafc;
  padding: 10px;
  border-radius: 6px;
  border-left: 3px solid #cbd5e1;
`;

const ResumoIA = styled.p`
  font-size: 0.9rem;
  color: #0f172a;
  font-weight: 500;
  display: flex;
  align-items: flex-start;
  gap: 6px;

  span {
    color: #3b82f6;
    font-weight: 600;
  }
`;

// --- COMPONENTE PRINCIPAL REACT ---

const ListaFeedback = ({ feedbacks }) => {
  if (feedbacks.length === 0) {
    return (
      <ContainerLista>
        <Titulo>
          <MessageSquareCode size={20} />
          Histórico de Análises
        </Titulo>

        <SemDados>
          Nenhum feedback analisado ainda. Cole um texto acima para começar!
        </SemDados>
      </ContainerLista>
    );
  }

  return (
    <ContainerLista>
      <Titulo>
        <MessageSquareCode size={20} />
        Histórico de Análises
      </Titulo>

      {feedbacks.map((item) => {
        const nota = Number(item.nota) || 0;

        return (
          <ItemFeedback key={item._id}>
            <LinhaSuperior>
              <SeloSentimento tipo={item.sentimento}>
                {item.sentimento}
              </SeloSentimento>

              <BlocoEstrelas>
                {[1, 2, 3, 4, 5].map((estrela) => (
                  <Star
                    key={estrela}
                    size={16}
                    fill={estrela <= nota ? '#eab308' : 'none'}
                    color={estrela <= nota ? '#eab308' : '#cbd5e1'}
                  />
                ))}
              </BlocoEstrelas>
            </LinhaSuperior>

            <TextoBruto>
              "{item.texto}"
            </TextoBruto>

            <ResumoIA>
              <span>Insight da IA:</span>
              {item.resumoIA || 'Sem insight disponível'}
            </ResumoIA>
          </ItemFeedback>
        );
      })}
    </ContainerLista>
  );
};

export default ListaFeedback;