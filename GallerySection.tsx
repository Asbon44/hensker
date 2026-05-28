import React, { useState } from 'react';
import { Cake, Menu, X, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  quoteCount: number;
}

export default function Header({ currentTab, setCurrentTab, quoteCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'gallery', label: 'Bespoke Gallery' },
    { id: 'services', label: 'Our Services' },
    { id: 'customizer', label: 'Cake Designer' },
    { id: 'about', label: 'The Atelier' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="header-brand"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200 text-amber-800 transition-all duration-300 group-hover:bg-amber-800 group-hover:text-amber-50 group-hover:scale-105">
              <Cake className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl tracking-wider text-[#2C2621] font-bold">
                HENKAR
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-amber-700 block -mt-1 font-semibold">
                Boutique Cakes & Sugar Art
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  currentTab === item.id
                    ? 'text-amber-900 bg-amber-50/70 border-b-2 border-amber-800 font-semibold'
                    : 'text-[#60554B] hover:text-amber-900 hover:bg-[#F2ECE4]/40'
                }`}
                id={`nav-${item.id}`}
              >
                {item.id === 'customizer' ? (
                  <span className="flex items-center gap-1.5 font-semibold text-amber-800">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </button>
            ))}
          </nav>

          {/* Action Call / Inquiry Icon Count */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('customizer')}
              className="relative relative-flex items-center gap-2 px-5 py-2.5 bg-[#4A3B32] hover:bg-[#322721] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow transition-all duration-300 transform active:scale-95"
              id="cta-build-cake"
            >
              <span>Design Your Cake</span>
              {quoteCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-bounce" id="quote-badge">
                  {quoteCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {quoteCount > 0 && (
              <button
                onClick={() => handleNavClick('customizer')}
                className="relative p-2 text-[#4A3B32] bg-amber-100 rounded-full"
                id="mobile-badge-btn"
              >
                <Sparkles className="w-5 h-5 text-amber-800" />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {quoteCount}
                </span>
              </button>
            )}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-[#4A3B32] bg-[#F5EFE6] hover:bg-[#EDE6D9] focus:outline-none focus:ring-2 focus:ring-amber-800/20"
              id="mobile-nav-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-[#E8E2D9] py-4 px-6 animate-fadeIn" id="mobile-nav-panel">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  currentTab === item.id
                    ? 'text-amber-900 bg-amber-100/60 font-semibold'
                    : 'text-[#60554B] hover:bg-[#F2ECE4]/50'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                <span>{item.label}</span>
                {item.id === 'customizer' && <Sparkles className="w-4 h-4 text-amber-700 font-semibold" />}
              </button>
            ))}
            
            <button
              onClick={() => handleNavClick('customizer')}
              className="mt-4 w-full py-3 bg-[#4A3B32] hover:bg-[#322721] text-white rounded-xl text-center font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
              id="mobile-cta-btn"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch Studio Customizer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
