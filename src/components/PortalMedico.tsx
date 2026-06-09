import React, { useState } from 'react';
import {
  BrainCircuit,
  Search,
  FileText,
  Download,
  ShieldCheck,
  LogOut,
  UploadCloud,
  CheckCircle,
} from 'lucide-react';

export default function PortalMedico({
  setPortal,
}: {
  setPortal?: (portal: string) => void;
}) {
  const [busca, setBusca] = useState('');
  const [arquivoSelecionado, setArquivoSelecionado] = useState<string | null>(
    null
  );

  const pareceres = [
    {
      id: 1,
      paciente: 'João Silva',
      data: '14/05/2026',
      tipo: 'Avaliação Inicial',
      status: 'Novo',
    },
    {
      id: 2,
      paciente: 'Maria Oliveira',
      data: '02/05/2026',
      tipo: 'Relatório Semestral',
      status: 'Lido',
    },
  ];

  const handleSimularUpload = (nomePaciente: string) => {
    setArquivoSelecionado(nomePaciente);
    alert(
      `Documento de retorno anexado para o paciente ${nomePaciente}. O Prof. Sidnei Junior será notificado.`
    );
  };

  return (
    <div className="medico-container">
      <header className="medico-topbar">
        <div className="logo-container">
          <BrainCircuit size={28} color="#00D2D3" />
          <span style={{ color: '#0A192F' }}>
            Neuro<span className="text-cyan">Sync</span>
          </span>
          <span className="badge-security">Área Médica</span>
        </div>
        <div className="medico-actions">
          <div className="user-info-medico">
            <span>Dr. Carlos Mendes</span>
            <small>Neuropediatra</small>
          </div>
          <button
            className="btn-icon-danger"
            onClick={() => setPortal && setPortal('menu')}
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <main className="medico-content">
        <div className="medico-header-section">
          <h1 className="titulo-medico">Central de Pareceres</h1>
          <div className="search-bar-medico">
            <Search size={18} color="#A0AEC0" />
            <input
              type="text"
              placeholder="Filtrar paciente..."
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <div className="medico-grid">
          {pareceres.map((doc) => (
            <div key={doc.id} className="card doc-card-medico">
              <div className="doc-card-header">
                <span className="doc-date">{doc.data}</span>
                {doc.status === 'Novo' && (
                  <span className="badge-new">Novo</span>
                )}
              </div>

              <div className="doc-card-body">
                <h3 className="doc-paciente">{doc.paciente}</h3>
                <p className="doc-tipo">{doc.tipo}</p>

                {/* ÁREA DE DOWNLOAD (REFERÊNCIA) */}
                <button
                  className="btn-neuro-outline w-full"
                  style={{ marginBottom: '12px' }}
                >
                  <Download size={16} /> Baixar Parecer Neuro
                </button>

                <hr className="divider-sutil" />

                {/* ÁREA DE UPLOAD (CONTRA-REFERÊNCIA) */}
                <div className="upload-retorno-section">
                  <p className="label-upload">
                    Enviar Contra-referência (Laudo/Receita):
                  </p>
                  {arquivoSelecionado === doc.paciente ? (
                    <div className="upload-success-msg">
                      <CheckCircle size={16} /> Retorno Enviado
                    </div>
                  ) : (
                    <label className="upload-mini-dropzone">
                      <UploadCloud size={20} />
                      <span>Anexar Retorno Médico</span>
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={() => handleSimularUpload(doc.paciente)}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
