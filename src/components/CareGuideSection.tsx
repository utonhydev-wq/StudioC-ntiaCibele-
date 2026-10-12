import React, { useState } from 'react';
import { ShieldAlert, MessageCircle, ChevronDown, Sparkles, Heart } from 'lucide-react';
import { buildWhatsAppUrl, POST_CARE_GENERAL_TIPS, POST_CARE_MESSAGE } from '../data/studioData';

export const CareGuideSection: React.FC = () => {
  const [showTips, setShowTips] = useState(false);
  const whatsappHref = buildWhatsAppUrl(POST_CARE_MESSAGE);

  return (
    <section className="px-4 py-5 max-w-md mx-auto" aria-labelledby="cuidados-heading">
      {/* Section Header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-semibold tracking-wider text-[#A6885E] uppercase">
          Saúde & Bem-Estar
        </span>
        <h2 id="cuidados-heading" className="font-serif text-2xl font-semibold text-[#4A3731] mt-1">
          Cuidados com a sua pele
        </h2>
        <div className="w-10 h-0.5 bg-[#C5A880]/60 mx-auto mt-2 rounded-full" />
      </div>

      {/* Main Care Card */}
      <article className="bg-white/90 border border-[#EADBCE] hover:border-[#C5A880]/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#FAF2EE] border border-[#ECDCD6] flex items-center justify-center shrink-0 group-hover:bg-[#F5E7E1] transition-colors">
            <Heart className="w-5 h-5 text-[#BA7D71] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#4A3731]">
              Cuidados Pós-Depilação
            </h3>
            <p className="text-xs text-[#9B7B70] mt-0.5">
              Atenção e carinho para manter sua pele radiante e saudável
            </p>
          </div>
        </div>

        <p className="text-sm text-[#5E4740] leading-relaxed mb-4">
          A epilação exige carinho antes e depois da sessão. Cada tipo de pele possui sua própria sensibilidade e necessidades específicas. Converse diretamente com a profissional para receber orientações sob medida.
        </p>

        {/* Safe General Guidelines Accordion */}
        <div className="mb-4">
          <button
            onClick={() => setShowTips(!showTips)}
            className="w-full flex items-center justify-between py-2.5 text-xs font-medium text-[#7A6057] hover:text-[#4A3731] border-t border-b border-[#F0E4DE] transition-colors cursor-pointer"
            aria-expanded={showTips}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Ver recomendações gerais de autocuidado</span>
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${showTips ? 'rotate-180' : ''}`}
            />
          </button>

          {showTips && (
            <div className="pt-3 pb-1 space-y-2.5 text-xs text-[#6A524A] animate-fade-in">
              {POST_CARE_GENERAL_TIPS.map((tip, idx) => (
                <div key={idx} className="bg-[#FAF5F2] p-2.5 rounded-xl border border-[#EFE1DB]">
                  <strong className="block text-[#4A3731] font-semibold mb-0.5">
                    {tip.title}
                  </strong>
                  <p className="text-[#6E5750] leading-relaxed">{tip.description}</p>
                </div>
              ))}

              {/* Disclaimer reminder */}
              <div className="flex items-start gap-1.5 text-[11px] text-[#8C6F66] italic pt-1">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <p>
                  Lembrete: os cuidados podem variar conforme a técnica utilizada e a sensibilidade individual da pele.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Required Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FAF3F0] hover:bg-[#F3E5E0] text-[#4A3731] border border-[#E2CECA] hover:border-[#C5A880] rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.99] group/btn animate-shimmer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880]"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 group-hover/btn:scale-110 transition-transform duration-200" />
          <span>Cuidados Pós-Depilação</span>
        </a>
      </article>
    </section>
  );
};
