import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, MapPin, Truck, AlertCircle, ArrowRight } from 'lucide-react';

interface TrackingEvent {
  time: string;
  stage: string;
  location: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
}

const DEMO_EVENTS: TrackingEvent[] = [
  {
    time: '08:45 AM • Today',
    stage: 'Consignment Collected',
    location: 'Manchester Business Park (M1 2WD)',
    description: 'Driver picked up parcel, verified barcode and generated digital consignment note.',
    status: 'completed',
  },
  {
    time: '11:15 AM • Today',
    stage: 'Automated Hub Ingestion',
    location: 'North West Processing Hub',
    description: 'High-speed volumetric scan and sortation onto London dedicated linehaul cage.',
    status: 'completed',
  },
  {
    time: '01:30 PM • Today',
    stage: 'Inter-City Transit',
    location: 'M6 / M1 Southbound Linehaul',
    description: 'SwiftShip express transport van in transit to Greater London Hub.',
    status: 'completed',
  },
  {
    time: '03:10 PM • Today',
    stage: 'London Hub Arrival',
    location: 'London Metropolitan Depot (EC1A 1BB)',
    description: 'Unloaded to dispatch bay, scanned into final-mile delivery van manifest.',
    status: 'completed',
  },
  {
    time: '04:25 PM • Today',
    stage: 'Delivered & Signed POD',
    location: 'Westminster, London (SW1A 1AA)',
    description: 'Handed directly to recipient. Electronic signature and GPS timestamp recorded.',
    status: 'completed',
  },
];

export const TrackParcelDemo: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('SS-UK-4587-21');
  const [hasSearched, setHasSearched] = useState(true);

  const isDemoNumber = trackingNumber.trim().toUpperCase() === 'SS-UK-4587-21';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Search Input Card */}
      <form onSubmit={handleSearch} className="glass-card rounded-2xl p-4 sm:p-6 shadow-glass border border-white/10">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter UK Tracking ID (e.g. SS-UK-4587-21)"
              className="w-full pl-11 pr-4 py-3.5 bg-swift-dark/60 rounded-xl border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-swift-blue text-sm font-mono tracking-wider"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white text-sm font-medium rounded-xl transition-all shadow-glow-blue flex items-center justify-center gap-2"
          >
            <span>Track Parcel</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Demo Hint */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Demonstration Mode</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setTrackingNumber('SS-UK-4587-21');
              setHasSearched(true);
            }}
            className="text-swift-accent hover:underline font-mono"
          >
            Load SS-UK-4587-21
          </button>
        </div>
      </form>

      {/* Results Section */}
      {hasSearched && (
        <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-glass border border-white/10 space-y-8">
          {/* Header Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-display font-bold text-white font-mono">
                  {trackingNumber.toUpperCase()}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {isDemoNumber ? 'DELIVERED & VERIFIED' : 'ACTIVE IN TRANSIT'}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Standard Next-Day Express • Manchester to London Corridor
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-300">
              <div>
                <span className="text-slate-400 block">ORIGIN</span>
                <span className="text-white font-semibold">Manchester M1</span>
              </div>
              <ArrowRight size={14} className="text-swift-accent" />
              <div>
                <span className="text-slate-400 block">DESTINATION</span>
                <span className="text-white font-semibold">London SW1</span>
              </div>
            </div>
          </div>

          {/* Timeline Events */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-swift-silver">
              Journey Timeline & Audit Log
            </h4>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-swift-blue before:via-swift-accent before:to-emerald-400">
              {DEMO_EVENTS.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[1.65rem] sm:-left-[2.15rem] top-1 w-5 h-5 rounded-full bg-swift-midnight border-2 border-emerald-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <div className="glass-panel p-4 rounded-xl border border-white/5 space-y-1.5 transition-all group-hover:border-swift-blue/30">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-semibold text-white">
                        {event.stage}
                      </div>
                      <div className="text-xs font-mono text-swift-accent">
                        {event.time}
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <MapPin size={12} className="text-swift-blue" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Demo Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-swift-blue/10 border border-swift-blue/20 flex items-start gap-3">
            <AlertCircle size={18} className="text-swift-accent mt-0.5 shrink-0" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Demonstration Notice:</strong> This tracking console is an interactive visual demonstration representing SwiftShip&apos;s 5-stage collection-to-delivery pipeline (Reference <span className="font-mono text-swift-accent font-semibold">SS-UK-4587-21</span>). Live GPS telematics and customer signatures are simulated for portfolio presentation.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
