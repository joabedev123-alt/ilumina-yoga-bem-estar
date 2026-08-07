import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    id: 'agendamento',
    question: 'COMO FUNCIONA O AGENDAMENTO DAS AULAS?',
    answer:
      'Os agendamentos serão realizados pelo aplicativo da Ilumina, disponibilizado pela Tecnofit. Nele, você poderá consultar a grade atualizada, escolher a modalidade e reservar sua vaga. Também será possível acompanhar suas aulas e realizar cancelamentos dentro do prazo estabelecido.',
  },
  {
    id: 'reposicao',
    question: 'POSSO REPOR UMA AULA?',
    answer:
      'Sim. Se o cancelamento for realizado pelo aplicativo dentro do prazo estipulado, você poderá repor a aula, conforme a disponibilidade de vagas, dentro do mesmo mês. As aulas não utilizadas não são cumulativas e não poderão ser transferidas para o mês seguinte.',
  },
  {
    id: 'faltas',
    question: 'O QUE ACONTECE SE EU FALTAR SEM CANCELAR?',
    answer:
      'Quando não houver cancelamento dentro do prazo indicado no aplicativo, a aula será contabilizada normalmente e não dará direito à reposição. Essa regra nos ajuda a organizar as vagas e permitir que outras alunas possam participar.',
  },
  {
    id: 'plano-ideal',
    question: 'QUAL É O PLANO IDEAL PARA MIM?',
    answer: (
      <div className="space-y-3 text-ilumina-texto/80 font-light leading-relaxed">
        <p>
          <strong className="text-ilumina-marrom font-semibold">Plano Essencial:</strong> Recomendado para quem deseja iniciar e sentir os benefícios das práticas no corpo e na mente com 1 aula por semana.
        </p>
        <p>
          <strong className="text-ilumina-marrom font-semibold">Plano Equilíbrio:</strong> Ideal para quem busca maior constância e evolução através de uma rotina com 2 aulas semanais.
        </p>
        <p>
          <strong className="text-ilumina-marrom font-semibold">Plano Full Ilumina:</strong> Oferece frequência livre e é indicado para quem deseja maior transformação no corpo, na mente e na energia, criando consistência para uma evolução mais rápida, além de permitir explorar diferentes modalidades e manter uma rotina completa de autocuidado.
        </p>
      </div>
    ),
  },
  {
    id: 'iniciantes',
    question: 'NUNCA FIZ YOGA. POSSO PARTICIPAR?',
    answer:
      'Sim. As aulas também são abertas para iniciantes. As práticas respeitam a individualidade de cada pessoa e oferecem adaptações para diferentes níveis, corpos e necessidades. Você não precisa ter flexibilidade ou experiência prévia para começar.',
  },
  {
    id: 'diferencas-praticas',
    question: 'QUAIS SÃO AS DIFERENÇAS ENTRE AS PRÁTICAS?',
    answer: (
      <div className="space-y-2.5 text-ilumina-texto/80 font-light leading-relaxed">
        <p><strong className="text-ilumina-marrom font-semibold">Hatha Vinyasa:</strong> prática mais fluida e dinâmica, com movimentos coordenados com a respiração.</p>
        <p><strong className="text-ilumina-marrom font-semibold">Hatha Yoga:</strong> ritmo mais sutil e maior permanência nas posturas.</p>
        <p><strong className="text-ilumina-marrom font-semibold">Yoga Restaurativo:</strong> prática lenta e suave focada no relaxamento profundo.</p>
        <p><strong className="text-ilumina-marrom font-semibold">Flexibilidade:</strong> mobilidade, amplitude de movimento e alívio de tensões.</p>
        <p><strong className="text-ilumina-marrom font-semibold">Pilates Solo:</strong> fortalecimento, estabilidade, postura e consciência corporal através de exercícios realizados no chão.</p>
      </div>
    ),
  },
  {
    id: 'beneficios',
    question: 'QUAIS SÃO OS BENEFÍCIOS DAS AULAS?',
    answer:
      'As práticas contribuem para o fortalecimento e flexibilidade do corpo, melhora da postura, mobilidade e consciência corporal. Também podem auxiliar no alívio do estresse, tensões e desconfortos, além de favorecer o relaxamento, a qualidade do sono e o equilíbrio físico e emocional.',
  },
  {
    id: 'eventos-planos',
    question: 'OS EVENTOS ESTÃO INCLUÍDOS NOS PLANOS?',
    answer:
      'Os eventos são experiências especiais e possuem inscrição à parte. As alunas do Plano Full Ilumina recebem 20% de desconto em todos os eventos promovidos pela escola.',
  },
  {
    id: 'materiais',
    question: 'O QUE PRECISO LEVAR PARA A AULA?',
    answer:
      'O estúdio disponibiliza os materiais necessários para as práticas. Recomendamos apenas roupas leves e confortáveis. As aulas são realizadas sem calçados.',
  },
  {
    id: 'limitacao-saude',
    question: 'TENHO ALGUMA LIMITAÇÃO OU CONDIÇÃO DE SAÚDE. POSSO PARTICIPAR?',
    answer:
      'Cada situação deve ser avaliada individualmente. A pessoa deverá informar a professora antes da aula sobre dores, lesões, gestação, cirurgias recentes ou outras condições relevantes. Quando necessário, poderá ser solicitada orientação ou autorização do profissional de saúde responsável pelo acompanhamento.',
  },
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('agendamento');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? 'bg-ilumina-creme-light border-ilumina-gold/40 shadow-soft'
                : 'bg-white/70 hover:bg-white border-ilumina-areia/30'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg font-medium tracking-wide text-ilumina-texto pr-2">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                  isOpen
                    ? 'bg-ilumina-gold text-white rotate-180'
                    : 'bg-ilumina-bege/50 text-ilumina-marrom hover:bg-ilumina-bege'
                }`}
              >
                <i className="bi bi-chevron-down text-sm"></i>
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-sm text-ilumina-texto/80 font-light leading-relaxed border-t border-ilumina-areia/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
