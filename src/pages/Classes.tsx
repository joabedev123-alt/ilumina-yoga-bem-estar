import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECNOFIT_URL } from '../constants/config';
import { SEOHead } from '../components/common/SEOHead';
import { MandalaBg } from '../components/common/MandalaBg';

export const Classes: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80";

  const classDetails = [
    {
      id: "hatha-vinyasa",
      title: "HATHA VINYASA",
      desc: "Hatha Vinyasa é uma prática mais fluida e dinâmica, com movimentos coordenados com a respiração que fortalecem o corpo e aliviam a mente, funcionando como uma meditação em movimento.",
      intensity: "Moderada / Fluida",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hatha-yoga",
      title: "HATHA YOGA",
      desc: "Hatha Yoga possui um ritmo mais sutil e maior permanência nas posturas, trabalhando equilíbrio, presença e consciência corporal para aliviar tensões.",
      intensity: "Suave / Moderada",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "yoga-restaurativo",
      title: "YOGA RESTAURATIVO",
      desc: "Uma prática lenta, suave e acolhedora, voltada ao relaxamento profundo e à regulação do sistema nervoso.",
      intensity: "Suave / Relaxante",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1510894347713-da3ed8f4f92d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flexibilidade",
      title: "FLEXIBILIDADE",
      desc: "Trabalha mobilidade, amplitude de movimento e alívio de tensões e dores, contribuindo também para a evolução nas práticas de yoga.",
      intensity: "Focada em Alongamento",
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pilates-solo",
      title: "PILATES SOLO",
      desc: "Exercícios realizados no chão para fortalecer o corpo, melhorar a postura, desenvolver estabilidade e ampliar a consciência corporal de maneira ativa e dinâmica.",
      intensity: "Fortalecimento / Core",
      duration: "50 min",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Schedule Preview Matrix (Weekly view placeholder pointing to Tecnofit app)
  const [selectedDay, setSelectedDay] = useState<'Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb'>('Seg');

  const scheduleDays = [
    {
      day: 'Seg' as const,
      label: 'Segunda-feira',
      classes: [
        { time: '07:30', name: 'Hatha Vinyasa', instructor: 'Profa. Amanda' },
        { time: '12:15', name: 'Yoga Restaurativo', instructor: 'Profa. Sofia' },
        { time: '18:30', name: 'Hatha Yoga', instructor: 'Profa. Amanda' },
        { time: '19:45', name: 'Flexibilidade', instructor: 'Profa. Camila' },
      ],
    },
    {
      day: 'Ter' as const,
      label: 'Terça-feira',
      classes: [
        { time: '08:00', name: 'Pilates Solo', instructor: 'Profa. Camila' },
        { time: '17:30', name: 'Hatha Vinyasa', instructor: 'Profa. Sofia' },
        { time: '19:00', name: 'Pilates Solo', instructor: 'Profa. Camila' },
      ],
    },
    {
      day: 'Qua' as const,
      label: 'Quarta-feira',
      classes: [
        { time: '07:30', name: 'Hatha Yoga', instructor: 'Profa. Amanda' },
        { time: '12:15', name: 'Flexibilidade', instructor: 'Profa. Camila' },
        { time: '18:30', name: 'Hatha Vinyasa', instructor: 'Profa. Sofia' },
        { time: '19:45', name: 'Yoga Restaurativo', instructor: 'Profa. Amanda' },
      ],
    },
    {
      day: 'Qui' as const,
      label: 'Quinta-feira',
      classes: [
        { time: '08:00', name: 'Pilates Solo', instructor: 'Profa. Camila' },
        { time: '17:30', name: 'Hatha Yoga', instructor: 'Profa. Amanda' },
        { time: '19:00', name: 'Pilates Solo', instructor: 'Profa. Camila' },
      ],
    },
    {
      day: 'Sex' as const,
      label: 'Sexta-feira',
      classes: [
        { time: '07:30', name: 'Yoga Restaurativo', instructor: 'Profa. Sofia' },
        { time: '12:15', name: 'Hatha Vinyasa', instructor: 'Profa. Amanda' },
        { time: '18:00', name: 'Flexibilidade', instructor: 'Profa. Camila' },
      ],
    },
    {
      day: 'Sáb' as const,
      label: 'Sábado',
      classes: [
        { time: '08:30', name: 'Hatha Vinyasa Especial', instructor: 'Equipe Ilumina' },
        { time: '10:00', name: 'Yoga Restaurativo & Meditação', instructor: 'Equipe Ilumina' },
      ],
    },
  ];

  const currentSchedule = scheduleDays.find((d) => d.day === selectedDay);

  return (
    <>
      <SEOHead title="Aulas" description="Conheça nossas modalidades de Yoga, Pilates Solo e Flexibilidade na Ilumina." />

      {/* HERO AULAS */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <MandalaBg className="absolute -top-24 -left-24" size={500} opacity={0.05} color="#B77912" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Modalidades & Horários
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-ilumina-texto">
              Encontre o seu momento.
            </h1>
            <p className="text-base sm:text-lg text-ilumina-texto/80 font-light max-w-xl mx-auto leading-relaxed">
              Escolha a prática, o dia e o horário que mais combinam com a sua rotina.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-editorial border-4 border-white aspect-[16/7] relative">
            <img
              src={heroImage}
              alt="Aula de Yoga em Grupo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ilumina-texto/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRÁTICAS PARA DIFERENTES MOMENTOS */}
      <section className="py-24 bg-ilumina-creme-light relative border-y border-ilumina-areia/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Nossas Modalidades
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Práticas para diferentes momentos
            </h2>
            <div className="w-16 h-[1px] bg-ilumina-gold mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            {classDetails.map((cls, index) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-3xl overflow-hidden border border-ilumina-areia/30 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-6 overflow-hidden rounded-2xl aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-ilumina-creme text-ilumina-marrom text-xs font-semibold uppercase tracking-wider rounded-full border border-ilumina-areia/40">
                      {cls.duration}
                    </span>
                    <span className="text-xs text-ilumina-texto/60 font-light">
                      Intensidade: {cls.intensity}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ilumina-texto">
                    {cls.title}
                  </h3>

                  <p className="text-sm sm:text-base text-ilumina-texto/80 font-light leading-relaxed">
                    {cls.desc}
                  </p>

                  <div className="pt-2">
                    <a
                      href={TECNOFIT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-colors"
                    >
                      <span>AGENDAR ESTA AULA</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO GRADE DE AULAS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-ilumina-gold font-semibold">
              Calendário Semanal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ilumina-texto">
              Grade de Aulas
            </h2>
            <p className="text-sm text-ilumina-texto/70 font-light">
              Selecione o dia da semana para consultar as turmas oferecidas no estúdio.
            </p>
          </div>

          {/* Day Selector Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-2">
            {scheduleDays.map((d) => (
              <button
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  selectedDay === d.day
                    ? "bg-ilumina-marrom text-ilumina-creme shadow-md scale-105"
                    : "bg-white text-ilumina-texto hover:bg-ilumina-bege/40 border border-ilumina-areia/30"
                }`}
              >
                {d.day}
              </button>
            ))}
          </div>

          {/* Schedule Display */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ilumina-areia/30 shadow-soft max-w-4xl mx-auto space-y-6">
            <h3 className="font-serif text-xl text-ilumina-marrom border-b border-ilumina-areia/20 pb-3 flex items-center gap-2">
              <i className="bi bi-calendar-event text-ilumina-gold"></i>
              <span>{currentSchedule?.label}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSchedule?.classes.map((cls, idx) => (
                <div key={idx} className="bg-ilumina-creme/50 p-4 rounded-2xl border border-ilumina-areia/20 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-ilumina-gold uppercase tracking-wider block">
                      <i className="bi bi-clock mr-1"></i> {cls.time}
                    </span>
                    <h4 className="font-serif text-base font-semibold text-ilumina-texto">
                      {cls.name}
                    </h4>
                    <p className="text-[11px] text-ilumina-texto/60 font-light">
                      {cls.instructor}
                    </p>
                  </div>
                  <a
                    href={TECNOFIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-ilumina-marrom text-white flex items-center justify-center hover:bg-ilumina-gold transition-colors shrink-0"
                    title="Reservar vaga"
                  >
                    <i className="bi bi-chevron-right text-xs"></i>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-ilumina-areia/20 text-center space-y-4">
              <p className="text-xs text-ilumina-texto/70 font-light italic">
                <i className="bi bi-info-circle text-ilumina-gold mr-1"></i>
                A grade pode sofrer alterações. Consulte sempre os horários atualizados no aplicativo.
              </p>
              <div>
                <a
                  href={TECNOFIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-ilumina-marrom hover:bg-ilumina-gold text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-colors inline-flex items-center gap-2"
                >
                  <i className="bi bi-phone"></i>
                  <span>VER GRADE ATUALIZADA NO APP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO INICIANTES */}
      <section className="py-24 bg-ilumina-salvia text-ilumina-texto relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-ilumina-marrom font-bold">
            Primeira Vez
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ilumina-texto">
            Nunca fez yoga?
          </h2>
          <p className="text-base sm:text-lg text-ilumina-texto/90 font-light leading-relaxed max-w-2xl mx-auto">
            Você não precisa ter flexibilidade, experiência prévia ou conhecer as posturas para começar. As práticas respeitam a individualidade de cada pessoa e podem ser adaptadas para diferentes níveis, corpos e necessidades.
          </p>
          <div className="pt-4">
            <a
              href={TECNOFIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-ilumina-texto hover:bg-ilumina-marrom text-ilumina-creme text-xs uppercase tracking-widest font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>AGENDAR AULA EXPERIMENTAL</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
