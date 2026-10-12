/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { ServicesSection } from './components/ServicesSection';
import { CareGuideSection } from './components/CareGuideSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F3] text-[#4A3731] flex flex-col items-center selection:bg-[#EEDBD6] selection:text-[#382621]">
      {/* Background ambient gradient glow */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-[#F5E8E4]/70 via-[#FDF9F7]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#EFE3DF]/40 rounded-full blur-3xl" />
      </div>

      {/* Main Bio Site Container (Optimized for mobile-first Instagram Bio link) */}
      <main className="w-full max-w-md md:max-w-lg mx-auto flex flex-col min-h-screen">
        <Header />
        
        <div className="space-y-2">
          <ServicesSection />
          <CareGuideSection />
          <ReviewsSection />
          <LocationSection />
          <ContactSection />
        </div>
      </main>

      {/* Floating fast contact button */}
      <FloatingWhatsApp />
    </div>
  );
}
