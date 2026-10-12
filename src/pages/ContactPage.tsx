import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sprout, Instagram, Facebook, Youtube, Share2, Compass, Info, X } from 'lucide-react';
import { MAP_LANDMARKS } from '../data/farmData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Farm Inquiry',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [activePin, setActivePin] = useState<typeof MAP_LANDMARKS[0] | null>(MAP_LANDMARKS[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setTicketId(`VR-${Math.floor(100000 + Math.random() * 900000)}`);
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Farm Inquiry',
      message: '',
    });
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2d5a43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20 mb-4">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Connect With Our Farm & Growers</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Get in Touch With Verdant Roots
          </h1>

          <p className="text-sm sm:text-base text-[#b8c9b4] max-w-2xl leading-relaxed">
            Whether you want to order wholesale for a culinary kitchen, book a guided harvest tour, or ask about soil consulting, our barn team is here to assist.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#e5dec9] shadow-sm">
            {!formSubmitted ? (
              <>
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#f0ebd9] px-3.5 py-1.5 rounded-full">
                    Direct Inquiry Form
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b] mt-3">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#526351] mt-1">
                    Fill out the fields below. We typically respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1b382b] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Thorne"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f0] border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1b382b] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f0] border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1b382b] mb-1.5">
                        Contact Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(503) 555-0192"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f0] border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1b382b] mb-1.5">
                        Inquiry Topic / Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f0] border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43] transition-colors cursor-pointer"
                      >
                        <option value="General Farm Inquiry">General Farm Inquiry</option>
                        <option value="Wholesale Produce for Restaurant">Wholesale Produce for Restaurant</option>
                        <option value="Guided Farm Tour Booking">Guided Farm Tour Booking</option>
                        <option value="CSA Produce Subscription">CSA Produce Subscription</option>
                        <option value="Soil & Agriculture Consulting">Soil & Agriculture Consulting</option>
                        <option value="Press / Media">Press / Media</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b382b] mb-1.5">
                      Your Message or Questions *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what you'd like to ask or explore with us..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f0] border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Farm Inquiry</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Message Reference: {ticketId}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#1b382b] mt-3">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#4d5d4d] max-w-md mx-auto mt-2 leading-relaxed">
                    Your inquiry regarding <strong>{formData.subject}</strong> has been forwarded to our team. We will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                </div>

                <div className="p-4 bg-[#faf7f0] rounded-2xl max-w-md mx-auto border border-[#ded5c0] text-left text-xs space-y-1 text-[#526351]">
                  <p><strong>Demo Mode Status:</strong> Message validated successfully without storing external data.</p>
                  <p><strong>Farm Stand Dispatch:</strong> 7:00 AM – 5:00 PM PST</p>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#1b382b] hover:bg-[#2d5a43] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Contact Details & Visiting Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Information Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#e5dec9] shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1b382b]">
                Farm Stand & Estate Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#415344]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#faf7f0] text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b382b]">Physical Farm Address</h4>
                    <p className="text-xs text-[#526351] mt-0.5">
                      742 Verdant Valley Way<br />
                      Willamette River Basin, OR 97128
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#faf7f0] text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b382b]">Telephone & Dispatch</h4>
                    <p className="text-xs text-[#526351] mt-0.5">
                      Main Farm Office: (503) 842-ROOTS (7668)<br />
                      Wholesale Dispatch: (503) 842-7669
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#faf7f0] text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b382b]">Electronic Mail</h4>
                    <p className="text-xs text-[#526351] mt-0.5">
                      General: hello@verdantrootsfarm.org<br />
                      Wholesale: dispatch@verdantrootsfarm.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#faf7f0] text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b382b]">Visiting Hours</h4>
                    <p className="text-xs text-[#526351] mt-0.5">
                      Tuesday – Sunday: 8:00 AM – 6:00 PM<br />
                      Monday: Closed for field bed cultivation<br />
                      Tours: Sat & Sun (10:00 AM & 2:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-[#f0ebd9]">
                <h4 className="text-xs font-bold text-[#1b382b] uppercase tracking-wider mb-3">
                  Follow Our Harvest Seasons
                </h4>
                <div className="flex items-center gap-2">
                  <a
                    href="#social-instagram"
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-xl bg-[#faf7f0] hover:bg-[#1b382b] hover:text-white text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#social-facebook"
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-xl bg-[#faf7f0] hover:bg-[#1b382b] hover:text-white text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#social-youtube"
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-xl bg-[#faf7f0] hover:bg-[#1b382b] hover:text-white text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="#social-share"
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-xl bg-[#faf7f0] hover:bg-[#1b382b] hover:text-white text-[#2d5a43] border border-[#d8cfbe] flex items-center justify-center transition-colors"
                    aria-label="Farm Newsletter"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. MAP-STYLE VISUAL: Interactive Farm Grounds Map */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-[#e5dec9] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#f0ebd9] px-3.5 py-1.5 rounded-full">
                Interactive Estate Map
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b] mt-3">
                Verdant Roots 450-Acre Grounds
              </h3>
              <p className="text-xs sm:text-sm text-[#526351] mt-1">
                Click on the numbered landmark pins to explore key areas across our estate.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#2d5a43] font-semibold">
              <Compass className="w-4 h-4" />
              <span>North Valley Overlook</span>
            </div>
          </div>

          {/* Interactive Illustrated Farm Map Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#d8cfbe] bg-[#eef3eb] min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-6 select-none">
            {/* Topographic organic landscape styling */}
            <div className="absolute inset-0 bg-[radial-gradient(#b8cbaf_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* Stylized River Basin curve */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M 0,25 Q 35,45 60,30 T 100,55"
                fill="none"
                stroke="#3f88c5"
                strokeWidth="7"
              />
              <path
                d="M 15,100 Q 40,65 85,85"
                fill="none"
                stroke="#8fa382"
                strokeWidth="4"
                strokeDasharray="2,2"
              />
            </svg>

            {/* Interactive Pins */}
            {MAP_LANDMARKS.map((landmark, idx) => {
              const isSelected = activePin?.id === landmark.id;

              return (
                <div
                  key={landmark.id}
                  style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <button
                    type="button"
                    onClick={() => setActivePin(landmark)}
                    className={`group relative flex items-center justify-center transition-all duration-200 ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-lg transition-colors ${
                        isSelected
                          ? 'bg-[#1b382b] text-white ring-4 ring-[#52b788]'
                          : 'bg-[#2d5a43] text-[#f4eee1] hover:bg-[#1b382b]'
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Tooltip hint on hover */}
                    <span className="hidden sm:group-hover:block absolute top-10 left-1/2 -translate-x-1/2 bg-[#1b382b] text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
                      {landmark.name}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* Active Pin Info Card Overlay */}
            {activePin && (
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#ded5c0] shadow-xl z-30 animate-fade-in">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2d5a43]">
                    <span className="w-5 h-5 rounded-full bg-[#1b382b] text-white flex items-center justify-center text-[10px]">
                      {MAP_LANDMARKS.findIndex(l => l.id === activePin.id) + 1}
                    </span>
                    <span>Farm Landmark</span>
                  </div>
                  <button
                    onClick={() => setActivePin(null)}
                    className="text-[#819280] hover:text-[#1b382b] p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#1b382b] mt-2 mb-1">
                  {activePin.name}
                </h4>

                <p className="text-xs text-[#526351] leading-relaxed">
                  {activePin.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
