import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../../constants/config';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto">
      {/* Tooltip visible on hover or wide mobile */}
      <div
        className={`hidden sm:block transition-all duration-300 transform ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <div className="bg-ilumina-texto text-ilumina-creme text-xs tracking-wider uppercase px-3 py-1.5 rounded-full shadow-lg border border-ilumina-areia/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Fale com a Ilumina
        </div>
      </div>

      {/* Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Ilumina no WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-floating transition-all duration-300 hover:scale-105 active:scale-95 whatsapp-pulse flex items-center justify-center"
      >
        <i className="bi bi-whatsapp text-2xl leading-none"></i>
        <span className="sr-only">Fale com a Ilumina no WhatsApp</span>
      </a>
    </div>
  );
};
