import { HardHat, Network, Cctv, Zap, Check, ChevronDown } from 'lucide-react';
import './Services.css';

export function Services() {
    const servicosData = [
        {
            id: 1,
            icon: <Network size={32} strokeWidth={1.5} />,
            title: "Infraestrutura de TI",
            description: "Execução técnica para redes corporativas de alto desempenho e estabilidade.",
            tasks: ["Cabeamento estruturado", "Montagem e organização de Racks", "Lançamento de Fibra Óptica", "Identificação e certificação"]
        },
        {
            id: 2,
            icon: <Cctv size={32} strokeWidth={1.5} />,
            title: "Segurança e CFTV",
            description: "Mão de obra especializada para instalação de sistemas de monitoramento.",
            tasks: ["Passagem de cabeamento", "Fixação e ajuste de câmeras", "Instalação de eletrodutos", "Configuração de DVR/NVR"]
        },
        {
            id: 3,
            icon: <Zap size={32} strokeWidth={1.5} />,
            title: "Elétrica",
            description: "Adequação e instalação elétrica com rigoroso padrão de segurança e normas técnicas.",
            tasks: ["Montagem de quadros (QDC)", "Passagem de fiação", "Instalação de tomadas e no-breaks", "Iluminação técnica"]
        },
        {
            id: 4,
            icon: <HardHat size={32} strokeWidth={1.5} />,
            title: "Construção Civil",
            description: "Suporte civil necessário para a viabilização da infraestrutura tecnológica.",
            tasks: ["Adequações de ambientes", "Abertura e fechamento de rasgos", "Acabamentos finos", "Preparação de shafts"]
        }
    ];

    return (
        <section id="servicos" className="services-section">
            <div className="services-container">
                
                <div className="premium-header">
                    <span className="premium-subtitle">Nossas Especialidades</span>
                    <h2>Mão de Obra Qualificada</h2>
                    <p className="services-intro">
                        Garantimos a execução impecável de cada etapa do seu projeto. 
                        Nossa equipe técnica atua diretamente no campo para entregar resultados precisos.
                    </p>
                </div>

                <div className="services-grid">
                    {servicosData.map((servico) => (
                        /* O tabIndex="0" permite que o card seja focado ao tocar no celular */
                        <div key={servico.id} className="service-card" tabIndex="0">
                            
                            <div className="service-icon-wrapper">
                                {servico.icon}
                            </div>
                            
                            <h3>
                                {servico.title}
                                <span className="mobile-tap-hint"><ChevronDown size={20} /></span>
                            </h3>
                            
                            <p className="service-desc">{servico.description}</p>
                            
                            {/* O container das tasks fica com altura zero até sofrer o hover */}
                            <div className="service-tasks-wrapper">
                                <div className="service-divider"></div>
                                <ul className="service-tasks">
                                    {servico.tasks.map((task, index) => (
                                        <li key={index}>
                                            <Check size={16} className="check-task" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}