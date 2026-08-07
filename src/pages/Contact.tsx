import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EMAIL_CONTACT, ADDRESS_TEXT, WORK_HOURS, INSTAGRAM_URL, WHATSAPP_LINK } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { MandalaBg } from '../components/common/MandalaBg';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp || !formData.email || !formData.mensagem) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead title="Contato" description="Fale com a Ilumina Yoga & Bem-Estar. Dúvidas, agendamentos e atendimento." />

      {/* HERO CONTATO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <MandalaBg className="absolute -top-32 -left-32" size={500} opacity={0.05} color="#B77912" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
            Atendimento & Acolhimento
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ilumina-texto leading-tight">
            Comece sua pausa.
          </h1>
          <p className="text-base sm:text-lg text-ilumina-texto/80 font-light max-w-xl mx-auto leading-relaxed">
            Se ainda tiver alguma dúvida, fale com a Ilumina. Vamos ajudar você a encontrar a prática que melhor combina com seu momento.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO E CANAIS DE CONTATO */}
      <section className="py-16 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* INFORMAÇÕES DE CONTATO (COLUNA ESQUERDA) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
                  Canais Oficiais
                </span>
                <h2 className="font-serif text-3xl text-ilumina-texto">
                  Estamos aqui para ouvir você.
                </h2>
                <div className="w-12 h-[1px] bg-ilumina-gold"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-ilumina-areia/30 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-gold flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">WhatsApp</h4>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-ilumina-marrom hover:underline font-light">
                      Falar diretamente no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-ilumina-areia/30 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-gold flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">E-mail</h4>
                    <a href={`mailto:${EMAIL_CONTACT}`} className="text-xs text-ilumina-marrom hover:underline font-light">
                      {EMAIL_CONTACT}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-ilumina-areia/30 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-gold flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">Endereço</h4>
                    <p className="text-xs text-ilumina-texto/80 font-light leading-relaxed">
                      {ADDRESS_TEXT}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-ilumina-areia/30 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-gold flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">Horários de Atendimento</h4>
                    <p className="text-xs text-ilumina-texto/80 font-light leading-relaxed">
                      {WORK_HOURS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-ilumina-areia/30 shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-gold flex items-center justify-center text-xl shrink-0">
                    <i className="bi bi-instagram"></i>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">Instagram</h4>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-ilumina-marrom hover:underline font-light">
                      Siga @ilumina.yoga
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORMULÁRIO DE CONTATO (COLUNA DIREITA) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-ilumina-areia/30 shadow-editorial">
              <h3 className="font-serif text-2xl text-ilumina-texto mb-6">
                Envie uma Mensagem
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                  <i className="bi bi-check-circle-fill text-3xl text-emerald-600 block"></i>
                  <h4 className="font-serif text-xl font-semibold">Mensagem enviada com sucesso!</h4>
                  <p className="text-xs font-light">
                    Obrigada pelo contato. Nossa equipe responderá em breve através do seu WhatsApp ou e-mail.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ nome: '', whatsapp: '', email: '', assunto: '', mensagem: '' }); }}
                    className="text-xs font-semibold text-emerald-700 underline pt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ilumina-texto mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Como gostaria de ser chamada(o)?"
                      className="w-full px-4 py-3 text-xs bg-ilumina-creme/40 border border-ilumina-areia/40 rounded-xl focus:outline-none focus:border-ilumina-gold transition-colors text-ilumina-texto"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ilumina-texto mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 text-xs bg-ilumina-creme/40 border border-ilumina-areia/40 rounded-xl focus:outline-none focus:border-ilumina-gold transition-colors text-ilumina-texto"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ilumina-texto mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 text-xs bg-ilumina-creme/40 border border-ilumina-areia/40 rounded-xl focus:outline-none focus:border-ilumina-gold transition-colors text-ilumina-texto"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ilumina-texto mb-1.5">
                      Assunto
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-xs bg-ilumina-creme/40 border border-ilumina-areia/40 rounded-xl focus:outline-none focus:border-ilumina-gold transition-colors text-ilumina-texto"
                    >
                      <option value="">Selecione um assunto...</option>
                      <option value="Dúvidas sobre Aulas">Dúvidas sobre Aulas</option>
                      <option value="Planos e Matrícula">Planos e Matrícula</option>
                      <option value="Eventos e Workshops">Eventos e Workshops</option>
                      <option value="Outros assuntos">Outros assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ilumina-texto mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Como podemos te ajudar hoje?"
                      className="w-full px-4 py-3 text-xs bg-ilumina-creme/40 border border-ilumina-areia/40 rounded-xl focus:outline-none focus:border-ilumina-gold transition-colors text-ilumina-texto"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <span>ENVIAR MENSAGEM</span>
                    <i className="bi bi-send"></i>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* MAPA GOOGLE MAPS SEÇÃO PREPARADA */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Localização
            </span>
            <h2 className="font-serif text-3xl text-ilumina-texto">
              Venha Conhecer Nosso Estúdio
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ilumina-areia/30 shadow-soft h-80 relative bg-ilumina-bege/30 flex items-center justify-center text-center p-6">
            <div className="space-y-3 max-w-md">
              <i className="bi bi-geo-alt-fill text-4xl text-ilumina-gold block"></i>
              <p className="font-serif text-xl text-ilumina-texto">{ADDRESS_TEXT}</p>
              <p className="text-xs text-ilumina-texto/60 font-light">
                (Seção de mapa interativo configurada para integração com Google Maps Embed)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FAQ COMPLETO */}
      <section className="py-24 bg-ilumina-creme-light relative border-t border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Perguntas & Respostas
            </h2>
            <div className="w-16 h-[1px] bg-ilumina-gold mx-auto mt-4"></div>
          </div>

          <FAQAccordion />
        </div>
      </section>
    </>
  );
};
