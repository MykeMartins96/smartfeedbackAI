import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrainCircuit } from 'lucide-react';
import api from './services/api';
import GlobalStyles from './styles/GlobalStyles';
import Formulario from './components/Formulario';
import CardResumo from './components/CardResumo';
import ListaFeedback from './components/ListaFeedback';

// --- ELEMENTOS ESTILIZADOS COM STYLED-COMPONENTS ---
const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 20px;
  margin-bottom: 8px;
`;

const LogoIcone = styled.div`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TituloPrincipal = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0f172a;
  
  span {
    color: #3b82f6;
  }
`;

const ConteudoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
    align-items: start;
  }
`;

// --- COMPONENTE PRINCIPAL MESTRE ---
function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const buscarDadosDoBanco = async () => {
      try {
        const resposta = await api.get('/feedbacks');
        setFeedbacks(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar o histórico inicial do banco:', erro);
      }
    };

    buscarDadosDoBanco();
  }, []);

  const lidarComNovoFeedback = (novoItem) => {
    setFeedbacks((dadosAntigos) => [novoItem, ...dadosAntigos]);
  };

  return (
    <>
      <GlobalStyles />
      
      <DashboardContainer>
        {/* CABEÇALHO */}
        <Cabecalho>
          <LogoIcone>
            <BrainCircuit size={28} />
          </LogoIcone>
          <TituloPrincipal>SmartFeedback <span>AI</span></TituloPrincipal>
        </Cabecalho>

        {/* CARDS INDICADORES */}
        <CardResumo feedbacks={feedbacks} />

        {/* ESTRUTURA CENTRAL */}
        <ConteudoLayout>
          {/* COLUNA ESQUERDA */}
          <Formulario aoAdicionarFeedback={lidarComNovoFeedback} />
          
          {/* COLUNA DIREITA */}
          <ListaFeedback feedbacks={feedbacks} />
        </ConteudoLayout>
      </DashboardContainer>
    </>
  );
}

export default App;
