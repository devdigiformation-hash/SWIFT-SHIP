import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-swift-midnight border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-swift-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo_transparent.png"
                alt="SwiftShip UK"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                SwiftShip
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Premier British courier and scheduled linehaul network. Providing verified business collection, automated hub sorting, and guaranteed final-mile handover across the UK.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel text-xs font-mono text-emerald-400 border border-emerald-500/20">
              <ShieldCheck size={14} />
              <span>UK LOGISTICS CARRIER • PORTFOLIO DEMO</span>
            </div>
          </div>

          {/* Dedicated Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-swift-silver">
              Courier Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/services/parcel-collection" className="hover:text-swift-accent transition-colors flex items-center gap-1">
                  <span>Parcel Collection</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/services/uk-parcel-delivery" className="hover:text-swift-accent transition-colors flex items-center gap-1">
                  <span>UK Domestic Delivery</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/services/business-courier-solutions" className="hover:text-swift-accent transition-colors flex items-center gap-1">
                  <span>Business Courier</span>
                  <ArrowUpRight size={12} className="opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-swift-accent transition-colors">
                  All Logistics Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-swift-silver">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/how-it-works" className="hover:text-swift-accent transition-colors">
                  Our 5-Stage Journey
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-swift-accent transition-colors">
                  Track Demonstration
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-swift-accent transition-colors">
                  British Logistics Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-swift-accent transition-colors">
                  Book a Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* UK Depots */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-swift-silver">
              Key UK Depots
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-swift-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Manchester Depot</div>
                  <div>Piccadilly Central, M1 2WD</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-swift-accent mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">London Distribution Hub</div>
                  <div>Metropolitan Hub, EC1A 1BB</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} SwiftShip Logistics Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-swift-steel">Demonstration Showcase Platform</span>
            <span>•</span>
            <span className="font-mono text-swift-accent">SS-UK-4587-21</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
