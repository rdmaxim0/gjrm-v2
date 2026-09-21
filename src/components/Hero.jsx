import heroBg from '../assets/hero.jpg';
import './Hero.css';

export function Hero() {
    return (
        <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            
            <div className="hero-container">
                <div className="hero-content">
                    
                    <span className="hero-badge fade-up-1">
                        Construção • TI • CFTV • Elétrica
                    </span>
                    
                    <h1 className="fade-up-2">
                        Excelência em Mão de Obra Técnica Especializada
                    </h1>
                    
                    <p className="fade-up-3">
                        Garantimos a execução impecável do seu projeto. Fornecemos mão de obra altamente qualificada para infraestrutura tecnológica e construção civil.
                    </p>
                    
                    <div className="hero-actions fade-up-4">
                        <a href="#formulario-contato" className="hero-btn-primary">
                            Falar com um Especialista
                        </a>
                        <a href="#portfolio" className="hero-btn-secondary">
                            Ver Nossos Serviços
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}