import { CheckCircle2 } from 'lucide-react';
import './About.css';

export function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content-wrapper">
                    
                    {/* Coluna da Esquerda: Texto e Credibilidade */}
                    <div className="about-text-content">
                        <span className="premium-subtitle">Nossa Essência</span>
                        <h2>Engenharia e infraestrutura levadas a sério.</h2>
                        
                        <p className="about-description">
                            A GJRM Engenharia nasceu com um propósito claro: elevar o padrão de qualidade na execução de projetos corporativos e industriais. 
                        </p>
                        <p className="about-description highlight">
                            Nosso modelo de negócio é focado 100% na prestação de serviço. Não vendemos hardwares; fornecemos inteligência e mão de obra técnica qualificada.
                        </p>

                        <ul className="premium-list">
                            <li>
                                <CheckCircle2 size={20} className="check-icon" />
                                <span><strong>Foco em Execução:</strong> Instalação e configuração de precisão.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className="check-icon" />
                                <span><strong>Mão de Obra Especializada:</strong> Equipe técnica certificada.</span>
                            </li>
                            <li>
                                <CheckCircle2 size={20} className="check-icon" />
                                <span><strong>Atuação Multidisciplinar:</strong> TI, CFTV e Elétrica.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna da Direita: Imagem Premium */}
                    <div className="about-image-wrapper">
                        <div className="image-glow"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800" 
                            alt="Equipe técnica GJRM" 
                            className="premium-image"
                        />
                        {/* Cartão de vidro sobreposto para dar um toque sofisticado */}
                        <div className="experience-glass-card">
                            <h3>+10</h3>
                            <span>Anos de<br/>Expertise</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}