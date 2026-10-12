import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Heart, Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#15291f] text-[#f4eee1] border-t border-[#234233] relative overflow-hidden">
      {/* Decorative subtle texture/gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#2d5a43_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2d5a43] text-[#8fa382] flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  Verdant Roots
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#a3b899] font-medium">
                  Regenerative Organic Agriculture
                </span>
              </div>
            </div>

            <p className="text-[#c7d5c4] text-sm leading-relaxed max-w-md">
              Cultivating living soil, heritage open-pollinated crops, and biodynamic ecosystems since 1984. We believe clean, nutrient-dense food begins with radical respect for nature’s micro-biology.
            </p>

            {/* Certifications badges list */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-[#8fa382] font-semibold mb-2.5">
                Certifications & Stewardship
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e3b2c] text-[#d6e5d2] border border-[#2d5a43]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#52b788]" /> USDA Organic Certified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e3b2c] text-[#d6e5d2] border border-[#2d5a43]">
                  <Leaf className="w-3.5 h-3.5 text-[#52b788]" /> Demeter Biodynamic
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e3b2c] text-[#d6e5d2] border border-[#2d5a43]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#52b788]" /> 100% Non-GMO Verified
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Explore Farm
            </h4>
            <ul className="space-y-2.5 text-sm text-[#b6c7b2]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Our Story</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Seasonal Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Farm Services & CSA</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">7-Step Farming Process</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Visit & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Farm Shop & Visiting Hours */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Visiting & Stand Hours
            </h4>
            <div className="space-y-3 text-sm text-[#b6c7b2]">
              <div>
                <p className="text-white font-medium">Farmstand & Cafe:</p>
                <p className="text-xs text-[#a3b899]">Tuesday – Sunday: 8:00 AM – 6:00 PM</p>
                <p className="text-xs text-[#8c9f87]">Monday: Closed for field bed rotation</p>
              </div>
              <div>
                <p className="text-white font-medium">Guided Eco Tours:</p>
                <p className="text-xs text-[#a3b899]">Saturday & Sunday: 10:00 AM & 2:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Dawn Harvest Wholesale:</p>
                <p className="text-xs text-[#a3b899]">Mon / Wed / Fri: 5:00 AM – 11:00 AM</p>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Stay Rooted
            </h4>
            <p className="text-xs text-[#c7d5c4] mb-3 leading-relaxed">
              Receive our seasonal harvest bulletin, rare heirloom drops, and farm festival invites.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#1e3b2c] border border-[#52b788]/40 rounded-xl text-xs text-[#c6f6d5] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                <span>Thank you! You're subscribed to the Verdant Gazette.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f1d16] border border-[#2d5a43] text-sm text-white placeholder-[#788e73] focus:outline-none focus:border-[#52b788] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#2d5a43] hover:bg-[#3d7a5b] text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-[#788e73]">
                  Zero spam. Strictly farm updates & recipe guides.
                </p>
              </form>
            )}

            <div className="mt-5 space-y-2 text-xs text-[#a3b899]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                <span>742 Verdant Valley Way, River Basin, OR</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                <span>(503) 842-ROOTS (7668)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                <span>hello@verdantrootsfarm.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#234233] flex flex-col sm:flex-row items-center justify-between text-xs text-[#788e73] gap-4">
          <p>© {new Date().getFullYear()} Verdant Roots Agriculture & Farm Estate. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#a3b899]">
              <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" /> Grown with living soil & passion
            </span>
            <Link to="/contact" className="hover:text-white transition-colors">Inquiries</Link>
            <Link to="/process" className="hover:text-white transition-colors">Ecological Practices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
