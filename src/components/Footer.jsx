import { ArrowUp } from 'lucide-react';
import logoBlue from '../assets/logo/logoBlue.svg';
import logoWhite from '../assets/logo/logoWhite.svg';
import './Footer.css';

// Ícone do Instagram
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

// NOVO: Ícone do Facebook
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <img src={logoBlue} alt="Engrenagem GJRM" className="footer-gear footer-logo-light" />
                            <img src={logoWhite} alt="Engrenagem GJRM" className="footer-gear footer-logo-dark" />
                            <h2>GJRM</h2>
                        </div>
                        <p>
                            Excelência em mão de obra técnica especializada para infraestrutura de TI, CFTV, Elétrica e Construção Civil.
                        </p>
                        <p className="footer-cnpj">CNPJ: 48.904.488/0001-08</p>
                    </div>

                    <div className="footer-links">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">Sobre a Empresa</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                            <li><a href="#servicos">Nossos Serviços</a></li>
                            <li><a href="#contato">Fale Conosco</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Conecte-se</h4>
                        <div className="social-icons">
                            <a href="https://instagram.com/gjrmengenharia" target="_blank" rel="noopener noreferrer" aria-label="Instagram da GJRM">
                                <InstagramIcon />
                            </a>
                            {/* NOVO: Link do Facebook com o mesmo @ */}
                            <a href="https://facebook.com/gjrmengenharia" target="_blank" rel="noopener noreferrer" aria-label="Facebook da GJRM">
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GJRM Engenharia. Todos os direitos reservados.</p>
                    <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Voltar ao topo">
                        <ArrowUp size={20} />
                    </button>
                </div>

            </div>
        </footer>
    );
}