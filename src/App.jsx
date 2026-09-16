import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import './index.css';

import Energia from './pages/Energia'; 

function PaginaPrincipal() {
  // AQUI: Força o título correto ao entrar no site principal
  useEffect(() => {
    document.title = "GJRM Engenharia | Mão de Obra Especializada";
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/energia" element={<Energia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;