import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_INFO.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <section className="px-4 py-5 max-w-md mx-auto" aria-labelledby="localizacao-heading">
      {/* Section Header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-semibold tracking-wider text-[#A6885E] uppercase">
          Fácil Acesso
        </span>
        <h2 id="localizacao-heading" className="font-serif text-2xl font-semibold text-[#4A3731] mt-1">
          Onde estamos
        </h2>
        <div className="w-10 h-0.5 bg-[#C5A880]/60 mx-auto mt-2 rounded-full" />
      </div>

      <article className="bg-white/90 border border-[#EADBCE] hover:border-[#C5A880]/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
        <div className="flex items-start gap-3.5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FAF2EE] border border-[#ECDCD6] flex items-center justify-center shrink-0 group-hover:bg-[#F5E7E1] transition-colors">
            <MapPin className="w-5 h-5 text-[#C5A880]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base font-semibold text-[#4A3731]">
              Nosso Endereço
            </h3>
            <p className="text-sm text-[#5E4740] font-medium mt-1 leading-snug">
              {STUDIO_INFO.address}
            </p>
          </div>
        </div>

        {/* Copy Address helper button */}
        <div className="mb-4 flex justify-end">
          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#7A6057] hover:text-[#4A3731] bg-[#FAF5F2] hover:bg-[#F3E7E2] rounded-lg border border-[#EADBCE] transition-all cursor-pointer active:scale-95"
            title="Copiar endereço completo"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Endereço copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Copiar endereço</span>
              </>
            )}
          </button>
        </div>

        {/* Independent Required Button to Google Maps */}
        <a
          href={STUDIO_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FAF3F0] hover:bg-[#F3E5E0] text-[#4A3731] border border-[#E2CECA] hover:border-[#C5A880] rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.99] group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880]"
        >
          <Navigation className="w-4 h-4 text-[#BA7D71] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 shrink-0" />
          <span>Localização no Google Maps</span>
        </a>
      </article>
    </section>
  );
};
