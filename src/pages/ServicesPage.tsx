import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/services/ServiceCard';
import { Package, Truck, Building2, CheckCircle, ArrowRight, Shield, Clock, HelpCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
            <span>Logistics Service Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            High-Performance British Courier Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            SwiftShip operates a unified logistics pipeline combining scheduled doorstep collection, automated optical hub sortation, dedicated inter-city linehaul, and guaranteed signed handovers across the United Kingdom.
          </p>
        </div>

        {/* The 3 Core Dedicated Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Parcel Collection"
            description="On-demand and scheduled collections from your business premises or private residence. Fully scanned custody from minute zero."
            path="/services/parcel-collection"
            icon={Package}
            badge="Collection Service"
            imageSrc="/sequences/seq-01/poster.webp"
            features={[
              'Dedicated driver dispatch window',
              'Instant barcode generation & scan',
              'Pre-labelled collection options',
              'Direct transfer to regional hub'
            ]}
          />

          <ServiceCard
            title="UK Parcel Delivery"
            description="Express domestic parcel transit across England, Scotland, and Wales. Secure overnight motorway linehaul with tracked doorstep delivery."
            path="/services/uk-parcel-delivery"
            icon={Truck}
            badge="Domestic Transit"
            imageSrc="/sequences/seq-03/poster.webp"
            features={[
              'Next-day nationwide service',
              'Inter-city linehaul artery routes',
              'Photo & signature POD capture',
              'Full transit audit trail'
            ]}
          />

          <ServiceCard
            title="Business Courier Solutions"
            description="Scalable enterprise courier partnerships. Bulk daily dispatch, rolling trolley warehouse integration, and custom API booking."
            path="/services/business-courier-solutions"
            icon={Building2}
            badge="Enterprise Fleet"
            imageSrc="/sequences/seq-04/poster.webp"
            features={[
              'Daily scheduled cage & van pickups',
              'Consolidated invoicing & reporting',
              'Direct depot sortation bypass',
              'Dedicated UK logistics manager'
            ]}
          />
        </div>

        {/* Feature Comparison Table */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-white">
              Service Matrix & Operational Specifications
            </h2>
            <p className="text-sm text-slate-400">
              Detailed breakdown of delivery tiers across our British carrier infrastructure.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-swift-silver">
                  <th className="pb-4 font-semibold">Service Attribute</th>
                  <th className="pb-4 font-semibold">Parcel Collection</th>
                  <th className="pb-4 font-semibold">UK Parcel Delivery</th>
                  <th className="pb-4 font-semibold">Business Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="py-4 font-medium text-white">Pickup Location</td>
                  <td className="py-4">Business / Residential</td>
                  <td className="py-4">Regional Depots / Hubs</td>
                  <td className="py-4">Dedicated Client Docks</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Transit Duration</td>
                  <td className="py-4">Same-day intake to hub</td>
                  <td className="py-4">Next-day (overnight trunk)</td>
                  <td className="py-4">Custom scheduled windows</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Proof of Delivery (POD)</td>
                  <td className="py-4">Digital manifest scan</td>
                  <td className="py-4">Signature + GPS timestamp</td>
                  <td className="py-4">Bulk electronic manifest API</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Max Consignment Weight</td>
                  <td className="py-4">Up to 30 kg per parcel</td>
                  <td className="py-4">Up to 50 kg per parcel</td>
                  <td className="py-4">Pallet & roll-cage volume</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">Tracking Visibility</td>
                  <td className="py-4">Step-by-step audit log</td>
                  <td className="py-4">Milestone telemetry</td>
                  <td className="py-4">Direct webhook integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-swift-navy to-swift-midnight border border-swift-blue/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">
              Need a Customized UK Courier Solution?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Our Manchester and London dispatch desks are ready to coordinate your commercial requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-medium text-sm rounded-xl transition-all shadow-glow-blue whitespace-nowrap"
          >
            Request Collection Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
