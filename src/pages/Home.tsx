import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TECNOFIT_URL } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { MandalaBg, EditorialSparkle } from '../components/common/MandalaBg';

export const Home: React.FC = () => {
  // High quality editorial photos fitting warm luxury wellness aesthetic
  const heroImage = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80";
  const aboutImage = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80";
  const ctaBgImage = "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1600&q=80";

  const practices = [
    {
      name: "Hatha Vinyasa",
      desc: "Prática fluida e dinâmica, com movimentos sincronizados com a respiração.",
      icon: "bi-flower1",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hatha Yoga",
      desc: "Ritmo sutil e maior permanência nas posturas para equilíbrio e consciência.",
      icon: "bi-sun",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Yoga Restaurativo",
      desc: "Prática lenta e acolhedora, focada em relaxamento profundo e regulação do sistema nervoso.",
      icon: "bi-moon-stars",
      image: "https://images.unsplash.com/photo-1510894347713-da3ed8f4f92d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Flexibilidade",
      desc: "Mobilidade, amplitude de movimento e alívio de tensões corporais acumuladas.",
      icon: "bi-heart-pulse",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pilates Solo",
      desc: "Exercícios no chão para fortalecer a musculatura profunda, postura e estabilidade.",
      icon: "bi-activity",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const benefits = [
    { title: "Fortalecimento", icon: "bi-shield-check" },
    { title: "Flexibilidade", icon: "bi-arrows-expand" },
    { title: "Mobilidade", icon: "bi-arrow-repeat" },
    { title: "Melhora da postura", icon: "bi-person-badge" },
    { title: "Consciência corporal", icon: "bi-eye" },
    { title: "Alívio das tensões", icon: "bi-cloud-sun" },
    { title: "Redução do estresse", icon: "bi-wind" },
    { title: "Relaxamento", icon: "bi-droplet" },
    { title: "Qualidade do sono", icon: "bi-moon" },
    { title: "Equilíbrio emocional", icon: "bi-heart" },
  ];

  return (
    <>
      <SEOHead title="Início" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
        <MandalaBg className="absolute -top-32 -left-32" size={600} opacity={0.05} color="#B77912" />
        <MandalaBg className="absolute bottom-10 right-10" size={400} opacity={0.04} color="#725334" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LADO ESQUERDO: CONTEÚDO EDITORIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ilumina-bege/50 border border-ilumina-areia/40 text-xs font-medium uppercase tracking-widest text-ilumina-marrom">
                <EditorialSparkle className="w-3.5 h-3.5" />
                <span>Estúdio & Boutique Wellness</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-[1.08] text-ilumina-texto">
                Sua pausa <br />
                <span className="italic font-light text-ilumina-marrom">começa aqui.</span>
              </h1>

              <p className="text-base sm:text-lg text-ilumina-texto/80 font-light max-w-xl leading-relaxed">
                Yoga, movimento e experiências para cuidar do corpo, acalmar a mente e transformar o autocuidado em parte da sua rotina.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={TECNOFIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-3 group"
                >
                  <span>AGENDAR UMA AULA</span>
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
                
                <NavLink
                  to="/planos"
                  className="px-8 py-4 bg-transparent border border-ilumina-marrom/40 hover:border-ilumina-marrom text-ilumina-texto text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 text-center hover:bg-ilumina-bege/30"
                >
                  CONHEÇA OS PLANOS
                </NavLink>
              </div>

              {/* Tagline / Micro Badge */}
              <div className="pt-6 flex items-center gap-6 text-xs text-ilumina-texto-muted border-t border-ilumina-areia/30">
                <div className="flex items-center gap-2">
                  <i className="bi bi-star-fill text-ilumina-gold text-xs"></i>
                  <span>Ambiente Acolhedor</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-flower2 text-ilumina-salvia text-xs"></i>
                  <span>Aulas para Todos os Níveis</span>
                </div>
              </div>
            </motion.div>

            {/* LADO DIREITO: FOTOGRAFIA EDITORIAL COM ARCO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura com efeito arqueado superior */}
                <div className="overflow-hidden img-arch shadow-editorial border-4 border-white/80 bg-ilumina-bege/20 relative aspect-[4/5]">
                  <img
                    src={heroImage}
                    alt="Prática de Yoga no Estúdio Ilumina"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ilumina-marrom/30 via-transparent to-transparent"></div>
                </div>

                {/* Badge Decorativa Sobreposta */}
                <div className="absolute -bottom-6 -left-6 glass-card px-5 py-4 rounded-2xl shadow-soft max-w-[200px] border border-white">
                  <p className="font-serif text-2xl font-semibold text-ilumina-marrom leading-none">100%</p>
                  <p className="text-[11px] text-ilumina-texto/80 font-light mt-1">Presença, respiração e bem-estar no seu ritmo.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: UM ESPAÇO PARA VOLTAR A SI (3 PILARES) */}
      <section className="py-24 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Filosofia Ilumina
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Um espaço para voltar a si
            </h2>
            <div className="w-16 h-[1px] bg-ilumina-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "MOVIMENTO CONSCIENTE",
                text: "Práticas que fortalecem o corpo, desenvolvem mobilidade e ajudam você a se reconectar com o movimento.",
                icon: "bi-body-text",
              },
              {
                title: "SAÚDE EMOCIONAL",
                text: "Respiração, presença e práticas que auxiliam na redução das tensões e promovem equilíbrio.",
                icon: "bi-heart-pulse",
              },
              {
                title: "COMUNIDADE",
                text: "Um espaço acolhedor para compartilhar experiências, evoluir e tornar o autocuidado parte da vida.",
                icon: "bi-people",
              },
            ].map((pilar, index) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/80 p-8 rounded-3xl border border-ilumina-areia/30 shadow-soft hover:shadow-editorial transition-all duration-300 text-center space-y-4 group"
              >
                <div className="w-16 h-16 rounded-full bg-ilumina-creme border border-ilumina-areia/50 text-ilumina-gold group-hover:bg-ilumina-gold group-hover:text-white flex items-center justify-center text-2xl mx-auto transition-all duration-500 shadow-sm">
                  <i className={`bi ${pilar.icon}`}></i>
                </div>
                <h3 className="font-serif text-xl tracking-wider text-ilumina-texto group-hover:text-ilumina-marrom transition-colors">
                  {pilar.title}
                </h3>
                <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                  {pilar.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: VIVA A EXPERIÊNCIA ILUMINA (3 CARDS EDITORIAIS) */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Jornada Completa
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Viva a experiência Ilumina
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: YOGA */}
            <div className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft flex flex-col group hover:shadow-editorial transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
                  alt="Prática de Yoga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest text-ilumina-marrom font-semibold">
                  Yoga
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-ilumina-texto mb-3">YOGA</h3>
                  <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                    Práticas para diferentes níveis que unem movimento, respiração, presença e consciência.
                  </p>
                </div>
                <NavLink
                  to="/aulas"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors pt-4 border-t border-ilumina-areia/20"
                >
                  <span>VER AULAS</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>

            {/* Card 2: MEDITAÇÃO & BEM-ESTAR */}
            <div className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft flex flex-col group hover:shadow-editorial transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                  alt="Meditação & Bem-Estar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest text-ilumina-marrom font-semibold">
                  Pausa
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-ilumina-texto mb-3">MEDITAÇÃO & BEM-ESTAR</h3>
                  <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                    Momentos de pausa e presença para desacelerar, respirar e cuidar da mente.
                  </p>
                </div>
                <NavLink
                  to="/aulas"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors pt-4 border-t border-ilumina-areia/20"
                >
                  <span>SAIBA MAIS</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>

            {/* Card 3: EVENTOS */}
            <div className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft flex flex-col group hover:shadow-editorial transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
                  alt="Eventos & Encontros"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest text-ilumina-marrom font-semibold">
                  Experiências
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-ilumina-texto mb-3">EVENTOS</h3>
                  <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                    Experiências especiais, encontros, workshops e vivências que ampliam a jornada de autocuidado.
                  </p>
                </div>
                <NavLink
                  to="/eventos"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors pt-4 border-t border-ilumina-areia/20"
                >
                  <span>VER EVENTOS</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO: CONHEÇA NOSSAS PRÁTICAS */}
      <section className="py-24 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
                Modalidades
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
                Conheça nossas práticas
              </h2>
            </div>
            <NavLink
              to="/aulas"
              className="text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors inline-flex items-center gap-2"
            >
              <span>VER TODAS AS MODALIDADES</span>
              <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-ilumina-areia/30 shadow-soft hover:shadow-editorial transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={practice.image}
                    alt={practice.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-ilumina-gold shadow-sm">
                    <i className={`bi ${practice.icon} text-lg`}></i>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl text-ilumina-texto font-semibold">
                    {practice.name}
                  </h3>
                  <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                    {practice.desc}
                  </p>
                  <NavLink
                    to="/aulas"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-ilumina-marrom group-hover:text-ilumina-gold transition-colors pt-2"
                  >
                    <span>Conhecer prática</span>
                    <i className="bi bi-chevron-right text-xs"></i>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO BENEFÍCIOS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Transformação Integral
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto leading-tight">
              Um cuidado que se reflete dentro e fora do tapete.
            </h2>
            <div className="w-16 h-[1px] bg-ilumina-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/80 p-5 rounded-2xl border border-ilumina-areia/30 shadow-soft hover:bg-ilumina-bege/20 transition-all duration-300 text-center space-y-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-ilumina-creme text-ilumina-marrom group-hover:bg-ilumina-gold group-hover:text-white flex items-center justify-center text-lg mx-auto transition-colors">
                  <i className={`bi ${benefit.icon}`}></i>
                </div>
                <p className="text-xs font-medium text-ilumina-texto tracking-wide">
                  {benefit.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section className="py-24 bg-ilumina-bege/30 relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl shadow-editorial border-4 border-white aspect-[4/3]">
                  <img
                    src={aboutImage}
                    alt="Espaço Acolhedor da Ilumina"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
                Nossa Essência
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto leading-tight">
                Mais do que yoga, um convite para voltar a si.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ilumina-texto/80 font-light leading-relaxed">
                <p>
                  A Ilumina nasceu para transformar a pausa em cuidado e o autocuidado em parte da vida real.
                </p>
                <p>
                  Criamos experiências que integram corpo, mente e emoções através do movimento, da respiração, da presença e da conexão.
                </p>
              </div>
              <div className="pt-2">
                <NavLink
                  to="/a-ilumina"
                  className="px-8 py-4 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-md inline-flex items-center gap-3 transition-colors"
                >
                  <span>CONHEÇA A ILUMINA</span>
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO PLANOS (RESUMO) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Planos Mensais
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Escolha seu ritmo
            </h2>
            <p className="text-sm text-ilumina-texto/70 font-light">
              Frequências flexíveis pensadas para sua rotina de autocuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* ESSENCIAL */}
            <div className="bg-white rounded-3xl p-8 border border-ilumina-areia/30 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-ilumina-texto">ESSENCIAL</h3>
                <p className="text-xs text-ilumina-marrom font-semibold uppercase tracking-wider">
                  1 aula por semana • 4 aulas por mês
                </p>
                <div className="pt-4 border-t border-ilumina-areia/20">
                  <span className="font-serif text-3xl text-ilumina-texto">R$ ___</span>
                  <span className="text-xs text-ilumina-texto/60"> / mês</span>
                </div>
              </div>
              <NavLink
                to="/planos"
                className="w-full py-3 bg-ilumina-creme hover:bg-ilumina-bege text-ilumina-marrom text-xs uppercase tracking-widest font-semibold rounded-full text-center transition-colors block"
              >
                CONHECER PLANO
              </NavLink>
            </div>

            {/* EQUILÍBRIO (DESTAQUE) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-ilumina-gold shadow-editorial relative flex flex-col justify-between space-y-6">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ilumina-gold text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold shadow-sm">
                MAIS ESCOLHIDO
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-ilumina-texto">EQUILÍBRIO</h3>
                <p className="text-xs text-ilumina-marrom font-semibold uppercase tracking-wider">
                  2 aulas por semana • 8 aulas por mês
                </p>
                <div className="pt-4 border-t border-ilumina-areia/20">
                  <span className="font-serif text-3xl text-ilumina-marrom font-bold">R$ ___</span>
                  <span className="text-xs text-ilumina-texto/60"> / mês</span>
                </div>
              </div>
              <NavLink
                to="/planos"
                className="w-full py-3 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full text-center transition-colors block shadow-md"
              >
                CONHECER PLANO
              </NavLink>
            </div>

            {/* FULL ILUMINA */}
            <div className="bg-white rounded-3xl p-8 border border-ilumina-areia/30 shadow-soft flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-ilumina-texto">FULL ILUMINA</h3>
                <p className="text-xs text-ilumina-marrom font-semibold uppercase tracking-wider">
                  Frequência livre
                </p>
                <p className="text-xs text-ilumina-gold font-medium bg-ilumina-creme px-3 py-1 rounded-full inline-block">
                  20% DESC. NOS EVENTOS
                </p>
                <div className="pt-4 border-t border-ilumina-areia/20">
                  <span className="font-serif text-3xl text-ilumina-texto">R$ ___</span>
                  <span className="text-xs text-ilumina-texto/60"> / mês</span>
                </div>
              </div>
              <NavLink
                to="/planos"
                className="w-full py-3 bg-ilumina-creme hover:bg-ilumina-bege text-ilumina-marrom text-xs uppercase tracking-widest font-semibold rounded-full text-center transition-colors block"
              >
                CONHECER PLANO
              </NavLink>
            </div>

          </div>

          <div className="text-center mt-10">
            <NavLink
              to="/planos"
              className="text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors inline-flex items-center gap-2"
            >
              <span>VER TODOS OS PLANOS E PACOTES</span>
              <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>

      {/* SEÇÃO EVENTOS */}
      <section className="py-24 bg-ilumina-creme-light relative border-t border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
                Vivências Especiais
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
                Experiências que iluminam.
              </h2>
            </div>
            <NavLink
              to="/eventos"
              className="text-xs uppercase tracking-widest font-semibold text-ilumina-marrom hover:text-ilumina-gold transition-colors inline-flex items-center gap-2"
            >
              <span>VER PRÓXIMOS EVENTOS</span>
              <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Yoga & Brunch",
                desc: "Prática revigorante seguidade um café da manhã consciente e nutritivo.",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Meditação à Luz de Velas",
                desc: "Uma imersão de desaceleração profunda e regulação emocional ao som de mantras sutilmente entoados.",
                image: "https://images.unsplash.com/photo-1508672019048-805479767517?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Rodas de Autocuidado",
                desc: "Encontros acolhedores para partilha, escuta ativa e trocas enriquecedoras entre mulheres.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
              },
            ].map((evento) => (
              <div key={evento.title} className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft space-y-4 p-5 group">
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-ilumina-texto font-semibold px-2">
                  {evento.title}
                </h3>
                <p className="text-xs text-ilumina-texto/80 font-light px-2 leading-relaxed">
                  {evento.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA FINAL */}
      <section className="py-24 bg-ilumina-salvia text-ilumina-texto relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={ctaBgImage}
            alt="Elementos Botânicos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <EditorialSparkle className="w-8 h-8 text-ilumina-marrom mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-ilumina-texto font-normal">
            "Aqui você não precisa dar conta de tudo. <br className="hidden sm:block" />
            <span className="italic font-light">Só precisa chegar.</span>"
          </h2>
          <div className="pt-4">
            <a
              href={TECNOFIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-ilumina-texto hover:bg-ilumina-marrom text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>VIVA ESSA EXPERIÊNCIA</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
