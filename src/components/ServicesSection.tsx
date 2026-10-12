import React from 'react';
import { Droplet, Sparkles, Flower2, MessageCircle } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl } from '../data/studioData';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const renderIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-[#BA7D71]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'Flower2':
        return <Flower2 className="w-5 h-5 text-[#9E7364]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section className="px-4 py-5 max-w-md mx-auto" aria-labelledby="servicos-heading">
      {/* Editorial section header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-semibold tracking-wider text-[#A6885E] uppercase">
          Especialidades do Studio
        </span>
        <h2 id="servicos-heading" className="font-serif text-2xl font-semibold text-[#4A3731] mt-1">
          Nossos Serviços
        </h2>
        <div className="w-10 h-0.5 bg-[#C5A880]/60 mx-auto mt-2 rounded-full" />
      </div>

      {/* Cards list */}
      <div className="flex flex-col gap-4">
        {SERVICES.map((service) => {
          const whatsappHref = buildWhatsAppUrl(service.whatsappMessage);

          return (
            <article
              key={service.id}
              className="bg-white/90 border border-[#EADBCE] hover:border-[#C5A880]/80 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top accent line */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E8DAD4] to-transparent opacity-70 group-hover:via-[#C5A880] transition-colors duration-300" 
              />

              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF2EE] border border-[#ECDCD6] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#F6E8E2] transition-all duration-200">
                  {renderIcon(service.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-[#4A3731] leading-snug">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs text-[#9B7B70] mt-0.5">
                      {service.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#5E4740] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Action Button with soft Shimmer on hover */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FAF3F0] hover:bg-[#F3E5E0] text-[#4A3731] border border-[#E2CECA] hover:border-[#C5A880] rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.99] group/btn animate-shimmer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 group-hover/btn:scale-110 transition-transform duration-200" />
                <span className="truncate">{service.buttonText}</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
