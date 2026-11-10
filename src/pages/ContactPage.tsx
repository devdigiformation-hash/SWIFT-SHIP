import React, { useState } from 'react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    collectionPostcode: '',
    collectionAddress: '',
    destinationPostcode: '',
    parcelWeight: 'up-to-5kg',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-swift-dark w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swift-blue/15 border border-swift-blue/25 text-swift-accent text-xs font-mono uppercase tracking-wider">
            <span>Enquiries & Dispatch Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Book a Collection or Contact SwiftShip
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Schedule a parcel collection from your business or residence, or get in touch with our Manchester and London dispatch teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking / Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-bold text-white">
                  Schedule Parcel Collection
                </h2>
                <p className="text-xs text-slate-400">
                  Please provide your British collection address and consignment parameters.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">Collection Request Logged (Demo Mode)</h3>
                    <p className="text-xs text-slate-300">
                      In a production environment, this request triggers driver dispatch and issues reference <span className="font-mono text-swift-accent font-semibold">SS-UK-4587-21</span>.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 text-xs font-medium text-white hover:bg-white/20 transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name / Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        placeholder="e.g. Manchester Distribution Ltd"
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        placeholder="dispatch@company.co.uk"
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Collection Postcode *</label>
                      <input
                        type="text"
                        required
                        value={formData.collectionPostcode}
                        onChange={(e) => setFormData({ ...formData, collectionPostcode: e.target.value })}
                        placeholder="e.g. M1 2WD"
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs font-mono uppercase"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Destination Postcode *</label>
                      <input
                        type="text"
                        required
                        value={formData.destinationPostcode}
                        onChange={(e) => setFormData({ ...formData, destinationPostcode: e.target.value })}
                        placeholder="e.g. SW1A 1AA"
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs font-mono uppercase"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Collection Street Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.collectionAddress}
                      onChange={(e) => setFormData({ ...formData, collectionAddress: e.target.value })}
                      placeholder="e.g. Unit 4, Piccadilly Logistics Park"
                      className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Parcel Weight Category</label>
                      <select
                        value={formData.parcelWeight}
                        onChange={(e) => setFormData({ ...formData, parcelWeight: e.target.value })}
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white focus:outline-none focus:border-swift-blue text-xs"
                      >
                        <option value="up-to-5kg">Standard Parcel (&le; 5 kg)</option>
                        <option value="5-15kg">Medium Consignment (5 - 15 kg)</option>
                        <option value="15-30kg">Heavy Freight (15 - 30 kg)</option>
                        <option value="bulk-pallets">Multiple Parcels / Bulk Staging</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Preferred Collection Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white focus:outline-none focus:border-swift-blue text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Special Handling Notes (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Loading bay entrance on south gate..."
                      className="w-full px-4 py-2.5 bg-swift-midnight/60 rounded-xl border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-swift-blue text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-swift-blue hover:bg-blue-600 text-white font-semibold text-sm rounded-xl transition-all shadow-glow-blue flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>Submit Collection Request</span>
                  </button>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 justify-center pt-2">
                    <AlertCircle size={13} className="text-swift-accent" />
                    <span>Demonstration form — requests log into client state without external email triggers.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details & Depots */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                UK Dispatch Desks
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/5">
                  <MapPin size={18} className="text-swift-accent mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">Manchester Regional Depot</strong>
                    <div className="text-slate-400">Piccadilly Central, Manchester M1 2WD</div>
                    <div className="text-swift-steel font-mono mt-1">Depot Code: MAN-M1</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/5">
                  <MapPin size={18} className="text-swift-accent mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">London Metropolitan Hub</strong>
                    <div className="text-slate-400">Distribution Bay 3, London EC1A 1BB</div>
                    <div className="text-swift-steel font-mono mt-1">Depot Code: LON-EC1</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/5">
                  <Clock size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block text-sm">Operating Windows</strong>
                    <div className="text-slate-400">Collections: Monday &ndash; Friday, 08:30 &ndash; 18:00</div>
                    <div className="text-slate-400">Trunk Linehaul: Daily 24/7 Motorway Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
