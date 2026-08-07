import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Plans } from './pages/Plans';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';

// Scroll to top automatically on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ilumina-creme text-ilumina-texto selection:bg-ilumina-areia/50 selection:text-ilumina-marrom">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-ilumina" element={<About />} />
            <Route path="/aulas" element={<Classes />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/contato" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
