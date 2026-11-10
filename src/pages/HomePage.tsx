import React from 'react';
import { sequences } from '../data/sequences';
import { ScrollFilmChapter } from '../components/cinematic/ScrollFilmChapter';
import { ServiceCard } from '../components/services/ServiceCard';
import { TrackParcelDemo } from '../components/tracking/TrackParcelDemo';
import { Package, Truck, Building2, Shield, Clock, Compass, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* 5-CHAPTER CINEMATIC SCROLL FILM EXPERIENCE */}
      <section id="cinematic-journey" className="relative">
        {sequences.map((sequence, index) => (
          <ScrollFilmChapter
            key={sequence.id}
            sequence={sequence}
            index={index}
          />
        ))}
      </section>

      {/* NATIONWIDE INFRASTRUCTURE METRICS */}
      <section className="py-20 bg-swift-midnight relative border-t border-b border-white/10 w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
              <span>British Logistics Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Engineered for UK Commerce & Precision Domestic Delivery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From business collections in Manchester to doorstep handovers across Central London, SwiftShip delivers end-to-end custody, verified scans, and dedicated linehaul transport.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center space-y-2 border border-white/5">
              <div className="text-3xl sm:text-5xl font-display font-extrabold text-swift-accent">
                99.8%
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">First-Attempt Delivery</div>
              <div className="text-xs text-slate-400">Verified domestic handover across England & Wales</div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center space-y-2 border border-white/5">
              <div className="text-3xl sm:text-5xl font-display font-extrabold text-white">
                12,000+
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">Parcels Sorted Hourly</div>
              <div className="text-xs text-slate-400">High-speed volumetric scan and automated routing</div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center space-y-2 border border-white/5">
              <div className="text-3xl sm:text-5xl font-display font-extrabold text-swift-blue">
                100%
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">Direct Linehaul Custody</div>
              <div className="text-xs text-slate-400">No third-party sub-contracting on primary trunk routes</div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center space-y-2 border border-white/5">
              <div className="text-3xl sm:text-5xl font-display font-extrabold text-emerald-400">
                100%
              </div>
              <div className="text-sm sm:text-base font-semibold text-white">Electronic POD Capture</div>
              <div className="text-xs text-slate-400">Instant digital signature and photo confirmation</div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SERVICES SHOWCASE */}
      <section className="py-24 bg-swift-dark relative w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
                <span>Core UK Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Specialized Courier Services Tailored for Every Parcel
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Explore our three dedicated service lines, engineered to support corporate collections, domestic UK parcels, and recurring commercial contracts.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-swift-accent hover:text-white transition-colors self-start md:self-auto"
            >
              <span>View All Services Overview</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Parcel Collection"
              description="Direct collection from your Manchester or London office, warehouse, or residential doorstep with pre-printed labels and instantaneous electronic scan registration."
              path="/services/parcel-collection"
              icon={Package}
              badge="Collection & Intake"
              imageSrc="/sequences/seq-01/poster.webp"
              features={[
                'Timed 2-hour collection windows',
                'Driver-verified barcode scanning',
                'Instant digital consignment note',
                'Zero packaging hassle with pre-labelled handoffs'
              ]}
            />

            <ServiceCard
              title="UK Parcel Delivery"
              description="Comprehensive nationwide delivery spanning England, Scotland, and Wales. Overnight linehaul routing with reliable next-day delivery slots."
              path="/services/uk-parcel-delivery"
              icon={Truck}
              badge="Domestic Network"
              imageSrc="/sequences/seq-03/poster.webp"
              features={[
                'Next-day nationwide linehaul',
                'Manchester to London express corridor',
                'Full GPS timestamp tracking',
                'Direct signed doorstep handoff'
              ]}
            />

            <ServiceCard
              title="Business Courier Solutions"
              description="Dedicated contract logistics for British e-commerce, legal, medical, and manufacturing enterprises requiring high-volume recurring dispatch."
              path="/services/business-courier-solutions"
              icon={Building2}
              badge="Enterprise & B2B"
              imageSrc="/sequences/seq-04/poster.webp"
              features={[
                'Scheduled daily trailer & van pickups',
                'Direct warehouse trolley staging',
                'Custom API & automated billing',
                'Dedicated UK account manager'
              ]}
            />
          </div>
        </div>
      </section>

      {/* DEMO TRACKING SECTION */}
      <section className="py-24 bg-swift-midnight relative border-t border-white/10 w-full">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span>Interactive Demonstration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Real-Time Tracking Console Experience
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Try our demonstration consignment tracking. Follow parcel <span className="font-mono text-swift-accent font-semibold">SS-UK-4587-21</span> as it traverses through Manchester collection, automated sorting, and final London delivery.
            </p>
          </div>

          <TrackParcelDemo />
        </div>
      </section>

      {/* FINAL TRUST BANNER */}
      <section className="py-20 bg-gradient-to-b from-swift-midnight to-swift-dark relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Ready to Experience Precision British Logistics?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Book a single collection or connect your business dispatch system directly to SwiftShip&apos;s nationwide courier network.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-swift-blue hover:bg-blue-600 text-white font-semibold text-base transition-all shadow-glow-blue flex items-center gap-2"
            >
              <span>Book a Collection Now</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-xl glass-panel hover:bg-white/10 text-white font-medium text-base transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
