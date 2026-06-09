import React from 'react';
import { Users, Calendar, CheckCircle2, FileText, BookOpen, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const tarefas = [
    { id: 1, tarefa: "Finalizar parecer técnico - Paciente João Silva", prioridade: "Alta" },
    { id: 2, tarefa: "Registrar evolução da sessão - Maria Oliveira", prioridade: "Média" },
    { id: 3, tarefa: "Confirmar agendamento de amanhã (Notificação Automática)", prioridade: "Baixa" }
  ];

  const documentacoes = [
    { id: 1, titulo: "Manual de Aplicação de Testes Cognitivos", tipo: "Interno" },
    { id: 2, titulo: "Diretrizes de Prática Clínica e Ética", tipo: "Institucional" },
    { id: 3, titulo: "Tabela de Consulta Rápida (CID-11 / DSM-5)", tipo: "Referência" },
    { id: 4, titulo: "Guia de Conformidade e Proteção de Dados (LGPD)", tipo: "Segurança" }
  ];

  return (
    <div className="dashboard-view">
      
      {/* Indicadores Principais */}
      <div className="summary-grid">
        <div className="card summary-card">
          <div className="icon"><Users size={28} /></div>
          <div>
            <h3>Pacientes Ativos</h3>
            <p className="stat">12</p>
          </div>
        </div>
        
        <div className="card summary-card">
          <div className="icon"><Calendar size={28} /></div>
          <div>
            <h3>Sessões Hoje</h3>
            <p className="stat">4</p>
          </div>
        </div>
        
        <div className="card summary-card">
          <div className="icon"><CheckCircle2 size={28} /></div>
          <div>
            <h3>Pagamentos pendetes</h3>
            <p className="stat">2</p>
          </div>
        </div>
      </div>

      {/* Grid de Conteúdo Expandido */}
      <div className="main-dashboard-grid">
        
        {/* Coluna da Esquerda: Lógica de Atendimento */}
        <section className="card tasks-section">
          <h3 className="titulo-bloco">Fila de Tarefas Operacionais</h3>
          <ul className="task-list">
            {tarefas.map(t => (
              <li key={t.id} className="task-item">
                <input type="checkbox" />
                <span className="task-text">{t.tarefa}</span>
                <span className={`priority-badge ${t.prioridade.toLowerCase()}`}>{t.prioridade}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Coluna da Direita: Documentos e Consultas Técnicas */}
        <div className="sidebar-cards-gap">
          
          {/* Bloco de Pareceres */}
          <section className="card reports-section">
            <h3 className="titulo-bloco">Pareceres Recentes</h3>
            <div className="mini-report-list">
              <div className="report-item">
                <span className="report-file-name">
                  <FileText size={16} />
                  Parecer_Neuro_V1.pdf
                </span>
                <button className="btn-icon-text">Editar</button>
              </div>
            </div>
          </section>

          {/* NOVO BLOCO: Central de Documentação Técnica */}
          <section className="card docs-section">
            <h3 className="titulo-bloco">Consultar Documentação</h3>
            <p className="helper-text">Manuais e referências para apoio ao diagnóstico:</p>
            <div className="docs-list">
              {documentacoes.map(doc => (
                <div key={doc.id} className="doc-link-item">
                  <div className="doc-meta">
                    <BookOpen size={16} className="text-cyan" />
                    <span className="doc-title">{doc.titulo}</span>
                  </div>
                  <span className="doc-tag">{doc.tipo}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}