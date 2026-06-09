import React, { useState } from 'react';
import { Home, Calendar, FileText, QrCode, Download, Clock, User } from 'lucide-react';

export default function PortalPaciente() {
  const [abaAtiva, setAbaAtiva] = useState('Inicio');

  return (
    <div className="portal-paciente-container">
      
      {/* Cabeçalho Fixo (Mobile) */}
      <header className="portal-header">
        <div className="paciente-info">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
            alt="Foto do Paciente" 
            className="paciente-avatar"
          />
          <div>
            <p className="boas-vindas">Olá,</p>
            <h2 className="paciente-nome">João Silva</h2>
          </div>
        </div>
      </header>

      {/* Área de Conteúdo Rolável */}
      <main className="portal-content">
        
        {/* Card de Destaque: Próxima Sessão */}
        <section className="portal-secao">
          <h3 className="titulo-secao-mobile">Sua próxima sessão</h3>
          <div className="card card-destaque-cyan">
            <div className="card-header-flex">
              <span className="badge-branca">Confirmada</span>
              <Calendar size={20} color="white" />
            </div>
            <div className="sessao-detalhes">
              <h2 className="sessao-data">18 de Maio, Quinta</h2>
              <div className="sessao-hora-prof">
                <span className="flex-item"><Clock size={16} /> 14:30</span>
                <span className="flex-item"><User size={16} /> Prof. Sidnei Junior</span>
              </div>
            </div>
          </div>
        </section>

        {/* Card de Ação: Financeiro / Pix */}
        <section className="portal-secao">
          <h3 className="titulo-secao-mobile">Financeiro</h3>
          <div className="card card-financeiro">
            <div className="financeiro-info">
              <span className="status-pendente">Aguardando Pagamento</span>
              <h3 className="valor-pix">R$ 150,00</h3>
              <p className="ref-sessao">Referente à sessão de 11/05</p>
            </div>
            <button className="btn-neuro-cyan btn-full">
              <QrCode size={18} /> Gerar Pix Copia e Cola
            </button>
          </div>
        </section>

        {/* Card de Ação: Último Documento */}
        <section className="portal-secao">
          <h3 className="titulo-secao-mobile">Último Parecer Liberado</h3>
          <div className="card card-documento">
            <div className="doc-info">
              <FileText size={24} color="#00D2D3" />
              <div>
                <h4 className="doc-nome">Avaliação_Neuro.pdf</h4>
                <span className="doc-data">Liberado em 14/05/2026</span>
              </div>
            </div>
            <button className="btn-icon-download"><Download size={20} /></button>
          </div>
        </section>
        
        {/* Espaço em branco para não esconder conteúdo atrás da barra inferior */}
        <div className="spacer-bottom"></div>
      </main>

      {/* Barra de Navegação Inferior (Bottom Nav) */}
      <nav className="bottom-nav">
        <button className={`nav-item ${abaAtiva === 'Inicio' ? 'active' : ''}`} onClick={() => setAbaAtiva('Inicio')}>
          <Home size={24} />
          <span>Início</span>
        </button>
        <button className={`nav-item ${abaAtiva === 'Agenda' ? 'active' : ''}`} onClick={() => setAbaAtiva('Agenda')}>
          <Calendar size={24} />
          <span>Agenda</span>
        </button>
        <button className={`nav-item ${abaAtiva === 'Financeiro' ? 'active' : ''}`} onClick={() => setAbaAtiva('Financeiro')}>
          <QrCode size={24} />
          <span>Pagamentos</span>
        </button>
        <button className={`nav-item ${abaAtiva === 'Documentos' ? 'active' : ''}`} onClick={() => setAbaAtiva('Documentos')}>
          <FileText size={24} />
          <span>Arquivos</span>
        </button>
      </nav>

    </div>
  );
}