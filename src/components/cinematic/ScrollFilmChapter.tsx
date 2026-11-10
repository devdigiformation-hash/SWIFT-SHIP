import React, { useRef, useEffect, useState } from 'react';
import { SequenceManifest } from '../../types/sequence';
import { FrameSequencePlayer } from './FrameSequencePlayer';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ScrollFilmChapterProps {
  sequence: SequenceManifest;
  index: number;
}

export const ScrollFilmChapter: React.FC<ScrollFilmChapterProps> = ({ sequence }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distance available for pinned scrub
      const totalDist = rect.height - windowHeight;
      if (totalDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Section 01: Hero Full Viewport-Width Cinematic (Video 01)
  if (sequence.layout === 'hero-morph') {
    return (
      <div ref={containerRef} className="relative h-[220vh] bg-swift-dark w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
          {/* Main Visual Canvas - Full Viewport Width Edge-to-Edge */}
          <div className="absolute inset-0 w-full h-full">
            <FrameSequencePlayer
              sequence={sequence}
              progress={scrollProgress}
              className="w-full h-full"
            />
            {/* Seamless Vignette & Lighting Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-swift-dark via-swift-dark/20 to-swift-dark/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-swift-dark/85 via-swift-dark/30 to-transparent pointer-events-none" />
          </div>

          {/* Floating Brand Narrative - Aligned to Standard Global Container */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full flex flex-col justify-end pb-12 sm:pb-16 pointer-events-none">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pointer-events-auto">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/20 border border-swift-blue/30 text-swift-accent text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                  <MapPin size={13} />
                  <span>Stage 01 • {sequence.routeStage}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                  {sequence.headline}
                </h1>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl drop-shadow">
                  {sequence.subhead}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-glow-blue flex items-center gap-2 group"
                >
                  <span>Book Collection</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/track"
                  className="px-5 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium transition-all"
                >
                  Track Consignment
                </Link>
              </div>
            </div>
          </div>

          {/* Smooth Scroll Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-slate-400 pointer-events-none z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-swift-accent animate-ping" />
            <span>SCROLL TO ADVANCE JOURNEY</span>
          </div>
        </div>
      </div>
    );
  }

  // Section 02: Split-Right Interactive Hub Visual (Video 02 - Unchanged Composition)
  if (sequence.layout === 'split-right') {
    return (
      <div ref={containerRef} className="relative h-[200vh] bg-swift-dark w-full">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Copy Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
                <span>Stage 02 • High-Speed Hub Sorting</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                {sequence.headline}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {sequence.subhead}
              </p>

              {/* Feature Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl glass-card border border-white/5">
                  <Zap className="text-swift-blue mt-0.5 shrink-0" size={18} />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Continuous Conveyor Induction</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Laser omnidirectional barcode verification at 12,000 parcels per hour.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl glass-card border border-white/5">
                  <ShieldCheck className="text-swift-accent mt-0.5 shrink-0" size={18} />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Automated Dimensional Profiling</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Zero-error sorting to dedicated London trunk delivery cages.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/uk-parcel-delivery"
                  className="inline-flex items-center gap-2 text-sm text-swift-accent hover:text-white font-medium transition-colors"
                >
                  <span>Explore UK Domestic Network</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Visual Canvas */}
            <div className="lg:col-span-7 h-[50vh] sm:h-[60vh] lg:h-[75vh] rounded-2xl lg:rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/10 relative">
              <FrameSequencePlayer
                sequence={sequence}
                progress={scrollProgress}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-swift-midnight/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Section 03: Motorway Transit - Contained Cinematic Frame (Video 03 - Full Vehicle Visible)
  if (sequence.layout === 'full-bleed') {
    return (
      <div ref={containerRef} className="relative h-[220vh] bg-swift-dark w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Contained Cinematic Frame - Full vehicle visible without edge-clipping */}
          <div className="relative w-full max-w-6xl h-[65vh] md:h-[72vh] rounded-2xl md:rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/10">
            <FrameSequencePlayer
              sequence={sequence}
              progress={scrollProgress}
              className="w-full h-full"
            />
            {/* Vignette & Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-swift-dark/80 via-transparent to-swift-dark/40 pointer-events-none" />

            {/* Highway Telemetry Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
              <div className="flex justify-between items-start pointer-events-auto">
                <div className="glass-panel px-4 py-2 rounded-xl text-xs font-mono text-swift-accent border border-white/10 backdrop-blur-md">
                  <span className="font-semibold text-white">TRUNK ROUTE:</span> MANCHESTER &rarr; LONDON
                </div>
                <div className="glass-panel px-4 py-2 rounded-xl text-xs font-mono text-slate-300 border border-white/10 backdrop-blur-md">
                  CORRIDOR: <span className="text-emerald-400 font-semibold">M6 / M1 SOUTHBOUND</span>
                </div>
              </div>

              <div className="max-w-xl space-y-3 pointer-events-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/20 border border-swift-blue/30 text-swift-accent text-xs font-mono uppercase tracking-wider backdrop-blur-md">
                  <span>Stage 03 • Inter-City Linehaul</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                  {sequence.headline}
                </h2>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {sequence.subhead}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Section 04: London Hub Ingestion - Contained Media Container (Video 04 - Full Depot Visible)
  if (sequence.layout === 'split-left') {
    return (
      <div ref={containerRef} className="relative h-[200vh] bg-swift-dark w-full">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Contained Visual Canvas */}
            <div className="lg:col-span-7 order-2 lg:order-1 h-[50vh] sm:h-[60vh] lg:h-[72vh] rounded-2xl lg:rounded-3xl overflow-hidden glass-card shadow-2xl border border-white/10 relative">
              <FrameSequencePlayer
                sequence={sequence}
                progress={scrollProgress}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-swift-midnight/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Copy Panel */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
                <span>Stage 04 • Metropolitan Arrival</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                {sequence.headline}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {sequence.subhead}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl glass-card border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-swift-silver">
                    <span>DEPOT CODE</span>
                    <span className="text-white font-bold">LON-EC1 CENTRAL</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-swift-silver">
                    <span>SECURITY CUSTODY</span>
                    <span className="text-emerald-400 font-bold">VERIFIED TROLLEY STAGE</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/business-courier-solutions"
                  className="inline-flex items-center gap-2 text-sm text-swift-accent hover:text-white font-medium transition-colors"
                >
                  <span>Explore Business Logistics</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Section 05: Expand Fullscreen Handover (Video 05 - Unchanged Closing Moment)
  return (
    <div ref={containerRef} className="relative h-[220vh] bg-swift-dark w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12">
        <div
          className="relative w-full max-w-[1600px] h-[75vh] md:h-[82vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-200"
          style={{
            transform: `scale(${0.96 + scrollProgress * 0.04})`,
          }}
        >
          <FrameSequencePlayer
            sequence={sequence}
            progress={scrollProgress}
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-swift-dark via-swift-dark/30 to-transparent pointer-events-none" />

          {/* Final Statement & Call to Action */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pointer-events-auto">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <CheckCircle2 size={13} />
                <span>Stage 05 • Verified Handover Completed</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                {sequence.headline}
              </h2>
              <p className="text-slate-300 text-base md:text-lg">
                Every Journey Ends With Trust. Your consignments delivered safely into recipient hands across the United Kingdom.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-glow-blue flex items-center gap-2"
              >
                <span>Book a Collection</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="px-5 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
