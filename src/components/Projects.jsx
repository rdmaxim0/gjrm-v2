import { useState, useRef } from 'react';
import { featuredProjects } from './projectsData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'; 
import './Projects.css';

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const handleScroll = () => {
        if (carouselRef.current) {
            const scrollPosition = carouselRef.current.scrollLeft;
            const itemWidth = carouselRef.current.children[0].clientWidth + 24; 
            const newIndex = Math.round(scrollPosition / itemWidth);
            setActiveIndex(newIndex);
        }
    };

    const scrollToIndex = (index) => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.children[0].clientWidth + 24;
            carouselRef.current.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const scrollLeft = () => {
        if (activeIndex > 0) scrollToIndex(activeIndex - 1);
    };

    const scrollRight = () => {
        if (activeIndex < featuredProjects.length - 1) scrollToIndex(activeIndex + 1);
    };

    return (
        <section id="portfolio" className="projects-section">
            <div className="projects-container">
                
                <div className="premium-header">
                    <span className="premium-subtitle">Portfólio</span>
                    <h2>Nossa Excelência em Campo</h2>
                </div>

                <div className="carousel-wrapper">
                    <div 
                        className="carousel-track" 
                        ref={carouselRef}
                        onScroll={handleScroll}
                    >
                        {featuredProjects.map((project, index) => (
                            <div 
                                key={project.id} 
                                className={`carousel-item ${index === activeIndex ? 'is-active' : ''}`}
                                onClick={() => openModal(project)}
                            >
                                <img src={project.image} alt={project.title} className="carousel-image" />
                                
                                {/* Overlay Fixo com Texto na Esquerda e Ícone na Direita */}
                                <div className="carousel-persistent-info">
                                    <div className="info-text">
                                        <span className="info-category">{project.category}</span>
                                        <h3>{project.title}</h3>
                                    </div>
                                    
                                    {/* Novo Ícone de Expansão */}
                                    <div className="expand-icon-wrapper">
                                        <Maximize2 size={20} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="carousel-navigation">
                    <button onClick={scrollLeft} aria-label="Anterior" disabled={activeIndex === 0}>
                        <ChevronLeft size={20} />
                    </button>
                    
                    {/* Indicadores Refinados */}
                    <div className="carousel-indicators">
                        {featuredProjects.map((_, index) => (
                            <button 
                                key={index} 
                                className={`premium-indicator ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => scrollToIndex(index)}
                                aria-label={`Ir para o projeto ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button onClick={scrollRight} aria-label="Próximo" disabled={activeIndex === featuredProjects.length - 1}>
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>

            {/* MODAL SPLIT (Mantido inalterado) */}
            {selectedProject && (
                <div className="split-modal-overlay" onClick={closeModal}>
                    <div className="split-modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        <button className="split-modal-close" onClick={closeModal}>
                            <X size={24} />
                        </button>
                        
                        <div className="modal-left">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                        </div>
                        
                        <div className="modal-right">
                            <div className="modal-right-content">
                                <span className="modal-category">{selectedProject.category}</span>
                                <h2>{selectedProject.title}</h2>
                                <p className="modal-client"><strong>Local:</strong> {selectedProject.client}</p>
                                
                                <div className="modal-text-block">
                                    <h4>Escopo da Mão de Obra</h4>
                                    <p>{selectedProject.description}</p>
                                </div>
                                
                                <div className="modal-footer">
                                    <a href="#contato" className="modal-action-btn" onClick={closeModal}>
                                        Solicitar Mão de Obra
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}