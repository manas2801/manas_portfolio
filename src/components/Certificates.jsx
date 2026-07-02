import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="bg-[#2563eb] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Certifications
          </h2>
          <p className="text-blue-950 text-base md:text-lg font-bold max-w-lg mx-auto">
            Professional qualifications demonstrating specialized technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid (3 on top row, 2 on bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-12">
          {certificates.featured.map((cert, index) => (
            <div 
              key={cert.name}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              onClick={() => setActiveCert(cert)}
              className="bg-black/25 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.03] hover:bg-black/35 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                    {cert.icon}
                  </span>
                  <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/15 group-hover:border-white/30 transition-colors">
                    Preview
                  </span>
                </div>

                <h3 className="text-white text-xl font-black mb-1 tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-white/40 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                  {cert.issuer}
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-medium mb-6">
                  {cert.desc}
                </p>
              </div>

              {/* View/Hover Visual Indicator */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Open Interactive Preview</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal Certificate Mockup Component */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex justify-center items-center p-4 backdrop-blur-lg animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          {/* Modal Container */}
          <div 
            className="bg-zinc-900 border border-white/10 max-w-3xl w-full rounded-3xl p-8 relative flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10 hover:rotate-90 transition-all duration-300"
              onClick={() => setActiveCert(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Premium Certificate Mockup */}
            <div className="w-full bg-white text-zinc-800 p-8 md:p-12 rounded-2xl border-8 border-double border-blue-600 shadow-inner relative overflow-hidden font-serif max-w-2xl text-center select-none mt-4">
              
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blue-600"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blue-600"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blue-600"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blue-600"></div>

              {/* Certificate content */}
              <p className="text-[10px] tracking-[0.2em] font-sans font-bold text-blue-600 uppercase mb-4">
                Certificate of Achievement
              </p>
              
              <h4 className="text-lg md:text-xl font-sans font-semibold text-zinc-600 italic mb-6">
                This is proudly presented to
              </h4>

              <h3 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 font-sans tracking-tight border-b-2 border-blue-100 pb-4 max-w-md mx-auto">
                Manas Mayank
              </h3>

              <p className="text-sm leading-relaxed max-w-lg mx-auto text-zinc-600 mb-8 font-sans font-medium">
                For successfully fulfilling all curricular requirements and demonstrating proficiency in
                <br />
                <span className="font-bold text-zinc-800 text-base block mt-2">{activeCert.name}</span>
              </p>

              {/* Signature Row */}
              <div className="flex justify-between items-end max-w-md mx-auto pt-4 font-sans text-xs font-semibold text-zinc-500">
                <div className="flex flex-col items-center">
                  <div className="w-24 border-b border-zinc-300 pb-1 italic text-zinc-700">Verified</div>
                  <div className="mt-1">Issuer: {activeCert.issuer}</div>
                </div>
                {/* Gold/Blue Badge Seal SVG */}
                <div className="w-16 h-16 text-blue-600 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 border-b border-zinc-300 pb-1 italic text-zinc-700 font-serif">Online Link</div>
                  <div className="mt-1">Cred ID: Available</div>
                </div>
              </div>
            </div>

            {/* Action buttons in modal */}
            <div className="flex gap-4 mt-8">
              <a 
                href={activeCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Verify on Google Drive
              </a>
              <button 
                onClick={() => setActiveCert(null)}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
