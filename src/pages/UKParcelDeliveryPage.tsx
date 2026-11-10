import React from 'react';
import { Link } from 'react-router-dom';
import { sequences } from '../data/sequences';
import { FrameSequencePlayer } from '../components/cinematic/FrameSequencePlayer';
import { Truck, CheckCircle2, ShieldCheck, MapPin, ArrowRight, Zap, Navigation, Award } from 'lucide-react';

export const UKParcelDeliveryPage: React.FC = () => {
  const seq03 = sequences.find((s) => s.id === 'seq-03');

  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-swift-accent">UK Parcel Delivery</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
              <span>Nationwide British Logistics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Rapid Domestic Delivery Across England, Scotland & Wales
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              High-speed inter-city transit linking primary commercial centres. Our dedicated trunk fleet moves parcels seamlessly down the M6/M1 motorway corridor with reliable next-day delivery slots and guaranteed electronic proof of delivery.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/track"
                className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-all shadow-glow-blue flex items-center gap-2"
              >
                <span>Track Parcel SS-UK-4587-21</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-3.5 glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium rounded-xl transition-all"
              >
                Schedule Shipment
              </Link>
            </div>
          </div>

          {/* Cinematic motorway preview (Sequence 03) */}
          <div className="lg:col-span-6 h-[400px] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden glass-card shadow-glass border border-white/10 relative">
            {seq03 && (
              <FrameSequencePlayer
                sequence={seq03}
                progress={0.5}
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Inter-City Trunk Network */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 text-swift-accent text-xs font-mono uppercase">
              <Navigation size={14} />
              <span>Core Transport Artery</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              The Manchester &rarr; London Express Corridor
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every evening, our fleet connects Manchester Piccadilly logistics depots to Greater London distribution hubs via the M6/M1 artery, ensuring overnight sorting and morning local dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl glass-panel border border-white/5 space-y-2">
              <div className="text-xs font-mono text-swift-accent">STAGE 01: EVENING INTAKE</div>
              <h4 className="text-base font-bold text-white">Manchester Hub</h4>
              <p className="text-xs text-slate-400">
                Consignments sorted at our North West optical hub, barcoded, and loaded into secure sealed linehaul transport.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border border-white/5 space-y-2">
              <div className="text-xs font-mono text-swift-accent">STAGE 02: OVERNIGHT LINEHAUL</div>
              <h4 className="text-base font-bold text-white">M6 / M1 Motorway Corridor</h4>
              <p className="text-xs text-slate-400">
                Non-stop telematics-tracked direct motorway transit with zero intermediate cross-docking risks.
              </p>
            </div>

            <div className="p-5 rounded-xl glass-panel border border-white/5 space-y-2">
              <div className="text-xs font-mono text-swift-accent">STAGE 03: MORNING DISPATCH</div>
              <h4 className="text-base font-bold text-white">London Hub & Handover</h4>
              <p className="text-xs text-slate-400">
                Early morning cage unload, route staging, and delivery by local uniformed couriers with signed proof of delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Standards & Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Service Guarantees & Features
            </h3>
            <ul className="space-y-3">
              {[
                'Next-day delivery across mainland Great Britain',
                'Pre-notified 1-hour recipient delivery window via SMS/Email',
                'Photographic proof of delivery and geo-pinned GPS coordinate stamp',
                'Three automatic delivery attempts included as standard',
                'Carbon-offset linehaul routing using Euro 6 compliant vehicles'
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Coverage Scope & Postcodes
            </h3>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p>
                SwiftShip provides comprehensive domestic coverage throughout England, Scotland, and Wales, with daily scheduled trunks between major urban economic hubs:
              </p>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] pt-1">
                <div className="p-2.5 rounded-lg bg-swift-midnight/70 border border-white/5">
                  <strong className="text-white block">Greater London:</strong> EC, WC, E, N, NW, SE, SW, W
                </div>
                <div className="p-2.5 rounded-lg bg-swift-midnight/70 border border-white/5">
                  <strong className="text-white block">Greater Manchester:</strong> M1-M90, SK, WA, WN
                </div>
                <div className="p-2.5 rounded-lg bg-swift-midnight/70 border border-white/5">
                  <strong className="text-white block">Midlands Hub:</strong> B1-B98, CV, WS, WV
                </div>
                <div className="p-2.5 rounded-lg bg-swift-midnight/70 border border-white/5">
                  <strong className="text-white block">West Yorkshire:</strong> LS, BD, WF, HD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold text-white">
              UK Delivery FAQs
            </h2>
            <p className="text-xs text-slate-400">Domestic shipping questions answered.</p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-white">What happens if the recipient is not home?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The driver will leave the parcel in an agreed safe place or with an immediate neighbour, capturing a high-resolution photo and GPS confirmation. If no safe option exists, re-delivery is re-attempted the following morning.
              </p>
            </div>
            <div className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-white">Can I change delivery instructions during transit?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes. Through our online tracking portal, consignees can nominate a designated neighbour or safe location up until final dispatch from the local depot.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-swift-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-glow-blue"
          >
            <span>Book UK Domestic Delivery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
