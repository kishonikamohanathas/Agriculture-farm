import React, { useState } from 'react';
import { Sprout, CheckCircle2, Calendar, Users, ArrowRight, X, Clock, HelpCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/farmData';
import { Service } from '../types';

export const ServicesPage: React.FC = () => {
  const [activeServiceForBooking, setActiveServiceForBooking] = useState<Service | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingGuests, setBookingGuests] = useState('2');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const handleCloseBooking = () => {
    setActiveServiceForBooking(null);
    setBookingSuccess(false);
    setBookingName('');
    setBookingEmail('');
    setBookingNotes('');
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2d5a43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20 mb-4">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Cultivation, Delivery, Education & Consulting</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Our Farm Services
          </h1>

          <p className="text-sm sm:text-base text-[#b8c9b4] max-w-2xl leading-relaxed">
            Beyond growing pure food, Verdant Roots operates as a living educational center, regional produce distributor, and regenerative agricultural consultancy.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5dec9] shadow-sm hover:border-[#2d5a43] transition-all p-6 sm:p-10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-96 bg-[#e8e0ce] group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#a7d7b5] bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                          {service.durationOrSchedule}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2d5a43] bg-[#f0ebd9] px-3 py-1 rounded-full">
                        Service 0{index + 1}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b] mt-2">
                        {service.title}
                      </h2>
                      <p className="text-sm font-semibold text-[#2d5a43] mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#4d5d4d] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b382b] mb-3">
                        Included Features & Practices
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-[#3d4d3d] bg-[#faf7f0] p-2.5 rounded-xl border border-[#ded5c0]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Ideal For */}
                    <div className="pt-3 border-t border-[#f0ebd9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-[#71826f] block">Schedule & Terms:</span>
                        <span className="text-sm font-bold text-[#1b382b]">{service.pricingInfo}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveServiceForBooking(service)}
                        className="px-6 py-2.5 rounded-full bg-[#1b382b] hover:bg-[#2d5a43] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                      >
                        <span>Inquire or Book This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. FREQUENTLY ASKED QUESTIONS */}
        <div className="mt-24 bg-white rounded-3xl p-8 sm:p-12 border border-[#e5dec9] shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full">
              Common Questions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b] mt-3">
              Service & Tour Inquiries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#4d5d4d]">
            <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#ded5c0]">
              <h4 className="font-bold text-[#1b382b] text-sm mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#2d5a43]" />
                How does the weekly CSA produce box work?
              </h4>
              <p className="leading-relaxed">
                You select your box size (Solo, Couple, or Family Farm Crate). Every Tuesday or Friday morning, our drivers deliver dawn-harvested greens, root veggies, and seasonal orchard fruits in reusable chilled wooden totes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#ded5c0]">
              <h4 className="font-bold text-[#1b382b] text-sm mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#2d5a43]" />
                Are children welcome on guided farm visits?
              </h4>
              <p className="leading-relaxed">
                Absolutely! Our weekend agro-tours are designed for all ages. Kids love our honeybee observatory, tasting heirloom cherry tomatoes straight from the vine, and meeting our heritage compost ducks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#ded5c0]">
              <h4 className="font-bold text-[#1b382b] text-sm mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#2d5a43]" />
                What is included in an agricultural consulting audit?
              </h4>
              <p className="leading-relaxed">
                Our microbiologists conduct full fungal-to-bacterial soil ratio testing, compaction depth sonars, keyline irrigation topography analysis, and deliver a 3-year organic transition action roadmap.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#faf7f0] border border-[#ded5c0]">
              <h4 className="font-bold text-[#1b382b] text-sm mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#2d5a43]" />
                Can commercial restaurants order wholesale?
              </h4>
              <p className="leading-relaxed">
                Yes. We work closely with fine-dining chefs throughout Oregon and Washington with dedicated 5:00 AM delivery runs and custom crop planting partnerships for specialty heirloom varieties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. BOOKING / INQUIRY MODAL */}
      {activeServiceForBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#faf7f0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ded5c0] relative max-h-[90vh] overflow-y-auto">
            {!bookingSuccess ? (
              <>
                <button
                  onClick={handleCloseBooking}
                  className="absolute top-5 right-5 p-2 rounded-full text-[#6b7b69] hover:bg-[#eae1ce] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#2d5a43] bg-[#e8dfcb] px-3 py-1 rounded-full font-bold">
                    Reservation / Inquiry
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1b382b] mt-3">
                    {activeServiceForBooking.title}
                  </h3>
                  <p className="text-xs text-[#526351] mt-1">
                    Fill out your details to schedule a visit, start a CSA crate, or request a consulting audit.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Julianne Ward"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      placeholder="julianne@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#d8cfbe] text-xs text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                        Group Size / Guests
                      </label>
                      <select
                        value={bookingGuests}
                        onChange={(e) => setBookingGuests(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#d8cfbe] text-xs text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="4">3 - 5 People</option>
                        <option value="10">6 - 15 People</option>
                        <option value="corporate">Large Group / Corporate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Special Dietary / Land Goals / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={bookingNotes}
                      onChange={(e) => setBookingNotes(e.target.value)}
                      placeholder="Tell us about your interest (e.g. dietary allergies, farm acreage, CSA start date)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div className="p-3 bg-[#f1ebd9] rounded-xl text-xs text-[#526351]">
                    <strong>Estimated Rate:</strong> {activeServiceForBooking.pricingInfo}
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleCloseBooking}
                      className="flex-1 py-3 border border-[#1b382b]/30 text-[#1b382b] font-medium text-xs rounded-xl hover:bg-[#eae1ce] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-xs rounded-xl transition-all shadow-md"
                    >
                      Send Service Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1b382b]">
                    Request Received, {bookingName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526351] max-w-sm mx-auto mt-2 leading-relaxed">
                    Our guest coordinator Maya has logged your inquiry for <strong>{activeServiceForBooking.title}</strong>. A confirmation and schedule details have been sent to <strong>{bookingEmail}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#f1ebd9] rounded-2xl text-left border border-[#ded5c0] space-y-1 text-xs text-[#526351]">
                  <p><strong>Service:</strong> {activeServiceForBooking.title}</p>
                  <p><strong>Party Size:</strong> {bookingGuests} guest(s)</p>
                  <p><strong>Response Time:</strong> Within 4 business hours</p>
                </div>

                <button
                  type="button"
                  onClick={handleCloseBooking}
                  className="w-full py-3 bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
