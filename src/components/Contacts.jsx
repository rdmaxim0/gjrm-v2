import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle, ChevronDown } from 'lucide-react';
import './Contacts.css';

export function Contacts() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numeroGJRM = "5521983873080"; 

        const texto = `*Novo Contato via Site - GJRM* \n\n` +
                      `*Nome/Empresa:* ${formData.nome}\n` +
                      `*Telefone:* ${formData.telefone}\n` +
                      `*E-mail:* ${formData.email}\n` +
                      `*Serviço:* ${formData.servico}\n\n` +
                      `*Detalhes do Projeto:*\n${formData.mensagem}`;

        const textoCodificado = encodeURIComponent(texto);
        const urlWhatsApp = `https://wa.me/${numeroGJRM}?text=${textoCodificado}`;
        window.open(urlWhatsApp, '_blank');

        setFormData({
            nome: '',
            email: '',
            telefone: '',
            servico: '',
            mensagem: ''
        });
    };

    return (
        <section id="contato" className="contact-section">
            
            {/* Elementos de Fundo (Referência visual) */}
            <div className="contact-bg-text">GJRM</div>
            <div className="contact-glow"></div>

            <div className="contact-container">
                
                {/* Coluna da Esquerda: Textos e Cartões em Pílula */}
                <div className="contact-left">
                    <div className="contact-header-left">
                        <span className="premium-subtitle">Fale Conosco</span>
                        <h2>Inicie seu projeto</h2>
                        <p>
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
                                <span className="gic-value">Todo o Brasil</span>
                            </div>
                        </div>

                        {/* Botão de WhatsApp direto mantendo o mesmo estilo visual */}
                        <a href="https://wa.me/5521983873080" target="_blank" rel="noopener noreferrer" className="glass-info-card wpp-card">
                            <div className="gic-icon wpp-icon"><MessageCircle size={20} /></div>
                            <div className="gic-text">
                                <span className="gic-value">Falar direto no WhatsApp</span>
                            </div>
                            <div className="gic-arrow"><ArrowUpRight size={18} /></div>
                        </a>
                    </div>
                </div>

                {/* Coluna da Direita: Formulário Glassmorphism unificado */}
                <div className="contact-right">
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
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" id="telefone" value={formData.telefone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="gf-row">
                                <div className="gf-group">
                                    <label htmlFor="servico">Tipo de Serviço</label>
                                    <div className="select-wrapper">
                                        <select id="servico" value={formData.servico} onChange={handleChange} required>
                                            <option value="" disabled>Selecione a área de atuação</option>
                                            <option value="Infraestrutura de TI e Redes">Infraestrutura de TI e Redes</option>
                                            <option value="Segurança e CFTV">Segurança e CFTV</option>
                                            <option value="Instalação Elétrica">Instalação Elétrica</option>
                                            <option value="Construção Civil">Construção Civil</option>
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
        </section>
    );
}