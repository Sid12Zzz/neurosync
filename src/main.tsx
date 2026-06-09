import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// Importando os 3 portais diferentes (direto da mesma pasta)
import App from './App';
import PortalPaciente from './components/PortalPaciente';
import PortalMedico from './components/PortalMedico';

// Componente do Botão Flutuante (Ficará sempre no canto inferior direito)
function DevMenu({ setPortal }: { setPortal: (portal: string) => void }) {
  return (
    <button
      onClick={() => setPortal('menu')}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        padding: '12px 24px',
        background: '#0A192F',
        color: '#00D2D3',
        borderRadius: '30px',
        cursor: 'pointer',
        border: '2px solid #00D2D3',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      Trocar de Portal
    </button>
  );
}

// O componente "Raiz" que decide quem vai ser renderizado
function Root() {
  const [portal, setPortal] = useState('menu');

  if (portal === 'neuro')
    return (
      <>
        <App />
        <DevMenu setPortal={setPortal} />
      </>
    );
  if (portal === 'paciente')
    return (
      <>
        <PortalPaciente />
        <DevMenu setPortal={setPortal} />
      </>
    );
  if (portal === 'medico')
    return (
      <>
        <PortalMedico />
        <DevMenu setPortal={setPortal} />
      </>
    );

  // Menu Inicial
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '20px',
      }}
    >
      <h1 style={{ color: '#0A192F', marginBottom: '20px' }}>
        Ambiente de Testes
      </h1>
      <button
        onClick={() => setPortal('neuro')}
        className="btn-neuro-cyan"
        style={{ width: '300px' }}
      >
        Acessar Profissional
      </button>
      <button
        onClick={() => setPortal('paciente')}
        className="btn-neuro-cyan"
        style={{ width: '300px' }}
      >
        Acessar Paciente
      </button>
      <button
        onClick={() => setPortal('medico')}
        className="btn-neuro-cyan"
        style={{ width: '300px' }}
      >
        Acessar Médico
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
