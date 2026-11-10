import React from 'react';
import { Link } from 'react-router-dom';
import { sequences } from '../data/sequences';
import { FrameSequencePlayer } from '../components/cinematic/FrameSequencePlayer';
import { Package, CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, HelpCircle, FileText, Box } from 'lucide-react';

export const ParcelCollectionPage: React.FC = () => {
  const seq01 = sequences.find((s) => s.id === 'seq-01');

  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-swift-accent">Parcel Collection</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
              <span>Dedicated Collection Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              On-Demand British Parcel Collection from Your Doorstep
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Eliminate depot drop-offs. A SwiftShip driver collects directly from your commercial premises or residence, executes an immediate barcode scan, and generates an electronic custody receipt before loading into our secure navy van.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-all shadow-glow-blue flex items-center gap-2"
              >
                <span>Book a Parcel Collection</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/track"
                className="px-5 py-3.5 glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium rounded-xl transition-all"
              >
                View Tracking Demo
              </Link>
            </div>
          </div>

          {/* Interactive Cinematic Preview (Sequence 01) */}
          <div className="lg:col-span-6 h-[400px] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden glass-card shadow-glass border border-white/10 relative">
            {seq01 && (
              <FrameSequencePlayer
                sequence={seq01}
                progress={0.5}
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Step-by-Step Collection Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-bold text-white">
              The 4-Step Collection Workflow
            </h2>
            <p className="text-slate-400 text-sm">
              Simple, transparent, and strictly coordinated across our British coverage areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-3 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-swift-blue/20 text-swift-accent flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-semibold text-white">Online Booking</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specify collection address, estimated parcel dimensions, weight, and your preferred 2-hour collection window.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-swift-blue/20 text-swift-accent flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-semibold text-white">Driver Dispatch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A uniformed SwiftShip courier arrives in a liveried navy van equipped with laser hand-held scanners.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-swift-blue/20 text-swift-accent flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-semibold text-white">Barcode Scan & Receipt</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The parcel label is scanned on your doorstep, automatically registering custody into the SwiftShip tracking network.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-swift-blue/20 text-swift-accent flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-semibold text-white">Direct Hub Transit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your parcel is secured into compartmentalised shelving and routed straight to the regional sorting depot.
              </p>
            </div>
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-mono uppercase">
              <ShieldCheck size={14} />
              <span>Sender Guidelines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Parcel Preparation Checklist
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ensure your consignment is prepared according to British domestic shipping standards to guarantee zero delays.
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Use robust corrugated cardboard packaging with reinforced tape.',
              'Ensure the barcode and UK postcode are clearly visible and unwrinkled.',
              'Provide adequate internal cushioning (bubble wrap or recyclable kraft paper).',
              'Maximum weight: 30 kg for individual standard courier handling.',
              'Check non-prohibited items list before sealing the consignment.'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl glass-panel border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold text-white">
              Collection Service FAQs
            </h2>
            <p className="text-xs text-slate-400">Everything you need to know about booking and handover.</p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-white">What time do collections take place?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Standard collections occur between 09:00 and 17:00 Monday to Friday. Priority 2-hour morning or afternoon slots can be requested during booking.
              </p>
            </div>
            <div className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-white">Can the driver bring printed shipping labels?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes. If you select the &ldquo;Bring My Label&rdquo; option during booking, the courier will arrive with a pre-printed thermal barcode label to affix directly to your parcel.
              </p>
            </div>
            <div className="glass-card p-5 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-white">How quickly does tracking become active?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instantly upon physical handover. The driver scans your parcel before placing it into the vehicle, triggering the &ldquo;Collected&rdquo; event in our tracking system.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-8">
          <h3 className="text-2xl font-display font-bold text-white">
            Ready to Arrange Your Collection?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-swift-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-glow-blue"
          >
            <span>Book a Collection Now</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
