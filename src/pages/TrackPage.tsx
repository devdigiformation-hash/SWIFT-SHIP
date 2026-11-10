import React from 'react';
import { TrackParcelDemo } from '../components/tracking/TrackParcelDemo';
import { ShieldCheck, HelpCircle, PhoneCall, Clock } from 'lucide-react';

export const TrackPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span>Telematics & Custody Verification</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Track a British Consignment
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Enter your SwiftShip reference number below to view complete timestamped progress, depot arrivals, linehaul transit milestones, and digital signature POD.
          </p>
        </div>

        {/* Tracking Console */}
        <TrackParcelDemo />

        {/* Support Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
          <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2 text-center">
            <Clock size={20} className="text-swift-accent mx-auto" />
            <h4 className="text-sm font-semibold text-white">Live Status Updates</h4>
            <p className="text-xs text-slate-400">Events update automatically as laser barcode scans occur at regional depots.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2 text-center">
            <ShieldCheck size={20} className="text-emerald-400 mx-auto" />
            <h4 className="text-sm font-semibold text-white">Verified Signed POD</h4>
            <p className="text-xs text-slate-400">Every delivered package includes recipient signature and GPS coordinates.</p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2 text-center">
            <PhoneCall size={20} className="text-swift-blue mx-auto" />
            <h4 className="text-sm font-semibold text-white">Depot Dispatch Desk</h4>
            <p className="text-xs text-slate-400">Direct courier contact available during active final-mile delivery slots.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
