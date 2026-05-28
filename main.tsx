import React from 'react';
import { Calendar, Trash2, Tag, Compass, Layers, Mail, Sparkles, User, FileText, Check } from 'lucide-react';
import { CakeQuoteRequest } from '../types';

interface InquiryHistoryProps {
  inquiries: (CakeQuoteRequest & { id: string; priceEstimate: number; timestamp: string })[];
  onRemoveInquiry: (id: string) => void;
}

export default function InquiryHistory({ inquiries, onRemoveInquiry }: InquiryHistoryProps) {
  if (inquiries.length === 0) {
    return null; // Don't show the dashboard if there are zero items
  }

  return (
    <section className="py-12 bg-white border-t border-[#E8E2D9]" id="inquiries-panel-dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Heading */}
        <div className="flex items-center gap-3 mb-8 text-left">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-900 border border-amber-200">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2621]">Your Custom Projects Hub</h3>
            <p className="text-xs text-[#7A6E63] mt-0.5">Track, review, or make adjustments to your submitted design configs.</p>
          </div>
        </div>

        {/* Inquiry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="inquiries-list">
          {inquiries.map((inq) => (
            <div 
              key={inq.id}
              className="bg-[#FAF7F2] rounded-2xl border border-[#EDE5DC] p-5.5 relative shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
              id={`inq-card-${inq.id}`}
            >
              
              {/* Card Top */}
              <div>
                <div className="flex justify-between items-start border-b border-[#E8E2D9] pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800">
                      ID: {inq.id}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#2C2621] mt-0.5 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-[#807469]" />
                      <span>{inq.tiers} Tiers ({inq.shape.toUpperCase()})</span>
                    </h4>
                  </div>
                  
                  {/* Status Indicator Pill */}
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-wider uppercase px-2 py-1 bg-amber-100 border border-amber-200 text-amber-950 rounded-full select-none">
                    <Sparkles className="w-2.5 h-2.5 text-amber-800" />
                    <span>In Consultation</span>
                  </span>
                </div>

                {/* Grid values descriptions */}
                <div className="space-y-2 text-xs text-[#60554B] font-sans">
                  
                  {/* Styling finishes and flavors */}
                  <p className="flex justify-between border-b border-dashed border-[#E8E2D9] pb-1">
                    <span className="text-[#8B7E74]">Exterior Finish:</span>
                    <span className="font-medium text-[#2C2621]">{inq.finish.replace('_', ' ').toUpperCase()}</span>
                  </p>
                  
                  <p className="flex justify-between border-b border-dashed border-[#E8E2D9] pb-1">
                    <span className="text-[#8B7E74]">Artisan Flavor:</span>
                    <span className="font-medium text-[#2C2621] truncate max-w-[180px]" title={inq.flavor}>
                      {inq.flavor}
                    </span>
                  </p>

                  {inq.accents.length > 0 && (
                    <p className="flex justify-between border-b border-dashed border-[#E8E2D9] pb-1">
                      <span className="text-[#8B7E74]">Accents:</span>
                      <span className="font-medium text-[#2C2621] truncate max-w-[185px]">
                        {inq.accents.join(', ')}
                      </span>
                    </p>
                  )}

                  <p className="flex justify-between border-b border-dashed border-[#E8E2D9] pb-1">
                    <span className="text-[#8B7E74]">Slices / Guests:</span>
                    <span className="font-medium text-[#2C2621]">{inq.servingsNeeded} guests</span>
                  </p>

                  <p className="flex justify-between pb-1">
                    <span className="text-[#8B7E74] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8B7E74]" />
                      <span>Event Date:</span>
                    </span>
                    <span className="font-semibold text-amber-950">{inq.eventDate}</span>
                  </p>

                  {/* Notes Callout */}
                  {inq.notes !== 'None specified' && (
                    <div className="mt-3 bg-white hover:bg-amber-50/20 p-2.5 rounded-lg border border-[#EDE5DC] text-[10px] leading-relaxed text-[#7A6E63] italic max-h-[64px] overflow-y-auto">
                      &ldquo;{inq.notes}&rdquo;
                    </div>
                  )}

                </div>
              </div>

              {/* CARD BOTTOM: TOTAL ESTIMATES & DELETE TARGETS */}
              <div className="mt-5 pt-4 border-t border-[#E8E2D9] flex justify-between items-center bg-[#FAF7F2]">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#A69B8F] font-mono leading-none">Est. Invoice</span>
                  <span className="text-base font-serif font-bold text-amber-950">${inq.priceEstimate} USD</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      alert(`Project Details Log:\nID: ${inq.id}\nClient: ${inq.name} (${inq.email})\nEvent Date: ${inq.eventDate}\nEstimated Total: $${inq.priceEstimate}\n\nTasting appointment details have been dispatched to ${inq.email}. Check spam or updates folder.`);
                    }}
                    className="p-2 bg-white hover:bg-[#EDE6D9] text-[#4A3B32] border border-[#EDE5DC] rounded-xl transition-colors duration-200"
                    title="Print Receipt Notes"
                    id={`info-inq-${inq.id}`}
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveInquiry(inq.id)}
                    className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 rounded-xl transition-colors duration-200"
                    title="Delete custom config"
                    id={`delete-inq-${inq.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
