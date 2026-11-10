import React, { useState } from 'react';
import { sequences } from '../data/sequences';
import { FrameSequencePlayer } from '../components/cinematic/FrameSequencePlayer';
import { ArrowRight, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorksPage: React.FC = () => {
  const [activeSeqIndex, setActiveSeqIndex] = useState<number>(0);
  const currentSeq = sequences[activeSeqIndex];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
            <span>Our 5-Stage Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            How Every SwiftShip Parcel Moves Across Britain
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Follow the complete real-world progression of a consignment from initial collection at a Manchester business premises to doorstep handover in London.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {sequences.map((seq, idx) => {
            const isActive = idx === activeSeqIndex;
            return (
              <button
                key={seq.id}
                onClick={() => setActiveSeqIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-swift-blue/20 border-swift-blue shadow-glow-blue'
                    : 'glass-card border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={isActive ? 'text-swift-accent font-bold' : 'text-slate-400'}>
                    STAGE 0{seq.sequenceNumber}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-swift-accent" />}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white truncate">
                  {seq.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase */}
        {currentSeq && (
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Cinematic Visual Stage */}
              <div className="lg:col-span-7 h-[360px] sm:h-[460px] rounded-2xl overflow-hidden glass-panel border border-white/10 relative">
                <FrameSequencePlayer
                  sequence={currentSeq}
                  progress={0.5}
                  className="w-full h-full"
                />
              </div>

              {/* Stage Narrative Information */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-swift-accent">
                    <MapPin size={13} />
                    <span>{currentSeq.routeStage}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {currentSeq.headline}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {currentSeq.subhead}
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>STAGE PROTOCOL:</span>
                    <span className="font-mono text-white">Full Custody Chain Verification</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>REAL MOTORWAY LINEHAUL:</span>
                    <span className="font-mono text-white">Manchester M1 &rarr; London EC1</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>CUSTODY STATUS:</span>
                    <span className="font-mono text-emerald-400 font-semibold">100% Verified Telematics</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    disabled={activeSeqIndex === 0}
                    onClick={() => setActiveSeqIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-lg glass-panel text-xs font-medium text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    &larr; Previous Stage
                  </button>

                  <button
                    disabled={activeSeqIndex === sequences.length - 1}
                    onClick={() => setActiveSeqIndex((prev) => Math.min(sequences.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-lg bg-swift-blue text-xs font-medium text-white hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                  >
                    <span>Next Stage</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Link Banner */}
        <div className="p-8 rounded-2xl glass-card border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Experience the Live Consignment Timeline</h3>
            <p className="text-xs text-slate-400">Test parcel reference SS-UK-4587-21 in our demonstration tracker.</p>
          </div>
          <Link
            to="/track"
            className="px-6 py-3 rounded-xl bg-swift-blue hover:bg-blue-600 text-white font-medium text-xs transition-all shadow-glow-blue whitespace-nowrap"
          >
            Launch Tracking Demo
          </Link>
        </div>
      </div>
    </div>
  );
};
