import React from 'react';
import { motion } from 'framer-motion';
import { TECNOFIT_URL } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { MandalaBg, EditorialSparkle } from '../components/common/MandalaBg';

export const About: React.FC = () => {
  const heroBg = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1800&q=80";
  const propositoImg = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80";

  const pilares = [
    {
      title: "YOGA PARA TODOS",
      desc: "Práticas acessíveis e inclusivas para iniciantes e praticantes mais experientes.",
      icon: "bi-people",
    },
    {
      title: "PAUSA CONSCIENTE",
      desc: "Momentos para desacelerar, respirar e cultivar presença no aqui e agora.",
      icon: "bi-wind",
    },
    {
      title: "SAÚDE E BEM-ESTAR",
      desc: "Integramos movimento, respiração e hábitos saudáveis para uma vida mais equilibrada.",
      icon: "bi-heart-pulse",
    },
    {
      title: "ENCONTROS QUE CONECTAM",
      desc: "Uma comunidade acolhedora para compartilhar experiências e caminhar junto na jornada de autocuidado.",
      icon: "bi-flower2",
    },
  ];

  const experiencias = [
    {
      title: "Yoga & Brunch",
      desc: "Um momento de movimento matinal seguido de uma mesa sensorial e acolhedora.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Meditação à luz de velas",
      desc: "Práticas de quietação e som suave para serenar o sistema nervoso.",
      img: "https://images.unsplash.com/photo-1508672019048-805479767517?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Rodas de autocuidado",
      desc: "Espaço de diálogo, acolhimento e partilhas entre mulheres em busca de presença.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <>
      <SEOHead title="A Ilumina" description="A Ilumina nasceu para transformar a pausa em cuidado e o autocuidado em parte da vida real." />

      {/* HERO CINEMATOGRÁFICO */}
      <section className="relative min-h-[75vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-ilumina-texto text-ilumina-creme">
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroBg}
            alt="Aula de Yoga na Ilumina"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ilumina-texto via-ilumina-texto/60 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium uppercase tracking-widest text-ilumina-gold"
          >
            <EditorialSparkle className="w-3.5 h-3.5" />
            <span>Nossa História & Filosofia</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl leading-tight text-white font-normal"
          >
            Mais do que yoga, <br />
            <span className="italic text-ilumina-bege font-light">um convite para voltar a si.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-ilumina-creme/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A Ilumina nasceu para transformar a pausa em cuidado e o autocuidado em parte da vida real.
          </motion.p>
        </div>
      </section>

      {/* SEÇÃO NOSSO PROPÓSITO */}
      <section className="py-24 relative overflow-hidden">
        <MandalaBg className="absolute -top-32 -right-32" size={500} opacity={0.04} color="#B77912" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
                Nossa Missão
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
                Nosso propósito
              </h2>
              <div className="w-16 h-[1px] bg-ilumina-gold"></div>
              <p className="text-base sm:text-lg text-ilumina-texto/80 font-light leading-relaxed">
                Criamos experiências que integram corpo, mente e emoções, valorizando a pausa consciente, a saúde mental e a presença.
              </p>
              <p className="text-sm text-ilumina-texto/70 font-light leading-relaxed">
                Acreditamos que o movimento consciente e a respiração são ferramentas vivas de reconexão. Não buscamos posturas perfeitas, mas a construção de uma relação mais gentil e acolhedora com o próprio corpo.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden img-arch shadow-editorial border-4 border-white aspect-[4/5]">
                  <img
                    src={propositoImg}
                    alt="Mulher em momento de respiração e autocuidado"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO PILARES */}
      <section className="py-24 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Bases Estruturais
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Os 4 Pilares da Ilumina
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilares.map((pilar, index) => (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-ilumina-areia/30 shadow-soft hover:shadow-editorial transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-ilumina-creme text-ilumina-gold group-hover:bg-ilumina-gold group-hover:text-white flex items-center justify-center text-xl transition-colors">
                  <i className={`bi ${pilar.icon}`}></i>
                </div>
                <h3 className="font-serif text-lg font-semibold text-ilumina-texto tracking-wide">
                  {pilar.title}
                </h3>
                <p className="text-xs text-ilumina-texto/80 font-light leading-relaxed">
                  {pilar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS QUE ILUMINAM */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Além do Tapete
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Experiências que iluminam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiencias.map((exp) => (
              <div key={exp.title} className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft space-y-4 p-5 group">
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl text-ilumina-texto font-semibold px-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-ilumina-texto/80 font-light px-2 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-ilumina-salvia text-ilumina-texto relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl text-ilumina-texto">
            Um espaço onde você pode <br />
            <span className="italic font-light">simplesmente chegar.</span>
          </h2>
          <div>
            <a
              href={TECNOFIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-ilumina-texto hover:bg-ilumina-marrom text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>AGENDAR MINHA PRIMEIRA AULA</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
