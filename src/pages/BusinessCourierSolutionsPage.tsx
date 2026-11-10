import React from 'react';
import { Link } from 'react-router-dom';
import { sequences } from '../data/sequences';
import { FrameSequencePlayer } from '../components/cinematic/FrameSequencePlayer';
import { Building2, CheckCircle2, ShieldCheck, ArrowRight, Layers, Cpu, BarChart3, Users } from 'lucide-react';

export const BusinessCourierSolutionsPage: React.FC = () => {
  const seq04 = sequences.find((s) => s.id === 'seq-04');

  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-white">Services</Link>
          <span>/</span>
          <span className="text-swift-accent">Business Courier Solutions</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
              <span>Enterprise B2B Logistics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Contract Courier Logistics for UK Commercial Fleets & Retailers
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Designed for British e-commerce merchants, pharmaceutical distributors, legal firms, and manufacturers shipping in daily volume. We provide dedicated dockside collection, roll-cage staging, and automated REST API integration.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-all shadow-glow-blue flex items-center gap-2"
              >
                <span>Request Commercial Account</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="px-5 py-3.5 glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium rounded-xl transition-all"
              >
                Compare Service Tiers
              </Link>
            </div>
          </div>

          {/* Interactive Cinematic Preview (Sequence 04 London Hub) */}
          <div className="lg:col-span-6 h-[400px] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden glass-card shadow-glass border border-white/10 relative">
            {seq04 && (
              <FrameSequencePlayer
                sequence={seq04}
                progress={0.5}
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Commercial Features Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-display font-bold text-white">
              Enterprise Infrastructure Built for Scale
            </h2>
            <p className="text-slate-400 text-sm">
              Customised operational architecture to streamline your corporate supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/5">
              <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
                <Layers size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Daily Staged Fleet Pickups</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated collection trailers and high-capacity Luton vans assigned to your warehouse dock at agreed daily cutoff windows.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/5">
              <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Automated Shipping API</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instant label creation, direct webhook callbacks, and bulk manifest export directly inside your ERP or WMS software.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4 border border-white/5">
              <div className="p-3 rounded-xl bg-swift-blue/20 text-swift-accent w-fit">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-lg font-bold text-white">Consolidated Commercial Billing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent monthly invoices itemised by consignment weight, postcode zone, and verified delivery timestamps.
              </p>
            </div>
          </div>
        </div>

        {/* Operations Staging Workflow */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 text-swift-accent text-xs font-mono uppercase">
              <ShieldCheck size={14} />
              <span>Operational Integrity</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              Roll-Cage & Trolley Staging Protocol
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              As captured in our depot sequence, bulk consignments are transferred directly from arriving vehicles onto rolling trolleys. This ensures zero double-handling, zero drops, and immediate induction into local London distribution bays.
            </p>
            <div className="pt-2">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-swift-accent hover:text-white transition-colors"
              >
                <span>View Complete 5-Stage Process</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Direct dock-to-van ramp integration',
              'Barcode scanning at trolley transition points',
              'Full custody handoff documentation',
              'Fast-track sortation for priority commercial parcels'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl glass-panel border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-swift-midnight to-swift-navy border border-swift-blue/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">
              Open a SwiftShip Corporate Account
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Connect with our corporate client desk in London or Manchester to receive tailored rate cards and technical integration guides.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-all shadow-glow-blue whitespace-nowrap"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};
