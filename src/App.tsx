import React, { useState } from 'react';
import './App.css';
import { BrainCircuit } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Agenda from './components/Agenda';
import Prontuario from './components/Prontuario';

// Componente temporário para as telas que ainda não fizemos
const Placeholder = ({ name }: { name: string }) => (
  <div className="card">
    <h2>Tela de {name}</h2>
    <p>Conteúdo em desenvolvimento...</p>
  </div>
);

export default function App() {
  // 1. Nossos estados (memória do componente)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Início'); // Mudando o padrão para iniciar no Dashboard

  // 2. AQUI ESTÁ O SWITCH!
  // Esta função decide qual tela renderizar com base no menu clicado
  const renderContent = () => {
    switch (activeTab) {
      case 'Início':
        return <Dashboard />;
      case 'Prontuário':
        return <Prontuario />;
      case 'Pacientes':
        return <Placeholder name="Pacientes" />;
      case 'Agenda':
        return <Agenda />;
      case 'Financeiro':
        return <Placeholder name="Financeiro" />;
      case 'Pareceres':
        return <Placeholder name="Pareceres" />;
      default:
        return <Dashboard />;
    }
  };

  // 3. O visual (o que vai para a tela)
  return (
    <div className="dashboard-container">
      {/* Barra Lateral (Sidebar) */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              <BrainCircuit color="white" size={24} />
            </div>{' '}
            <span>NeuroSync</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {[
              'Início',
              'Pacientes',
              'Agenda',
              'Prontuário',
              'Financeiro',
              'Pareceres',
            ].map((tab) => (
              <li key={tab}>
                <a
                  href={`#${tab}`}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Área Principal */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <button
            className="toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '←' : '→'}
          </button>

          <div className="user-profile">
            <div className="user-info">
              <span>Prof. Sidnei Junior</span>
              <small>Neuropsicopedagogo</small>
            </div>
            <img
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop"
              alt="Foto do perfil"
              className="profile-img"
            />
          </div>
        </header>

        {/* Aqui é onde a mágica do Switch acontece! 
            Chamamos a função e ela joga a tela correta aqui dentro */}
        <section className="content-area">{renderContent()}</section>

        <footer className="footer">
          <p>NeuroSync © 2026 - Todos os direitos reservados</p>
        </footer>
      </main>
    </div>
  );
}
