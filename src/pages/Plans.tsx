import React from 'react';
import { motion } from 'framer-motion';
import { TECNOFIT_URL } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { MandalaBg } from '../components/common/MandalaBg';

export const Plans: React.FC = () => {
  const mensais = [
    {
      title: "ESSENCIAL",
      badge: null,
      frequency: "1 aula por semana",
      monthly: "4 aulas por mês",
      desc: "Para quem deseja começar e experimentar os benefícios das práticas no corpo e na mente.",
      price: "R$ ___",
      cta: "ESCOLHER PLANO",
      featured: false,
    },
    {
      title: "EQUILÍBRIO",
      badge: "MAIS ESCOLHIDO",
      frequency: "2 aulas por semana",
      monthly: "8 aulas por mês",
      desc: "Para quem busca maior constância, evolução e equilíbrio através de uma rotina de práticas.",
      price: "R$ ___",
      cta: "ESCOLHER PLANO",
      featured: true,
    },
    {
      title: "FULL ILUMINA",
      badge: "EXPERIÊNCIA COMPLETA",
      frequency: "Frequência livre",
      monthly: "Acesso ilimitado",
      desc: "Para quem deseja aprofundar sua jornada e criar uma rotina completa de autocuidado, podendo explorar diferentes modalidades.",
      perk: "20% DE DESCONTO NOS EVENTOS ILUMINA",
      price: "R$ ___",
      cta: "QUERO SER FULL",
      featured: false,
    },
  ];

  const pacotes = [
    {
      title: "Aula Avulsa",
      validity: "Validade: 15 dias",
      desc: "Ideal para uma visita pontual ou experimentar o estúdio.",
      price: "R$ ___",
    },
    {
      title: "Pacote Despertar",
      validity: "4 Aulas • Validade: 45 dias",
      desc: "Para quem deseja praticar com flexibilidade sem compromisso mensal.",
      price: "R$ ___",
    },
    {
      title: "Pacote Presença",
      validity: "8 Aulas • Validade: 60 dias",
      desc: "Constância para encaixar na sua agenda conforme seu momento.",
      price: "R$ ___",
    },
    {
      title: "Pacote Iluminar",
      validity: "12 Aulas • Validade: 90 dias",
      desc: "Maior autonomia para gerenciar seus agendamentos no trimestre.",
      price: "R$ ___",
    },
  ];

  return (
    <>
      <SEOHead title="Planos" description="Conheça os planos mensais e pacotes flexíveis do estúdio Ilumina Yoga & Bem-Estar." />

      {/* HERO PLANOS */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <MandalaBg className="absolute -top-32 -right-32" size={600} opacity={0.05} color="#B77912" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
            Investimento no Seu Bem-Estar
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ilumina-texto leading-tight">
            Escolha o ritmo <br />
            <span className="italic font-light text-ilumina-marrom">que combina com você.</span>
          </h1>
          <p className="text-base sm:text-lg text-ilumina-texto/80 font-light max-w-xl mx-auto leading-relaxed">
            Planos e pacotes flexíveis para tornar o autocuidado parte da sua rotina.
          </p>
        </div>
      </section>

      {/* PLANOS MENSAIS */}
      <section className="py-20 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-ilumina-texto">
              Planos Mensais
            </h2>
            <p className="text-sm text-ilumina-texto/70 font-light">
              Assinaturas recorrentes para priorizar sua constância.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {mensais.map((plano, index) => (
              <motion.div
                key={plano.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  plano.featured
                    ? "border-2 border-ilumina-gold shadow-editorial lg:-translate-y-3"
                    : "border-ilumina-areia/30 shadow-soft"
                }`}
              >
                {plano.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ilumina-gold text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold shadow-sm">
                    {plano.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-ilumina-texto font-semibold">
                      {plano.title}
                    </h3>
                    <div className="text-xs text-ilumina-marrom font-semibold uppercase tracking-wider space-y-1">
                      <p>{plano.frequency}</p>
                      <p className="text-ilumina-texto/60">{plano.monthly}</p>
                    </div>
                  </div>

                  <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                    {plano.desc}
                  </p>

                  {plano.perk && (
                    <div className="bg-ilumina-creme p-3 rounded-2xl border border-ilumina-areia/30">
                      <p className="text-xs text-ilumina-gold font-bold uppercase tracking-wider text-center">
                        ✨ {plano.perk}
                      </p>
                    </div>
                  )}

                  <div className="pt-6 border-t border-ilumina-areia/20">
                    <span className="font-serif text-4xl text-ilumina-marrom font-bold">{plano.price}</span>
                    <span className="text-xs text-ilumina-texto/60 font-light"> / mês</span>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={TECNOFIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 text-xs uppercase tracking-widest font-semibold rounded-full text-center transition-all duration-300 block shadow-md ${
                      plano.featured
                        ? "bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme"
                        : "bg-ilumina-creme hover:bg-ilumina-marrom text-ilumina-marrom hover:text-ilumina-creme"
                    }`}
                  >
                    {plano.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACOTES AVULSOS */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Sem Fidelidade
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ilumina-texto">
              Pacotes de Aulas Avulsas
            </h2>
            <p className="text-sm text-ilumina-texto/70 font-light">
              Ideal para quem viaja frequentemente ou deseja utilizar no seu próprio tempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pacotes.map((pacote, index) => (
              <motion.div
                key={pacote.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-ilumina-areia/30 shadow-soft hover:shadow-editorial transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-ilumina-texto">
                    {pacote.title}
                  </h3>
                  <p className="text-[11px] font-medium text-ilumina-gold uppercase tracking-wider">
                    {pacote.validity}
                  </p>
                  <p className="text-xs text-ilumina-texto/80 font-light leading-relaxed">
                    {pacote.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-ilumina-areia/20 space-y-3">
                  <div className="font-serif text-2xl font-bold text-ilumina-marrom">
                    {pacote.price}
                  </div>
                  <a
                    href={TECNOFIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-ilumina-creme hover:bg-ilumina-bege text-ilumina-marrom text-[11px] uppercase tracking-widest font-semibold rounded-full text-center transition-colors block"
                  >
                    COMPRAR PACOTE
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* OBSERVAÇÃO LEGAL */}
          <div className="max-w-3xl mx-auto bg-ilumina-bege/30 p-6 rounded-2xl border border-ilumina-areia/40 text-center space-y-2">
            <p className="text-xs text-ilumina-texto/80 font-light italic leading-relaxed">
              📌 <strong>Observação:</strong> Os planos e pacotes são pessoais e intransferíveis. As aulas devem ser agendadas com antecedência através do aplicativo oficial da Ilumina.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
