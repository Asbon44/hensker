import React, { useState } from 'react';
import { Filter, Eye, X, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  setCurrentTab: (tab: string) => void;
  setPreconfiguredCake: (spec: { shape: 'round' | 'square' | 'hexagon'; tiers: number; finish: 'smooth_fondant' | 'textured_buttercream' | 'naked_rustic' | 'geode_sculpt'; flavor: string }) => void;
}

export default function GallerySection({ setCurrentTab, setPreconfiguredCake }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wedding' | 'celebration' | 'artisan' | 'mini'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories: { id: 'all' | 'wedding' | 'celebration' | 'artisan' | 'mini'; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'wedding', label: 'Custom Weddings' },
    { id: 'celebration', label: 'Celebrations & Drips' },
    { id: 'artisan', label: 'Artisan Geodes' },
    { id: 'mini', label: 'Mini Delights' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleConfigureInspired = (item: GalleryItem) => {
    // Attempt parsing lookups to populate the designer logically
    let shape: 'round' | 'square' | 'hexagon' = 'round';
    if (item.name.toLowerCase().includes('hexagon')) {
      shape = 'hexagon';
    } else if (item.name.toLowerCase().includes('square')) {
      shape = 'square';
    }

    let finish: 'smooth_fondant' | 'textured_buttercream' | 'naked_rustic' | 'geode_sculpt' = 'textured_buttercream';
    if (item.category === 'artisan' || item.name.toLowerCase().includes('geode')) {
      finish = 'geode_sculpt';
    } else if (item.name.toLowerCase().includes('fondant') || item.description.toLowerCase().includes('fondant')) {
      finish = 'smooth_fondant';
    } else if (item.description.toLowerCase().includes('naked') || item.description.toLowerCase().includes('rustic')) {
      finish = 'naked_rustic';
    }

    let tiers = 1;
    if (item.description.toLowerCase().includes('four-tier') || item.description.toLowerCase().includes('four tier')) {
      tiers = 4;
    } else if (item.description.toLowerCase().includes('three-tier') || item.description.toLowerCase().includes('three tier')) {
      tiers = 3;
    } else if (item.description.toLowerCase().includes('two-tier') || item.description.toLowerCase().includes('double stack')) {
      tiers = 2;
    }

    setPreconfiguredCake({
      shape,
      tiers,
      finish,
      flavor: item.flavors[0] || 'Madagascar Vanilla Bean & Passionfruit'
    });
    
    // Auto shift view tabs
    setCurrentTab('customizer');
    setActiveModalItem(null);
  };

  return (
    <section className="py-20 bg-white" id="porfolio-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="gallery-heading">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-850">Our Portfolio</span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#2C2621] mt-2 mb-4">
            A Gallery of Custom Masterpieces
          </h2>
          <div className="w-12 h-[2px] bg-amber-800 mx-auto mb-6"></div>
          <p className="font-sans text-base text-[#60554B]">
            Explore custom physical designs prepared for prestigious venues and events. Click any creation to inspect structure, dimensions, and flavor options.
          </p>
        </div>

        {/* Categories Tab and Filters bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-category-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#4A3B32] text-[#FAF8F5] border-[#4A3B32] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#60554B] border-[#EDE5DC] hover:border-amber-800/40 hover:text-amber-900'
              }`}
              id={`cat-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#EDE5DC] p-3 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative"
              id={`gallery-item-${item.id}`}
            >
              {/* Premium Category corner Tag */}
              <span className="absolute top-5 right-5 z-10 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow border border-amber-900/15 text-amber-900">
                {item.category}
              </span>

              {/* image display frame */}
              <div className="relative rounded-xl overflow-hidden bg-amber-50 aspect-square" id={`pic-frame-${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Micro hover trigger screen */}
                <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/95 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-amber-850" />
                  </div>
                </div>
              </div>

              {/* description layout */}
              <div className="pt-4 text-left px-1">
                <span className="text-[10px] font-mono text-amber-700 tracking-wider">
                  Price standard: <span className="font-bold text-amber-900 font-sans text-xs">{item.priceRange}</span>
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2C2621] group-hover:text-amber-900 transition-colors duration-200 mt-1 truncate">
                  {item.name}
                </h3>
                <p className="font-sans text-xs text-[#7A6E63] mt-1.5 leading-normal line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* empty grid help display */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#EDE5DC]" id="gallery-empty">
            <AlertCircle className="w-8 h-8 text-amber-700 mx-auto mb-3" />
            <p className="font-serif text-lg text-[#2C2621]">Creations arriving soon</p>
            <p className="font-sans text-xs text-[#7A6E63] mt-1">Our chefs are preparing catalog pieces for this line.</p>
          </div>
        )}

        {/* Interactive Detail Modal backdrop */}
        {activeModalItem && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-amber-950/60 backdrop-blur-sm animate-fadeIn"
            id="gallery-backdrop"
            onClick={() => setActiveModalItem(null)}
          >
            {/* Modal Box */}
            <div 
              className="bg-[#FFFDFB] w-full max-w-4xl rounded-2xl border border-[#EDE5DC] shadow-2xl overflow-hidden flex flex-col md:flex-row relative text-left"
              id="gallery-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top corner Close button */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#FFFDFB] hover:bg-amber-100 border border-[#EDE5DC] rounded-full text-[#4A3B32] focus:outline-none transition-colors duration-200"
                id="modal-close-btn"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Left Image view */}
              <div className="w-full md:w-1/2 bg-amber-50 relative aspect-square md:aspect-auto md:min-h-[500px]" id="modal-left">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Ribbon overlay identifier */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-900/95 text-white rounded-full border border-amber-800 text-xs uppercase tracking-widest font-semibold shadow">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{activeModalItem.category} Design</span>
                </div>
              </div>

              {/* Modal Right Info text */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between" id="modal-right">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="text-[10px] font-mono text-amber-700 font-semibold tracking-widest uppercase bg-[#FAF7F2] border border-[#EDE5DC] px-2.5 py-1 rounded">
                      Estimated Sizing: {activeModalItem.slices}
                    </span>
                    <span className="text-sm font-sans font-bold text-amber-900">
                      Standard: {activeModalItem.priceRange}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2621] mb-4">
                    {activeModalItem.name}
                  </h2>

                  <p className="font-sans text-sm text-[#60554B] leading-relaxed mb-6">
                    {activeModalItem.description}
                  </p>

                  {/* Structural Specifics */}
                  <div className="mb-6">
                    <h4 className="font-serif text-sm font-semibold text-[#2C2621] border-b border-[#F2ECE4] pb-2 mb-3">
                      Design Notes & Structural Build
                    </h4>
                    <ul className="space-y-2">
                      {activeModalItem.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-2.5 items-start text-xs font-sans text-[#60554B] leading-normal">
                          <span className="text-amber-800 select-none mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Taste Profiles */}
                  <div className="mb-8">
                    <h4 className="font-serif text-sm font-semibold text-[#2C2621] border-b border-[#F2ECE4] pb-2 mb-3">
                      Signature Flavor pairings
                    </h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {activeModalItem.flavors.map((flavor, fIdx) => (
                        <span key={fIdx} className="bg-amber-50/70 border border-amber-100 text-amber-900 px-3 py-1.5 rounded-lg font-medium leading-none">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Link action */}
                <div className="pt-6 border-t border-[#F2ECE4]">
                  <button
                    onClick={() => handleConfigureInspired(activeModalItem)}
                    className="w-full py-3.5 bg-amber-800 hover:bg-amber-900 text-white font-semibold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group-button"
                    id="modal-cta-configure"
                  >
                    <span>Plan Cake Inspired by This</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
