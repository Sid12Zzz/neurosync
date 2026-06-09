import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  XCircle,
} from 'lucide-react';

export default function Agenda() {
  // Simulando os dados que viriam do banco de dados no futuro
  const agendamentos = [
    {
      id: 1,
      horario: '09:00',
      paciente: 'João Silva',
      tipo: 'Avaliação Inicial',
      status: 'Confirmado',
    },
    {
      id: 2,
      horario: '10:30',
      paciente: 'Maria Oliveira',
      tipo: 'Sessão Regular',
      status: 'Aguardando',
    },
    {
      id: 3,
      horario: '14:00',
      paciente: 'Pedro Souza',
      tipo: 'Sessão Regular',
      status: 'Cancelado',
    },
  ];

  return (
    <div className="agenda-container">
      {/* Cabeçalho da Agenda: Controle de Datas */}
      <header className="card agenda-header">
        <div className="date-selector">
          <button className="btn-icon-large">
            <ChevronLeft />
          </button>
          <div className="current-date">
            <CalendarIcon size={24} color="#4a5568" />
            <h2>Hoje, 27 de Maio de 2026</h2>
          </div>
        </div>
        <div className="agenda-actions">
        <button className="btn-neuro-cyan">+ Novo Agendamento</button>
        <button className="btn-icon-large">
            <ChevronRight />
          </button>
                </div>
                
          
      </header>

      {/* Lista Cronológica de Sessões */}
      <div className="agenda-list">
        {agendamentos.map((sessao) => (
          <div
            key={sessao.id}
            className={`card agenda-card ${sessao.status.toLowerCase()}`}
          >
            {/* Horário */}
            <div className="time-block">
              <Clock size={20} color="#718096" />
              <span>{sessao.horario}</span>
            </div>

            {/* Informações do Paciente */}
            <div className="patient-info">
              <div className="patient-name">
                <User size={18} color="#4a5568" />
                <h4>{sessao.paciente}</h4>
              </div>
              <span className="session-type">{sessao.tipo}</span>
            </div>

            {/* Status Visual */}
            <div className="status-indicator">
              {sessao.status === 'Confirmado' && (
                <span className="badge confirm">
                  <CheckCircle2 size={14} /> Confirmado
                </span>
              )}
              {sessao.status === 'Aguardando' && (
                <span className="badge warn">
                  <AlertCircle size={14} /> Aguardando
                </span>
              )}
              {sessao.status === 'Cancelado' && (
                <span className="badge error">
                  <XCircle size={14} /> Cancelado
                </span>
              )}
            </div>

            {/* Ações Rápidas */}
            <div className="card-actions">
              <button
                className="btn-outline-success"
                disabled={sessao.status === 'Cancelado'}
              >
                <PlayCircle size={16} /> Iniciar Sessão
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
