import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 240px
      if (window.scrollY > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Lead Capture Speech Bubble */}
      {showTooltip && (
        <div className="relative bg-white border border-[#E8DAD4] text-[#4A3731] py-1.5 pl-3 pr-2 rounded-2xl shadow-lg flex items-center gap-2 max-w-[210px] sm:max-w-xs animate-float-gentle text-left">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-[#4A3731] leading-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0 animate-ping" />
              Horários disponíveis
            </p>
            <p className="text-[10px] text-[#7A6057] leading-tight mt-0.5 truncate">
              Toque para falar no WhatsApp
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-[#A38B83] hover:text-[#4A3731] rounded-full hover:bg-[#FAF4F1] transition-colors shrink-0 cursor-pointer"
            aria-label="Dispensar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          
          {/* Speech bubble arrow pointing down to button */}
          <div 
            aria-hidden="true" 
            className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-[#E8DAD4] rotate-45"
          />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={buildWhatsAppUrl('Olá, Cíntia! Gostaria de consultar os horários disponíveis no Studio.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Studio Cíntia Cibele"
        className="flex items-center gap-2.5 pl-3.5 pr-4 py-3 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group animate-whatsapp-pulse animate-shimmer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <MessageCircle className="w-5 h-5 fill-white/20 shrink-0 group-hover:scale-110 transition-transform duration-200" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Agendar no WhatsApp
        </span>
        <span className="text-xs font-semibold tracking-wide sm:hidden">
          Agendar
        </span>
      </a>
    </aside>
  );
};
