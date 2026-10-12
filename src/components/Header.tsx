import React, { useState } from 'react';
import { MapPin, MessageCircle, Share2, Check, Sparkles, Instagram, X, Copy, Send } from 'lucide-react';
import { STUDIO_INFO, buildWhatsAppUrl } from '../data/studioData';
import { ThreadsIcon } from './ThreadsIcon';

export const Header: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: STUDIO_INFO.fullTitle,
          text: `Conheça o ${STUDIO_INFO.name} em Prazeres! Epilação hidrossolúvel e estética com todo cuidado.`,
          url: window.location.href,
        });
        setShowShareModal(false);
      } catch {
        // user dismissed
      }
    }
  };

  const referralWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Oi! Conheça o Studio Cíntia Cibele Epilação e Estética em Prazeres (Jaboatão dos Guararapes — PE). Atendimento impecável e muito acolhedor: ${window.location.href}`
  )}`;

  return (
    <header className="relative pt-8 pb-6 px-4 text-center" id="topo">
      {/* Decorative subtle background aura */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-b from-[#F5E6E1]/60 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* Top utility row: Animated Share button */}
      <div className="flex justify-end max-w-md mx-auto mb-3">
        <button
          onClick={() => setShowShareModal(true)}
          className="group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-[#7A6057] hover:text-[#4A3731] bg-white/80 hover:bg-white border border-[#E8DAD4] hover:border-[#C5A880] rounded-full transition-all duration-300 shadow-xs cursor-pointer active:scale-95 animate-float-gentle hover:shadow-sm"
          title="Compartilhar perfil do Studio"
          aria-label="Abrir opções de compartilhamento"
        >
          {/* Subtle glowing ring on hover */}
          <span 
            aria-hidden="true" 
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C5A880]/20 to-[#BA7D71]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xs" 
          />
          <Share2 className="w-3.5 h-3.5 text-[#C5A880] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium tracking-tight">Compartilhar</span>
        </button>
      </div>

      {/* Official Studio Logo with Gentle Floating Sparkle */}
      <div className="relative inline-block mb-4">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-[#C5A880] via-[#ECDCD6] to-[#C5A880] shadow-md mx-auto transition-transform duration-300 hover:scale-[1.03]">
          <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center relative overflow-hidden border border-white">
            {!imgError ? (
              <img
                src={STUDIO_INFO.logoUrl}
                alt="Logotipo Studio Cíntia Cibele Epilação e Estética"
                className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 hover:scale-105"
                onError={() => setImgError(true)}
                loading="eager"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#FAF5F2] to-[#F3E5E0] flex flex-col items-center justify-center">
                <span className="font-serif italic text-3xl font-semibold text-[#4A3731]">
                  CC
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#937267] font-medium mt-0.5">
                  Studio
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Animated decorative sparkle badge */}
        <div 
          aria-hidden="true"
          className="absolute -bottom-1 -right-1 bg-white border border-[#E8DAD4] text-[#C5A880] p-1.5 rounded-full shadow-xs animate-float-gentle"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#4A3731] tracking-tight leading-snug max-w-sm mx-auto">
        {STUDIO_INFO.fullTitle}
      </h1>

      {/* Clean Unboxed Location & Social Badges */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-[#8A6F66] mt-2 mb-3">
        <div className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
          <span>Prazeres</span>
          <span aria-hidden="true">·</span>
          <span>Jaboatão dos Guararapes, PE</span>
        </div>
        <span aria-hidden="true" className="hidden sm:inline text-[#C5A880]">·</span>
        <div className="inline-flex items-center gap-2">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#8A6F66] hover:text-[#4A3731] transition-colors underline-offset-2 hover:underline"
            title="Instagram oficial"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Instagram</span>
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={STUDIO_INFO.threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#8A6F66] hover:text-[#4A3731] transition-colors underline-offset-2 hover:underline"
            title="Threads oficial"
          >
            <ThreadsIcon className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Threads</span>
          </a>
        </div>
      </div>

      {/* Lead Capture Indicator: Atendimento com agendamento */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF2EE] border border-[#ECDCD6] rounded-full text-[11px] text-[#7A5F56] mb-3">
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
        <span className="font-medium">Atendimento com hora marcada · Agende sua sessão</span>
      </div>

      {/* Required Description */}
      <p className="text-sm sm:text-base text-[#5E4740] font-normal leading-relaxed max-w-sm mx-auto">
        {STUDIO_INFO.tagline}
      </p>

      {/* Required Complementary Text */}
      <p className="text-xs sm:text-sm text-[#8A6F66] mt-2 leading-relaxed max-w-xs mx-auto italic font-serif">
        &ldquo;{STUDIO_INFO.subTagline}&rdquo;
      </p>

      {/* Lead Conversion CTAs in Header: WhatsApp and Social Networks */}
      <div className="mt-5 max-w-sm mx-auto flex flex-col gap-2.5">
        <a
          href={buildWhatsAppUrl('Olá, Cíntia! Gostaria de agendar um horário no Studio Cíntia Cibele.')}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#4A3731] via-[#5C453E] to-[#4A3731] hover:from-[#3D2C27] hover:to-[#4E3932] text-white rounded-2xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] animate-lead-pulse animate-shimmer group"
        >
          <MessageCircle className="w-4 h-4 text-[#D8B485] group-hover:scale-110 transition-transform duration-200" />
          <span className="font-medium tracking-wide">Agendar Atendimento via WhatsApp</span>
        </a>

        {/* Dual Social Network Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/90 hover:bg-white text-[#4A3731] border border-[#E4D4CE] hover:border-[#C5A880] rounded-xl text-xs font-medium transition-all duration-150 shadow-xs hover:shadow-sm active:scale-[0.99]"
          >
            <Instagram className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>Instagram</span>
          </a>

          <a
            href={STUDIO_INFO.threadsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white/90 hover:bg-white text-[#4A3731] border border-[#E4D4CE] hover:border-[#C5A880] rounded-xl text-xs font-medium transition-all duration-150 shadow-xs hover:shadow-sm active:scale-[0.99]"
          >
            <ThreadsIcon className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>Threads</span>
          </a>
        </div>
      </div>

      {/* Elegant Share Modal / Sheet */}
      {showShareModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="relative w-full max-w-sm bg-[#FAF6F3] border border-[#EADBCE] rounded-3xl p-5 shadow-2xl text-left transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EEDBCE]">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#C5A880]" />
                <h3 id="share-modal-title" className="font-serif text-base font-semibold text-[#4A3731]">
                  Compartilhar Studio Cíntia Cibele
                </h3>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1.5 text-[#8A6F66] hover:text-[#4A3731] rounded-full hover:bg-white/60 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#6E554D] my-3 leading-relaxed">
              Indique para uma amiga que busca atendimento cuidadoso em epilação e estética em Prazeres!
            </p>

            <div className="space-y-2 pt-1">
              {/* WhatsApp Referral */}
              <a
                href={referralWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowShareModal(false)}
                className="w-full flex items-center gap-3 p-3 bg-white hover:bg-[#FAF2EE] border border-[#EADBCE] rounded-xl transition-all duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="text-xs font-semibold text-[#4A3731]">Indicar no WhatsApp</div>
                  <div className="text-[11px] text-[#8C7067] truncate">Enviar mensagem pronta para amigas</div>
                </div>
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 p-3 bg-white hover:bg-[#FAF2EE] border border-[#EADBCE] rounded-xl transition-all duration-200 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C5A880]/15 flex items-center justify-center shrink-0">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#C5A880] group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <div className="text-xs font-semibold text-[#4A3731]">
                    {copied ? 'Link copiado!' : 'Copiar link'}
                  </div>
                  <div className="text-[11px] text-[#8C7067] truncate">
                    {copied ? 'Pronto para colar em qualquer aplicativo' : 'Copiar URL do Studio'}
                  </div>
                </div>
              </button>

              {/* Native device share if supported */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-[#7A6057] hover:text-[#4A3731] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Outros aplicativos de compartilhamento</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
