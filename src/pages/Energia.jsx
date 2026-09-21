import React, { useState, useEffect, useRef } from 'react';
// Agora importamos os ícones do Lucide que o seu Contacts.jsx original usa
import { Sun, Moon, Menu, X, Mail, Phone, MapPin, ArrowUpRight, MessageCircle, ChevronDown } from 'lucide-react'; 
import logoBlue from '../assets/logo/logoBlue.svg';
import logoWhite from '../assets/logo/logoWhite.svg';

import imgEvCharger from './evcharger.jpg';
import imgPanel from './panel.jpg';
import imgPanelMan from './panelman.jpg';
import imgUs from './Us.jpg';

import '../components/Header.css'; 
import './Energia.css';

/* ==========================================
   ÍCONES MODERNOS (Para os Diferenciais)
============================================= */
const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 22-8-4.5v-6A10 10 0 0 1 12 2a10 10 0 0 1 8 9.5v6Z"/><path d="m9 12 2 2 4-4"/></svg>
);
const HardHatIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h0"/><path d="M14 6h0a6 6 0 0 1 6 6v3"/></svg>
);
const SparklesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/></svg>
);
const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
);

export default function Energia() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = "GJRM Engenharia | Soluções em Energia";
  }, []);

  // Estado do formulário copiado do seu site principal
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Handlers do Formulário do site principal
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numeroGJRM = "5521983873080"; 

    const texto = `*Novo Contato via Landing Page de Energia* \n\n` +
                  `*Nome/Empresa:* ${formData.nome}\n` +
                  `*Telefone:* ${formData.telefone}\n` +
                  `*E-mail:* ${formData.email}\n` +
                  `*Serviço:* ${formData.servico}\n\n` +
                  `*Detalhes do Projeto:*\n${formData.mensagem}`;

    const textoCodificado = encodeURIComponent(texto);
    const urlWhatsApp = `https://wa.me/${numeroGJRM}?text=${textoCodificado}`;
    window.open(urlWhatsApp, '_blank');

    setFormData({ nome: '', email: '', telefone: '', servico: '', mensagem: '' });
  };

  return (
    <div className="energia-wrapper">
      
      {/* HEADER */}
      <header ref={headerRef} className="site-header energia-header-override">
        <div className="header-container">
          <div className="logo-container">
            <img src={isDarkMode ? logoWhite : logoBlue} alt="Engrenagem GJRM Engenharia" className='gear-icon'/>
            <span className="logo-text">GJRM <span style={{ color: 'var(--accent)', fontWeight: 300 }}>| SAR</span></span>
          </div>
          <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="/energia" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Sobre</a></li>
              <li><a href="#diferenciais" className={activeSection === 'diferenciais' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</a></li>
              <li><a href="#servicos" className={activeSection === 'servicos' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Serviços</a></li>
              <li><a href="#contato" className={activeSection === 'contato' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contatos</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className={`custom-theme-switch ${isDarkMode ? 'dark' : 'light'}`} onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Alterar Tema">
              <div className="switch-thumb">{isDarkMode ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}</div>
            </button>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir Menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="energia-hero">
        <div className="hero-content">
          <span className="subtitle-highlight">Soluções em Eletromobilidade e Energia Solar</span>
          <h1 className="hero-title">A Execução Técnica da Sua Energia!</h1>
          <p className="hero-desc">Instalação especializada de infraestrutura para carregadores veiculares e painéis solares. Mão de obra rigorosa e acabamento impecável no Rio de Janeiro.</p>
          <a href="https://wa.me/5521983873080?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20energia%20da%20GJRM%20Engenharia%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20execu%C3%A7%C3%A3o%20de%20uma%20infraestrutura%20(Carregador%20EV%20/%20Painel%20Solar)." target="_blank" rel="noreferrer" className="btn-primary">Fale com um Engenheiro</a>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="sobre" className="section-padding about-section">
        <div className="container grid-2">
          <div className="about-text">
            <span className="section-subtitle">POR QUE NÓS</span>
            <h2 className="section-title">Mão de Obra Especializada</h2>
            <p>Quer você seja um cliente residencial ou um condomínio de grande porte, a instalação de equipamentos de alta potência exige responsabilidade. Nós não vendemos os sistemas, nosso foco é 100% na qualidade da execução.</p>
            <p className="p-before-btn">Garantimos que a infraestrutura do seu veículo elétrico ou painel solar seja montada seguindo rigorosamente os projetos e normas, protegendo seu patrimônio e a garantia dos seus equipamentos.</p>
            <a href="#formulario-contato" className="btn-secondary">Saber Mais</a>
          </div>
          <div className="about-image">
            <img src={imgUs} alt="Engenheiro instalando painel solar" className="foto-sobre" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="diferenciais" className="section-padding benefits-section bg-alt">
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">NOSSOS DIFERENCIAIS</span>
            <h2 className="section-title">Benefícios Exclusivos</h2>
          </div>
          <div className="grid-3">
            <div className="benefit-card-container" tabIndex="0">
              <div className="benefit-card-inner">
                <div className="benefit-card-front">
                  <div className="icon-circle"><ShieldIcon /></div>
                  <h3>Segurança Total <span className="mobile-tap-hint"><ChevronDownIcon /></span></h3>
                </div>
                <div className="benefit-card-back">
                  <h3>Segurança Total</h3>
                  <p>Dimensionamento de cabos e disjuntores focados em evitar qualquer risco de sobrecarga ou curtos-circuitos.</p>
                </div>
              </div>
            </div>
            <div className="benefit-card-container" tabIndex="0">
              <div className="benefit-card-inner">
                <div className="benefit-card-front">
                  <div className="icon-circle"><HardHatIcon /></div>
                  <h3>Rigor Técnico <span className="mobile-tap-hint"><ChevronDownIcon /></span></h3>
                </div>
                <div className="benefit-card-back">
                  <h3>Rigor Técnico</h3>
                  <p>Unimos o projeto detalhado da SAR Engenharia com a nossa execução limpa, organizada e pontual em campo.</p>
                </div>
              </div>
            </div>
            <div className="benefit-card-container" tabIndex="0">
              <div className="benefit-card-inner">
                <div className="benefit-card-front">
                  <div className="icon-circle"><SparklesIcon /></div>
                  <h3>Acabamento Premium <span className="mobile-tap-hint"><ChevronDownIcon /></span></h3>
                </div>
                <div className="benefit-card-back">
                  <h3>Acabamento Premium</h3>
                  <p>O serviço só é finalizado quando eletrocalhas, tubulações e o ambiente entregue estão em perfeito estado visual e funcional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="section-padding services-section">
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">O QUE FAZEMOS</span>
            <h2 className="section-title">Nossos Serviços</h2>
          </div>
          <div className="grid-3">
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src={imgEvCharger} alt="Carregadores Veiculares" className="foto-servico" loading="lazy" decoding="async" />
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-content">
                <h3>Carregadores Veiculares</h3>
                <p>Montagem de quadros com DR específico, passagem de cabeamento antichama e fixação do Wallbox em residências e garagens.</p>
                <a href="#formulario-contato" className="service-link">Solicitar Orçamento <span>➔</span></a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src={imgPanel} alt="Painéis Fotovoltaicos" className="foto-servico" loading="lazy" decoding="async" />
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-content">
                <h3>Painéis Fotovoltaicos</h3>
                <p>Fixação das estruturas de suporte em telhados e passagem segura de toda a linha de corrente contínua até o inversor.</p>
                <a href="#formulario-contato" className="service-link">Solicitar Orçamento <span>➔</span></a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-img-wrapper">
                <img src={imgPanelMan} alt="Adequação de Infraestrutura" className="foto-servico" loading="lazy" decoding="async" />
                <div className="service-img-overlay"></div>
              </div>
              <div className="service-content">
                <h3>Adequação de Infraestrutura</h3>
                <p>Preparação e redimensionamento da rede elétrica local para suportar a demanda dos novos equipamentos com segurança.</p>
                <a href="#formulario-contato" className="service-link">Solicitar Orçamento <span>➔</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABA DE CONTATOS DO SITE PRINCIPAL */}
      <section id="contato" className="section-padding contact-section bg-alt">
        <div className="container">
          <div className="contact-container">
            
            {/* Coluna da Esquerda: Textos e Cartões em Pílula */}
            <div className="contact-left">
                <div className="contact-header-left">
                    <span className="section-subtitle">Fale Conosco</span>
                    <h2 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', textAlign: 'left' }}>Inicie seu projeto</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Tem dúvidas ou está pronto para transformar sua infraestrutura com a nossa mão de obra técnica especializada?
                    </p>
                </div>

                <div className="glass-cards-container">
                    <a href="mailto:contato@gjrmengenharia.com.br" className="glass-info-card">
                        <div className="gic-icon"><Mail size={20} /></div>
                        <div className="gic-text">
                            <span className="gic-label">E-mail corporativo</span>
                            <span className="gic-value">contato@gjrmengenharia.com.br</span>
                        </div>
                        <div className="gic-arrow"><ArrowUpRight size={18} /></div>
                    </a>

                    <a href="tel:+5521983873080" className="glass-info-card">
                        <div className="gic-icon"><Phone size={20} /></div>
                        <div className="gic-text">
                            <span className="gic-label">Ligue para nós</span>
                            <span className="gic-value">+55 (21) 98387-3080</span>
                        </div>
                        <div className="gic-arrow"><ArrowUpRight size={18} /></div>
                    </a>

                    <div className="glass-info-card no-hover">
                        <div className="gic-icon"><MapPin size={20} /></div>
                        <div className="gic-text">
                            <span className="gic-label">Nossa atuação</span>
                            <span className="gic-value">Rio de Janeiro, RJ</span>
                        </div>
                    </div>

                    <a href="https://wa.me/5521983873080?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20energia%20solar%20da%20GJRM%20Engenharia%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20execu%C3%A7%C3%A3o%20de%20uma%20infraestrutura%20(Carregador%20EV%20/%20Painel%20Solar)." target="_blank" rel="noopener noreferrer" className="glass-info-card wpp-card">
                        <div className="gic-icon wpp-icon"><MessageCircle size={20} /></div>
                        <div className="gic-text">
                            <span className="gic-value">Falar direto no WhatsApp</span>
                        </div>
                        <div className="gic-arrow"><ArrowUpRight size={18} /></div>
                    </a>
                </div>
            </div>

            {/* Coluna da Direita: Formulário */}
            <div className="contact-right" id="formulario-contato" >
                <div className="glass-form-container">
                    <form onSubmit={handleSubmit} className="glass-form">
                        
                        <div className="gf-row">
                            <div className="gf-group">
                                <label htmlFor="nome">Nome ou Empresa</label>
                                <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="gf-row split">
                            <div className="gf-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="gf-group">
                                <label htmlFor="telefone">Telefone / WhatsApp</label>
                                <input type="tel" id="telefone" value={formData.telefone} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="gf-row">
                            <div className="gf-group">
                                <label htmlFor="servico">Tipo de Serviço</label>
                                <div className="select-wrapper">
                                    <select id="servico" value={formData.servico} onChange={handleChange} required>
                                        <option value="" disabled>Selecione a área de atuação</option>
                                        <option value="Carregadores Veiculares (EV)">Carregadores Veiculares (EV)</option>
                                        <option value="Painéis Fotovoltaicos">Painéis Fotovoltaicos</option>
                                        <option value="Adequação Elétrica">Adequação de Infraestrutura</option>
                                        <option value="Outros Serviços">Outros Serviços</option>
                                    </select>
                                    <ChevronDown size={18} className="select-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="gf-row">
                            <div className="gf-group">
                                <label htmlFor="mensagem">Detalhes do Projeto</label>
                                <textarea id="mensagem" rows="3" value={formData.mensagem} onChange={handleChange} required></textarea>
                            </div>
                        </div>

                        <button type="submit" className="glass-submit-btn">
                            Enviar Solicitação
                        </button>

                    </form>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="container footer-content-centered">
          
          <p>Copyright © {new Date().getFullYear()} GJRM Engenharia. Parceria SAR Engenharia. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}