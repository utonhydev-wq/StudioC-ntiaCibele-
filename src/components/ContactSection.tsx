import React from 'react';
import { MessageCircle, ArrowUp, Heart, Instagram } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { ThreadsIcon } from './ThreadsIcon';

export const ContactSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="px-4 pt-6 pb-12 max-w-md mx-auto" aria-labelledby="contato-heading">
      <article className="bg-gradient-to-b from-white to-[#FAF4F1] border border-[#EADBCE] rounded-3xl p-6 sm:p-7 text-center shadow-sm relative overflow-hidden">
        {/* Soft decorative halo */}
        <div 
          aria-hidden="true" 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#F2DDD7]/50 rounded-full blur-2xl -z-10 pointer-events-none" 
        />

        <div className="w-12 h-12 rounded-2xl bg-[#FAF1ED] border border-[#ECDCD6] flex items-center justify-center mx-auto mb-4 text-[#C5A880]">
          <Heart className="w-6 h-6 text-[#BA7D71]" />
        </div>

        {/* Required CTA Title */}
        <h2 id="contato-heading" className="font-serif text-2xl sm:text-3xl font-semibold text-[#4A3731] leading-tight mb-2">
          Vamos cuidar de você?
        </h2>

        {/* Required Complementary Text */}
        <p className="text-sm text-[#5E4740] leading-relaxed max-w-xs mx-auto mb-4">
          Entre em contato para tirar dúvidas, conhecer nossos serviços e consultar os horários disponíveis.
        </p>

        {/* Lead status cue */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF2EE] border border-[#ECDCD6] rounded-full text-[11px] text-[#7A5F56] mb-5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span>Atendimento rápido e acolhedor via WhatsApp</span>
        </div>

        {/* Main CTA: Falar no WhatsApp */}
        <div className="flex flex-col gap-2.5">
          <a
            href={STUDIO_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white rounded-2xl font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 active:scale-[0.99] animate-whatsapp-pulse animate-shimmer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <MessageCircle className="w-5 h-5 fill-white/20 shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <span>Falar no WhatsApp</span>
          </a>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-[#FAF3F0] hover:bg-[#F3E5E0] text-[#4A3731] border border-[#E2CECA] rounded-xl text-xs sm:text-sm font-medium transition-colors duration-150 active:scale-[0.99]"
            >
              <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
              <span>Instagram</span>
            </a>

            <a
              href={STUDIO_INFO.threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-[#FAF3F0] hover:bg-[#F3E5E0] text-[#4A3731] border border-[#E2CECA] rounded-xl text-xs sm:text-sm font-medium transition-colors duration-150 active:scale-[0.99]"
            >
              <ThreadsIcon className="w-4 h-4 text-[#4A3731] shrink-0" />
              <span>Threads</span>
            </a>
          </div>

          {/* Secondary CTA: Voltar ao início */}
          <button
            onClick={scrollToTop}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/80 hover:bg-white text-[#7A6057] hover:text-[#4A3731] border border-[#E5D7D1] rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer active:scale-[0.99]"
          >
            <ArrowUp className="w-4 h-4 text-[#C5A880]" />
            <span>Voltar ao início</span>
          </button>
        </div>
      </article>

      {/* Footer information */}
      <footer className="mt-8 text-center text-xs text-[#9B7B70] space-y-1.5">
        <p className="font-serif text-sm font-medium text-[#5E4740]">
          {STUDIO_INFO.fullTitle}
        </p>
        <p>Prazeres · Jaboatão dos Guararapes — PE</p>
        <div className="flex items-center justify-center gap-2 text-xs text-[#8A6F66]">
          <a 
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4A3731] underline underline-offset-2"
          >
            Instagram
          </a>
          <span aria-hidden="true">·</span>
          <a 
            href={STUDIO_INFO.threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4A3731] underline underline-offset-2"
          >
            Threads
          </a>
        </div>
        <p className="text-[11px] text-[#AFA19B] pt-1">
          © {new Date().getFullYear()} Studio Cíntia Cibele. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
};
