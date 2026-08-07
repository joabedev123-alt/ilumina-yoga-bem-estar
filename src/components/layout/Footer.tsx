import React from 'react';
import { NavLink } from 'react-router-dom';
import { EMAIL_CONTACT, ADDRESS_TEXT, INSTAGRAM_URL, WHATSAPP_LINK } from '../../constants/config';
import { MandalaBg } from '../common/MandalaBg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ilumina-texto text-ilumina-creme relative overflow-hidden pt-16 pb-12 border-t border-ilumina-marrom/30">
      {/* Background mandala subtle decoration */}
      <MandalaBg className="absolute -bottom-24 -right-24" size={500} opacity={0.04} color="#F7F2E9" />
      <MandalaBg className="absolute -top-24 -left-24" size={400} opacity={0.03} color="#D6C4AA" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-ilumina-marrom/40">
          
          {/* COLUMN 01 */}
          <div className="space-y-4">
            <NavLink to="/" className="inline-block">
              <img
                src="/imagem/IMG_9241.PNG"
                alt="ILUMINA — Yoga & Bem-Estar"
                className="h-[3cm] w-auto object-contain brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
                style={{ height: '3cm' }}
              />
            </NavLink>
            <p className="text-sm text-ilumina-creme/70 font-light leading-relaxed">
              Um espaço para cuidar do corpo, acalmar a mente e tornar o autocuidado parte da vida real.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Ilumina"
                className="w-10 h-10 rounded-full border border-ilumina-areia/30 flex items-center justify-center text-ilumina-creme/80 hover:text-ilumina-gold hover:border-ilumina-gold transition-all duration-300"
              >
                <i className="bi bi-instagram text-lg"></i>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Ilumina"
                className="w-10 h-10 rounded-full border border-ilumina-areia/30 flex items-center justify-center text-ilumina-creme/80 hover:text-ilumina-gold hover:border-ilumina-gold transition-all duration-300"
              >
                <i className="bi bi-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* COLUMN 02 */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-ilumina-gold uppercase font-medium">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              {['Início', 'A Ilumina', 'Aulas', 'Planos', 'Eventos', 'Contato'].map((item, index) => {
                const path = index === 0 ? '/' : `/${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`;
                return (
                  <li key={item}>
                    <NavLink
                      to={path}
                      className="text-ilumina-creme/70 hover:text-ilumina-gold transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-ilumina-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 03 */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-ilumina-gold uppercase font-medium">
              Contato
            </h4>
            <ul className="space-y-3 text-sm font-light text-ilumina-creme/70">
              <li className="flex items-start gap-3">
                <i className="bi bi-whatsapp text-ilumina-gold text-base mt-0.5"></i>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-ilumina-creme transition-colors">
                  WhatsApp Ilumina
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-envelope text-ilumina-gold text-base mt-0.5"></i>
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-ilumina-creme transition-colors">
                  {EMAIL_CONTACT}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-ilumina-gold text-base mt-0.5"></i>
                <span>{ADDRESS_TEXT}</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-instagram text-ilumina-gold text-base mt-0.5"></i>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ilumina-creme transition-colors">
                  @ilumina.yoga
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 04 */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-ilumina-gold uppercase font-medium">
              Aulas
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-ilumina-creme/70">
              {['Hatha Vinyasa', 'Hatha Yoga', 'Yoga Restaurativo', 'Flexibilidade', 'Pilates Solo'].map((mod) => (
                <li key={mod} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ilumina-salvia"></span>
                  <NavLink to="/aulas" className="hover:text-ilumina-gold transition-colors">
                    {mod}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-ilumina-creme/50">
          <p>© ILUMINA — Yoga & Bem-Estar. Todos os direitos reservados.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#privacidade" className="hover:text-ilumina-creme transition-colors">
              Política de Privacidade
            </a>
            <span className="opacity-40">•</span>
            <a href="#termos" className="hover:text-ilumina-creme transition-colors">
              Termos de Uso
            </a>
            <span className="opacity-40">•</span>
            <a
              href="https://camaly.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ilumina-gold transition-colors inline-flex items-center gap-1 font-medium text-ilumina-creme/70"
            >
              <span>Produzida com</span>
              <span className="text-emerald-400">💚</span>
              <span>por</span>
              <strong className="text-ilumina-gold hover:underline">CAMALY</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
