import React from 'react';
import { motion } from 'framer-motion';
import { TECNOFIT_URL } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { MandalaBg, EditorialSparkle } from '../components/common/MandalaBg';

export const Events: React.FC = () => {
  const eventos = [
    {
      title: "Yoga & Brunch de Primavera",
      desc: "Prática matinal fluida ao ar livre seguida de um café da manhã botânico, sucos naturais e bate-papo acolhedor.",
      date: "Sábado, 28 de Setembro",
      time: "09:00 às 12:30",
      location: "Jardim Interno Ilumina",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      vagas: "Inscrições Abertas",
    },
    {
      title: "Meditação à Luz de Velas & Sound Healing",
      desc: "Imersão noturna de desaceleração profunda com banho sonoro de tigelas de cristal e respiração guiada.",
      date: "Sexta-feira, 11 de Outubro",
      time: "19:30 às 21:00",
      location: "Estúdio Principal",
      image: "https://images.unsplash.com/photo-1508672019048-805479767517?auto=format&fit=crop&w=800&q=80",
      vagas: "Últimas Vagas",
    },
    {
      title: "Roda de Autocuidado & Sagrado Feminino",
      desc: "Encontro intimista de escuta ativa, partilha, aromaterapia e rituais de presença para mulheres.",
      date: "Sábado, 26 de Outubro",
      time: "15:00 às 18:00",
      location: "Sala de Vivências",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      vagas: "Em Breve",
    },
    {
      title: "Workshop: Pranayamas & Consciência Respiratória",
      desc: "Aprenda técnicas ancestrais de respiração para controlar a ansiedade e equilibrar o sistema nervoso no dia a dia.",
      date: "Sábado, 09 de Novembro",
      time: "10:00 às 13:00",
      location: "Estúdio Principal",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      vagas: "Inscrições Abertas",
    },
  ];

  return (
    <>
      <SEOHead title="Eventos" description="Experiências para viver além do tapete: Yoga & Brunch, Meditação à luz de velas e workshops." />

      {/* HERO EVENTOS */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <MandalaBg className="absolute -top-32 -left-32" size={600} opacity={0.05} color="#B77912" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ilumina-bege/50 border border-ilumina-areia/40 text-xs font-medium uppercase tracking-widest text-ilumina-marrom">
            <EditorialSparkle className="w-3.5 h-3.5" />
            <span>Vivências & Encontros</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-ilumina-texto leading-tight">
            Experiências para viver <br />
            <span className="italic font-light text-ilumina-marrom">além do tapete.</span>
          </h1>

          <p className="text-base sm:text-lg text-ilumina-texto/80 font-light max-w-xl mx-auto leading-relaxed">
            Encontros criados para desacelerar, conectar, compartilhar e aprofundar a jornada de autocuidado.
          </p>
        </div>
      </section>

      {/* LISTA DE EVENTOS */}
      <section className="py-20 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventos.map((evento, index) => (
              <motion.div
                key={evento.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft hover:shadow-editorial transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-ilumina-marrom shadow-sm">
                    {evento.vagas}
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-ilumina-texto font-semibold">
                      {evento.title}
                    </h3>

                    <p className="text-sm text-ilumina-texto/80 font-light leading-relaxed">
                      {evento.desc}
                    </p>

                    <div className="space-y-2 pt-2 text-xs font-light text-ilumina-texto/80">
                      <div className="flex items-center gap-2">
                        <i className="bi bi-calendar3 text-ilumina-gold"></i>
                        <span>{evento.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bi bi-clock text-ilumina-gold"></i>
                        <span>{evento.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bi bi-geo-alt text-ilumina-gold"></i>
                        <span>{evento.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-ilumina-areia/20">
                    <a
                      href={TECNOFIT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full text-center transition-colors inline-flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>QUERO PARTICIPAR</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* INFORMAÇÃO IMPORTANTE & VANTAGEM FULL ILUMINA */}
          <div className="bg-ilumina-bege/40 rounded-3xl p-8 border border-ilumina-areia/50 max-w-4xl mx-auto space-y-4 text-center">
            <h4 className="font-serif text-2xl text-ilumina-texto">
              Informação Importante
            </h4>
            <div className="space-y-2 text-sm text-ilumina-texto/80 font-light leading-relaxed">
              <p>
                Os eventos são experiências especiais e possuem inscrição à parte da mensalidade regular.
              </p>
              <p className="text-ilumina-marrom font-medium">
                ✨ Alunas do <strong>Plano Full Ilumina</strong> recebem <strong>20% de desconto</strong> em todos os eventos promovidos pela escola.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={TECNOFIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-ilumina-gold hover:bg-ilumina-marrom text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-colors inline-block shadow-sm"
              >
                GARANTIR VAGA NO APP
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
