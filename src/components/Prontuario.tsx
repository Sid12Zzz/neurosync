import React from 'react';
import { Search, UploadCloud, Download, FileText, Clock } from 'lucide-react';

export default function Prontuario() {
  return (
    <div className="prontuario-container">
      
      {/* Área de Busca - Estilo Pílula */}
      <header className="card search-card">
        <h2 className="titulo-secao">Consultar Prontuário</h2>
        <div className="search-bar">
          <div className="input-wrapper">
            <Search size={20} color="#a0aec0" />
            <input type="text" placeholder="Digite o Nome ou CPF do paciente..." />
          </div>
          <button className="btn-neuro-cyan">Buscar Paciente</button>
        </div>
      </header>

      <div className="prontuario-grid">
        
        {/* Lado Esquerdo: Histórico e Evolução */}
        <section className="card evolucao-card">
          <h3 className="titulo-secao">Evolução da Sessão</h3>
          
          <div className="nova-anotacao">
            <textarea placeholder="Registre as observações clínicas e comportamento do paciente hoje..."></textarea>
            <div className="action-row">
              <button className="btn-neuro-cyan">Salvar Registro</button>
            </div>
          </div>

          <hr className="divider" />

          {/* Timeline de sessões */}
          <div className="timeline">
            <div className="timeline-item">
              <span className="date-badge"><Clock size={12} /> Ontem, 14:30</span>
              <p>Paciente apresentou melhora na concentração durante a execução dos exercícios lógicos. Nível de ansiedade reduzido em relação à última sessão.</p>
            </div>
            <div className="timeline-item">
              <span className="date-badge"><Clock size={12} /> Semana passada</span>
              <p>Sessão inicial de avaliação. Realizada anamnese e aplicação do primeiro teste cognitivo.</p>
            </div>
          </div>
        </section>

        {/* Lado Direito: Anexos e Documentos */}
        <aside className="card anexos-card">
          <h3 className="titulo-secao">Arquivos e Pareceres</h3>
          
          <div className="upload-dropzone">
            <UploadCloud size={40} color="#00c4cc" className="upload-icon" />
            <p>Arraste e solte arquivos aqui</p>
            <span className="upload-hint">PDFs, imagens ou provas</span>
            <button className="btn-neuro-outline">Selecionar arquivo</button>
          </div>

          <div className="arquivos-lista">
            <div className="arquivo-item">
              <div className="arquivo-info">
                <FileText size={16} color="#1a2b4c" />
                <span>Avaliacao_Neuro.pdf</span>
              </div>
              <button className="btn-icon"><Download size={16} /></button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}