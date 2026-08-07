import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TECNOFIT_URL } from '../../constants/config';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'A Ilumina', path: '/a-ilumina' },
    { name: 'Aulas', path: '/aulas' },
    { name: 'Planos', path: '/planos' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-1 shadow-soft border-b border-ilumina-areia/20'
          : 'bg-transparent py-1.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="group flex items-center gap-3">
          <img
            src="/imagem/IMG_9241.PNG"
            alt="ILUMINA — Yoga & Bem-Estar"
            className="h-[2cm] sm:h-[3cm] max-h-[3cm] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-ilumina-gold font-semibold'
                    : 'text-ilumina-texto hover:text-ilumina-marrom'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ilumina-gold rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={TECNOFIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs uppercase tracking-widest font-semibold text-ilumina-creme bg-ilumina-marrom rounded-full shadow-md transition-all duration-300 hover:bg-ilumina-gold hover:shadow-lg active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>AGENDAR AULA</span>
              <i className="bi bi-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ilumina-texto hover:text-ilumina-marrom focus:outline-none transition-colors"
          aria-label="Abrir menu de navegação"
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden glass-nav border-b border-ilumina-areia/30 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `py-2 text-base font-medium transition-colors border-b border-ilumina-areia/10 flex items-center justify-between ${
                        isActive
                          ? 'text-ilumina-gold font-semibold pl-2 border-l-2 border-ilumina-gold'
                          : 'text-ilumina-texto hover:text-ilumina-marrom'
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <i className="bi bi-chevron-right text-xs opacity-40"></i>
                  </NavLink>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={TECNOFIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-widest font-semibold text-ilumina-creme bg-ilumina-marrom rounded-full shadow-md hover:bg-ilumina-gold transition-colors text-center"
                >
                  <i className="bi bi-calendar-check mr-2"></i>
                  AGENDAR AULA NO APP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
