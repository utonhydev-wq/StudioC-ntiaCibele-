import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="px-4 py-5 max-w-md mx-auto" aria-labelledby="avaliacoes-heading">
      {/* Section Header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-semibold tracking-wider text-[#A6885E] uppercase">
          Depoimentos Reais
        </span>
        <h2 id="avaliacoes-heading" className="font-serif text-2xl font-semibold text-[#4A3731] mt-1">
          A experiência de nossas clientes
        </h2>
        <div className="w-10 h-0.5 bg-[#C5A880]/60 mx-auto mt-2 rounded-full" />
      </div>

      <article className="bg-white/90 border border-[#EADBCE] hover:border-[#C5A880]/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center relative overflow-hidden group">
        {/* Subtle decorative Google badge illustration */}
        <div className="flex items-center justify-center gap-1 mb-3 text-[#D4AF37]">
          <Star className="w-4 h-4 fill-[#D4AF37] group-hover:scale-110 transition-transform duration-200" />
          <Star className="w-4 h-4 fill-[#D4AF37] group-hover:scale-110 transition-transform duration-200 delay-75" />
          <Star className="w-4 h-4 fill-[#D4AF37] group-hover:scale-110 transition-transform duration-200 delay-100" />
          <Star className="w-4 h-4 fill-[#D4AF37] group-hover:scale-110 transition-transform duration-200 delay-150" />
          <Star className="w-4 h-4 fill-[#D4AF37] group-hover:scale-110 transition-transform duration-200 delay-200" />
        </div>

        <p className="text-sm text-[#5E4740] leading-relaxed mb-5 max-w-xs mx-auto">
          Sua confiança é muito importante. Conheça as avaliações e experiências compartilhadas por clientes no Google.
        </p>

        {/* Required Button to Google Reviews */}
        <a
          href={STUDIO_INFO.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-[#4A3731] to-[#5B443D] hover:from-[#3D2C27] hover:to-[#4D3832] text-white rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880]"
        >
          <span>Ver avaliações no Google</span>
          <ExternalLink className="w-4 h-4 text-[#C5A880] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 shrink-0" />
        </a>
      </article>
    </section>
  );
};
