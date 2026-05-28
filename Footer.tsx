import React, { useState } from 'react';
import { Heart, Sparkles, Cake, GraduationCap, ChevronDown, ChevronUp, Clock, Calendar, CheckCircle } from 'lucide-react';
import { SERVICES_LIST } from '../data';

interface ServicesSectionProps {
  setCurrentTab: (tab: string) => void;
}

export default function ServicesSection({ setCurrentTab }: ServicesSectionProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('s1');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Cake':
        return <Cake className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Cake className="w-5 h-5" />;
    }
  };

  const getTagBg = (id: string) => {
    switch (id) {
      case 's1': return 'bg-rose-50 border-rose-100 text-rose-850';
      case 's2': return 'bg-amber-50 border-amber-100 text-amber-850';
      case 's3': return 'bg-teal-50 border-teal-100 text-teal-850';
      default: return 'bg-purple-50 border-purple-100 text-purple-850';
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2]" id="services-confectionery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-850">The Service Standards</span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#2C2621] mt-2 mb-4">
            Bespoke Confectionery Offerings
          </h2>
          <div className="w-12 h-[2px] bg-amber-800 mx-auto mb-6"></div>
          <p className="font-sans text-base text-[#60554B]">
            From your very first sketch consultation to the final physical slice at your venue, we elevate every single layer to a beautiful luxury standard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="services-row">
          
          {/* Left: Beautiful detailed service interactive panel (accordions) */}
          <div className="lg:col-span-8 space-y-4" id="services-accordion-panel">
            {SERVICES_LIST.map((service) => {
              const isExpanded = activeAccordion === service.id;
              return (
                <div 
                  key={service.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'border-amber-800 shadow-md ring-1 ring-amber-850/5' 
                      : 'border-[#E8E2D9] hover:border-amber-800/30 hover:shadow-sm'
                  }`}
                  id={`accordion-${service.id}`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => setActiveAccordion(isExpanded ? null : service.id)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    id={`accordion-trigger-${service.id}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isExpanded ? 'bg-amber-800 text-white' : 'bg-[#FAF7F2] text-[#4A3B32] border border-[#E8E2D9]'} transition-colors duration-300`}>
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className={`text-[10px] uppercase tracking-widest font-semibold ${isExpanded ? 'text-amber-850' : 'text-amber-700'}`}>
                          {service.tagline}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2621] mt-0.5">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block text-xs font-sans font-semibold text-[#807469] bg-[#FAF7F2]/80 border border-[#E8E2D9] px-3 py-1.5 rounded-full">
                        {service.priceLabel}
                      </span>
                      <div className="text-[#4A3B32]">
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-800" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content Body */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-[#F2ECE4] pt-5 animate-slideDown" id={`accordion-body-${service.id}`}>
                      
                      {/* Description */}
                      <p className="font-sans text-sm text-[#60554B] leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Process lists */}
                      <div className="mb-6">
                        <h4 className="font-serif text-sm font-semibold text-[#2C2621] mb-3">
                          Our Signature Step-by-Step Experience
                        </h4>
                        <div className="space-y-3">
                          {service.process.map((step, sIdx) => (
                            <div key={sIdx} className="flex gap-3 items-start">
                              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                                <span className="text-[10px] font-bold text-amber-900">{sIdx + 1}</span>
                              </div>
                              <p className="font-sans text-xs text-[#60554B] leading-normal">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Pricing Label show */}
                      <div className="sm:hidden mb-4 p-3 bg-amber-50/50 rounded-lg text-center border border-amber-100">
                        <span className="text-xs text-[#807469] font-medium block">Starting Price:</span>
                        <span className="text-sm font-serif font-bold text-amber-950 block mt-0.5">{service.priceLabel}</span>
                      </div>

                      {/* CTA within expanded details */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-3">
                        <button
                          onClick={() => setCurrentTab('customizer')}
                          className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-300"
                        >
                          {service.id === 's4' ? 'Book Dynamic Masterclass' : 'Launch Customizer Studio'}
                        </button>
                        <button
                          onClick={() => {
                            const customizerForm = document.getElementById('cake-customizer-app');
                            if (customizerForm) {
                              customizerForm.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              setCurrentTab('customizer');
                            }
                          }}
                          className="px-5 py-2.5 bg-transparent border border-[#EDE5DC] hover:border-amber-800 text-[#4A3B32] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-amber-50/20 transition-all duration-300"
                        >
                          Send Bespoke Inquiry
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side: Beautiful visual checklist / commitment sidebar card */}
          <div className="lg:col-span-4" id="services-sidebar">
            <div className="sticky top-24 bg-white rounded-2xl p-6 border border-[#E8E2D9] shadow-md text-left">
              <h3 className="font-serif text-lg font-bold text-[#2C2621] mb-4">
                Our Signature Guarantees
              </h3>
              
              <p className="font-sans text-xs text-[#7A6E63] leading-relaxed mb-6">
                No matter the design scale, every piece prepared in Chef Henkar's studio incorporates our strict standard of couture sugar crafting.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#2C2621]">Always Pure Ingredients</h4>
                    <p className="text-[11px] text-[#7A6E63] mt-0.5">Real double sieved almond meal, cage-free eggs, raw brown honeycomb, organic herbs.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#2C2621]">Flawless Safe Transportation</h4>
                    <p className="text-[11px] text-[#7A6E63] mt-0.5">Delivered in custom structured temperature-insulated airtight carrying cases.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#2C2621]">Allergenic Considerations</h4>
                    <p className="text-[11px] text-[#7A6E63] mt-0.5">Flawless plant-based, egg-free, or gluten-free adjustments upon design.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs font-bold text-[#2C2621]">Complementary Slices Keepsake</h4>
                    <p className="text-[11px] text-[#7A6E63] mt-0.5">Our wedding cakes include a matching mini tier reserved specifically for your anniversary.</p>
                  </div>
                </div>
              </div>

              {/* Consultation Tasting Callout */}
              <div className="mt-8 bg-amber-50/50 rounded-xl p-4 border border-amber-100 flex items-center gap-3">
                <Clock className="w-8 h-8 text-amber-800 shrink-0" />
                <div>
                  <h5 className="font-serif text-xs font-bold text-amber-950">Arrange a Private Tasting</h5>
                  <p className="text-[10px] text-amber-900/80 mt-0.5 leading-normal">
                    Chef-hosted cake tastings and designs are held every Tuesday at our studio.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
