import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; 
import logoBlue from '../assets/logo/logoBlue.svg';
import logoWhite from '../assets/logo/logoWhite.svg';
import './Header.css';

export function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerRef = useRef(null);

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

    return (
        <header ref={headerRef} className="site-header">
            <div className="header-container">

                <div className="logo-container">
                    <img src={isDarkMode ? logoWhite : logoBlue} alt="Engrenagem GJRM Engenharia" className='gear-icon'/>
                    <span className="logo-text"><a href="#">GJRM</a></span>
                </div>

                <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a></li>
                        <li><a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a></li>
                        <li><a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a></li>
                        <li><a href="#contato" className="nav-contato-btn" onClick={() => setIsMobileMenuOpen(false)}>Contatos</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button 
                        className={`custom-theme-switch ${isDarkMode ? 'dark' : 'light'}`}
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        aria-label="Alterar Tema">
                            <div className="switch-thumb">
                                {isDarkMode ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
                            </div>
                    </button>

                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir Menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>
        </header>
    );
}