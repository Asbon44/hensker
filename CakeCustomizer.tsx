import React from 'react';
import { ArrowRight, Sparkles, Heart, Award, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-16 lg:py-24" id="home-hero">
      
      {/* Delicate background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EDE5DC] rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-12 translate-y-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100/50 rounded-full border border-amber-200/50 w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-800 animate-spin-slow" />
              <span className="text-xs font-semibold tracking-wider text-amber-900 uppercase">
                Bespoke Couture Confections
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#2C2621] leading-tight mb-6">
              Savor the Art of <br />
              <span className="text-amber-900 italic font-semibold">Bespoke Celebrations</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#60554B] max-w-xl leading-relaxed mb-8">
              At Henkar Cakes, we handcraft custom baked masterworks that taste as breathtaking as they look. Utilizing rare organic lavender, edible 24-karat gold, and premium Madagascar caviar vanilla beans to elevate life's milestones into unforgettable sensory memories.
            </p>

            {/* Direct Client CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setCurrentTab('customizer')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A3B32] hover:bg-[#322721] text-white font-semibold text-sm tracking-wide uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-designer-btn"
              >
                <span>Interactive Cake Studio</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              <button
                onClick={() => setCurrentTab('gallery')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#E0D8CE] hover:border-[#4A3B32] text-[#4A3B32] font-semibold text-sm tracking-wide uppercase rounded-xl hover:bg-[#F2ECE4]/35 transition-all duration-300"
                id="hero-gallery-btn"
              >
                <span>Browse Design Gallery</span>
              </button>
            </div>

            {/* Premium Commitments Info Rail */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E8E2D9] pt-8" id="hero-quality-commitments">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-800 border border-amber-100/50">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-[#2C2621] font-semibold text-sm">Couture Recipe Design</h4>
                  <p className="text-xs text-[#7A6E63] mt-0.5 leading-normal">Bespoke lavender honey, rich custom stout, and floral glazes.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-800 border border-amber-100/50">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-[#2C2621] font-semibold text-sm">Fine Sugar Artistry</h4>
                  <p className="text-xs text-[#7A6E63] mt-0.5 leading-normal">Intricate Geode crystal caves, handmade sugar roses, 24k gilding.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-800 border border-amber-100/50">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-[#2C2621] font-semibold text-sm">White-glove Assembly</h4>
                  <p className="text-xs text-[#7A6E63] mt-0.5 leading-normal">Air-conditioned transport with precision setup at your local venue.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image (Framed, Arched Panel) */}
          <div className="lg:col-span-5 flex justify-center items-center" id="hero-right">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Back framing decorative rectangle */}
              <div className="absolute inset-0 bg-amber-950/5 rounded-[40px] rotate-3 transform -translate-x-3 translate-y-3 border border-amber-800/10"></div>
              
              {/* Main Arched Frame */}
              <div className="relative rounded-t-[180px] rounded-b-[40px] overflow-hidden border-[10px] sm:border-[16px] border-[#FFFDFB] shadow-2xl bg-amber-50 animate-fadeIn" style={{ aspectRatio: '3/4' }}>
                <img
                  src={HERO_IMAGE}
                  alt="Henkar Cakes custom tier rose gold wedding cake artwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  id="hero-main-img"
                />
              </div>

              {/* Designer Signature Badge overlay */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-[#E8E2D9] px-4.5 py-3 rounded-2xl shadow-lg flex items-center gap-3" id="hero-mini-badge">
                <div className="w-9 h-9 rounded-full bg-amber-800 flex items-center justify-center text-amber-100">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-semibold text-amber-700 tracking-wider">Aesthetic Standard</span>
                  <span className="block text-xs font-serif font-bold text-[#2C2621]">Chef Henkar Studios</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
