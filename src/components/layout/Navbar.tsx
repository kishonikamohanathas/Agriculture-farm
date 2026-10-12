import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sprout, PhoneCall, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Our Services', path: '/services' },
    { name: 'Farming Process', path: '/process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Navbar appearance based on scroll & page
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white'
            : 'bg-[#faf7f0]/95 backdrop-blur-md text-[#1b382b] shadow-sm border-b border-[#e5dec9]'
        }`}
      >
        {/* Top subtle farm notice banner (hidden on home when hero is full transparent for pure aesthetics, or compact) */}
        {!isTransparent && (
          <div className="bg-[#1b382b] text-[#f4eee1] text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#52b788] animate-pulse"></span>
              Spring Harvest Dispatches: Cherokee Purple & Fresh Strawberries now in season!
            </span>
            <Link to="/products" className="underline hover:text-white transition-colors ml-2 hidden sm:inline">
              Shop Today's Pickings →
            </Link>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 ${
                  isTransparent
                    ? 'bg-[#faf7f0]/20 text-[#52b788] backdrop-blur-sm border border-white/20'
                    : 'bg-[#1b382b] text-[#8fa382]'
                }`}
              >
                <Sprout className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
                    isTransparent ? 'text-white' : 'text-[#1b382b]'
                  }`}
                >
                  Verdant Roots
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold mt-0.5 ${
                    isTransparent ? 'text-white/80' : 'text-[#6b7c69]'
                  }`}
                >
                  Organic Farm & Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? isTransparent
                          ? 'text-white font-semibold'
                          : 'text-[#1b382b] font-semibold'
                        : isTransparent
                        ? 'text-white/80 hover:text-white'
                        : 'text-[#415344] hover:text-[#1b382b]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                          isTransparent ? 'bg-[#52b788]' : 'bg-[#1b382b]'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Basket */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-all border ${
                  isTransparent
                    ? 'text-white border-white/30 hover:bg-white/10'
                    : 'text-[#1b382b] border-[#1b382b]/30 hover:bg-[#1b382b]/5'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Visit Farm</span>
              </Link>

              {/* Basket Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className={`relative flex items-center gap-2 p-2.5 rounded-full transition-all ${
                  isTransparent
                    ? 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm'
                    : 'bg-[#1b382b] hover:bg-[#2d5a43] text-white shadow-sm'
                }`}
                aria-label="Open Farm Basket"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline text-xs font-semibold pr-1">Basket</span>
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#d97706] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-scale">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-[#1b382b] hover:bg-[#eae3d2]'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#faf7f0] border-b border-[#e5dec9] shadow-xl text-[#1b382b] px-4 pt-3 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#1b382b] text-white'
                        : 'text-[#2a382e] hover:bg-[#ede5d3]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#8fa382]' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#e5dec9] flex flex-col gap-2.5">
              <Link
                to="/products"
                className="w-full text-center py-3 bg-[#2d5a43] text-white font-semibold rounded-xl text-sm shadow-sm"
              >
                Shop Organic Products
              </Link>
              <Link
                to="/contact"
                className="w-full text-center py-2.5 border border-[#1b382b]/30 text-[#1b382b] font-medium rounded-xl text-sm"
              >
                Contact & Farm Tours
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
