import React from 'react';
import { ShieldCheck, Truck, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
            <span>Our British Heritage & Operations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Setting the Benchmark for Precision UK Logistics
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            SwiftShip operates a purpose-built logistics infrastructure connecting British commerce. With major operational bases in Greater Manchester and Central London, we unite on-demand collection with high-velocity inter-city transport.
          </p>
        </div>

        {/* Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Unbroken Custody</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every parcel remains under direct SwiftShip driver and hub custody. We maintain zero subcontracting on core trunk routes, ensuring 100% accountability from collection to delivery.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Modern Liveried Fleet</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our signature navy vans and linehaul vehicles are equipped with Euro 6 low-emission engines, GPS telematics, and internal parcel protection shelving.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/5 space-y-4">
            <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-display font-bold text-white">Optical Scan Precision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Automated laser barcode induction ensures parcels are verified and routed in fractions of a second, preventing sorting errors and routing delays.
            </p>
          </div>
        </div>

        {/* UK Depot Locations */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-white">
              Primary UK Operational Facilities
            </h2>
            <p className="text-sm text-slate-400">
              Strategically positioned depots facilitating rapid linehaul transfers across Great Britain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl glass-panel border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-swift-accent text-xs font-mono">
                <MapPin size={14} />
                <span>NORTH WEST REGION</span>
              </div>
              <h3 className="text-lg font-bold text-white">Manchester Logistics Depot</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Piccadilly Logistics Park, Manchester M1 2WD. Direct access to the M60/M6 motorway ring, handling business collections and sorting for Northern England.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-panel border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-swift-accent text-xs font-mono">
                <MapPin size={14} />
                <span>GREATER LONDON REGION</span>
              </div>
              <h3 className="text-lg font-bold text-white">London Metropolitan Hub</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Central Distribution Bay, London EC1A 1BB. Servicing Central London, the City, Westminster, and the wider M25 orbital network for same-day and next-day final mile dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-4">
          <h3 className="text-2xl font-display font-bold text-white">
            Partner With a Proven British Courier
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-swift-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-glow-blue"
          >
            <span>Contact Our Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
