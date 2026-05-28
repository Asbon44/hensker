import React from 'react';
import { Leaf, Award, Compass, Heart, Feather } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: <Leaf className="w-5 h-5 text-emerald-800" />,
      title: 'Ethical Organic Sourcing',
      description: 'We strictly reject artificial flavorings or shortening. Our studio only works with stone-milled biological flours, organic unpasteurized comb honey, and freshly scraped Bourbon vanilla beans.'
    },
    {
      icon: <Award className="w-5 h-5 text-amber-800" />,
      title: 'Sculptural Confectionery Art',
      description: 'Cakes are the ultimate transient sculptures. We spend hundreds of hours researching design concepts, textures, and structures to craft an experience that is deeply personal and original.'
    },
    {
      icon: <Feather className="w-5 h-5 text-teal-800" />,
      title: 'Textural Balanced Profiles',
      description: 'Our bakes prioritize balanced, subtle sugar volumes. We accent rich foundations with bright acidic fruit reductions, savory herb undertones, and velvet whipped creams.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="about-atelier">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline headers */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-header">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-850">Our Story</span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#2C2621] mt-2 mb-4">
            The Atelier Where Sugar Meets Soul
          </h2>
          <div className="w-12 h-[2px] bg-amber-800 mx-auto mb-6"></div>
          <p className="font-sans text-base text-[#60554B] leading-relaxed">
            Founded by culinary master and sugar sculptor Chef Henkar, our studio serves clients seeking extraordinary centerpieces for the most beautiful moments of their lives.
          </p>
        </div>

        {/* Brand Core Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="about-story-row">
          
          {/* Left: Chef Portrait & Baker Visuals */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            <div className="absolute inset-0 bg-[#F4EDE4] rounded-2xl rotate-2 transform -translate-x-2 translate-y-2 border border-[#E8E2D9]"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '1/1' }}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                alt="Chef Henkar detailing a custom vanilla bean sugar lace layer in the design studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                id="about-chef-img"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-amber-950 p-6 rounded-2xl text-white shadow-xl max-w-[200px]" id="about-experience-badge">
              <span className="block text-3xl font-serif font-bold text-amber-300">15+</span>
              <span className="block text-[10px] uppercase tracking-widest text-amber-100 font-semibold mt-1">Years of Sugar Sculpting Excellence</span>
            </div>
          </div>

          {/* Right: Detailed Story lines */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="about-bio">
            <h3 className="font-serif text-2xl tracking-tight text-[#2C2621] mb-4">
              A Philosophy of Wholesome Luxury
            </h3>
            
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#60554B] leading-relaxed">
              <p>
                Before launching the boutique, Chef Henkar trained in Michelin-starred pastry and baking ateliers across Paris and Vienna, mastering both classic French pastry discipline and modern design scales. 
              </p>
              <p>
                Our vision was simple: dismantle the industry trend of generic, chemical and heavy cake bases that look gorgeous but lack flavor depth. We believe beautiful celebrations deserve true ingredients.
              </p>
              <p className="italic font-serif font-medium text-amber-900 border-l-4 border-amber-800 pl-4 py-1.5 my-6">
                &ldquo;A cake is not just a food item; it is the ultimate ceremony centerpiece. It marks the precise second when guests gather, toasts are made, and memories are written permanently in time.&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#807469]">
                — Chef Henkar, Founder & Master Confectioner
              </p>
            </div>
          </div>

        </div>

        {/* Our Values cards */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#EDE5DC] items-stretch" id="about-values">
          <div className="text-center mb-10">
            <h3 className="font-serif text-xl sm:text-2xl text-[#2C2621]">Our Core Confection Standards</h3>
            <p className="text-xs text-[#807469] mt-1 font-semibold tracking-wider uppercase">What makes a Henkar Cake rare</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                id={`value-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center mb-4 text-amber-900">
                  {v.icon}
                </div>
                <h4 className="font-serif font-bold text-base text-[#2C2621] mb-2">{v.title}</h4>
                <p className="font-sans text-xs text-[#7A6E63] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
