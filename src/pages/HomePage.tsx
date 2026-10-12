import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, ShieldCheck, Sun, Compass, ShoppingBag, Heart, Star, CheckCircle2, ChevronRight, Leaf } from 'lucide-react';
import { FARM_METRICS, PRODUCTS_DATA, SERVICES_DATA, TESTIMONIALS_DATA } from '../data/farmData';
import { useCart } from '../context/CartContext';

export const HomePage: React.FC = () => {
  const { addItem } = useCart();
  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION: Full-screen agriculture background image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Immersive Agriculture Background Image with subtle atmospheric overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85')`,
          }}
        >
          {/* Multi-layered gradient overlay for cinematic contrast and typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15291f] via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center sm:text-left flex flex-col items-center sm:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#d6e5d2] text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Regenerative Agriculture Estate • Established 1984</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-3xl drop-shadow-sm">
            Growing Nature.{' '}
            <span className="italic font-normal text-[#a7d7b5] block sm:inline">
              Nurturing Tomorrow.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#e8f1e6] max-w-2xl leading-relaxed mb-10 drop-shadow-xs font-normal">
            At Verdant Roots, we cultivate living soil biology, preserve ancient heirloom crops, and harvest chemical-free produce at sunrise. Experience authentic flavors straight from Oregon’s river terraces to your table.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#52b788] hover:bg-[#3f9e71] text-[#0f2418] font-bold text-base transition-all duration-200 shadow-lg shadow-black/20 flex items-center justify-center gap-2 group hover:scale-[1.02]"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-base transition-all duration-200 backdrop-blur-md border border-white/35 flex items-center justify-center gap-2"
            >
              <Compass className="w-5 h-5 text-[#a7d7b5]" />
              <span>Discover Our Farm</span>
            </Link>
          </div>

          {/* Micro trust cues below buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#d6e5d2]/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#52b788]" />
              <span>100% Certified Organic & Non-GMO</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#52b788]" />
              <span>Harvested Same-Day at 5:30 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#52b788]" />
              <span>Zero Synthetic Pesticides</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator chevron */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-1">
          <span>Scroll to explore</span>
          <div className="w-1.5 h-6 rounded-full bg-white/30 flex items-start justify-center p-0.5">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-y border-[#2d5a43] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {FARM_METRICS.map((stat, i) => (
              <div
                key={i}
                className="text-center sm:text-left border-l-2 border-[#52b788]/40 pl-4 sm:pl-6 py-1"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#8fa382] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#b8c9b4]">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY & STORY TEASER */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                  alt="Farmer examining living soil at Verdant Roots"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-xl font-bold italic">
                    "When you feed the microscopic life in the soil, the soil effortlessly feeds the world."
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[#a7d7b5] mt-1 font-semibold">
                    — Julian Thorne, Founder & Agronomist
                  </p>
                </div>
              </div>

              {/* Overlapping small accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#e5dec9] max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#1b382b] text-[#52b788] flex items-center justify-center font-bold">
                    40+
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1b382b] uppercase tracking-wider">
                      Years of Stewardship
                    </h4>
                    <p className="text-[11px] text-[#697967]">Restoring natural soil vitality</p>
                  </div>
                </div>
                <div className="text-[11px] text-[#4d5c4b] border-t border-[#f0ebd9] pt-2">
                  Zero chemical fertilizers applied since our very first seeding in 1984.
                </div>
              </div>
            </div>

            {/* Content description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2d5a43] bg-[#e8e0ce] px-3.5 py-1.5 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-[#2d5a43]" />
                <span>Our Biological Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b382b] tracking-tight leading-tight">
                Soil is not dirt.{' '}
                <span className="italic font-normal block sm:inline text-[#2d5a43]">
                  Soil is a living, breathing cosmos.
                </span>
              </h2>

              <p className="text-[#3b4c3e] text-base sm:text-lg leading-relaxed">
                Modern agriculture stripped flavor and mineral nutrition in exchange for cosmetic uniformity and long shelf lives. At Verdant Roots, we turn the clock back to regenerative principles: companion planting, thermal composting, and open-pollinated seed varieties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#e8dfcb] shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#1b382b] text-[#52b788] flex items-center justify-center mb-2.5">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-[#1b382b] text-base mb-1">
                    Heirloom Lineages
                  </h4>
                  <p className="text-xs text-[#526351]">
                    Over 72 antique vegetable and fruit varieties grown solely for authentic flavor.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e8dfcb] shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#1b382b] text-[#52b788] flex items-center justify-center mb-2.5">
                    <Sun className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-bold text-[#1b382b] text-base mb-1">
                    Solar & Gravity Fed
                  </h4>
                  <p className="text-xs text-[#526351]">
                    Subsurface drip irrigation powered entirely by renewable sun and mountain cisterns.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1b382b] hover:text-[#2d5a43] transition-colors group"
                >
                  <span className="underline decoration-2 underline-offset-4">
                    Read the full Verdant Roots story
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5efe1] border-y border-[#e5dec9]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e4dac6] px-3 py-1 rounded-full">
                Dawn Harvest Selection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] mt-3">
                Featured From Our Living Beds
              </h2>
              <p className="text-sm text-[#4d5d4d] max-w-lg mt-1">
                Hand-cut at 5:30 AM this morning. Add directly to your basket for same-day chilled delivery.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b382b] hover:bg-[#2d5a43] text-white text-xs font-semibold transition-colors self-start md:self-auto shadow-sm"
            >
              <span>View All 15 Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5dec9] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-[#e8e0ce]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {prod.isHeirloom && (
                      <span className="px-2.5 py-1 rounded-full bg-[#1b382b]/90 text-white text-[10px] font-bold backdrop-blur-xs">
                        Heirloom
                      </span>
                    )}
                    {prod.isSeasonal && (
                      <span className="px-2.5 py-1 rounded-full bg-[#d97706]/90 text-white text-[10px] font-bold backdrop-blur-xs">
                        Peak Season
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-white/90 text-[11px] font-medium text-[#1b382b] backdrop-blur-xs">
                    {prod.origin}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#697967]">
                      {prod.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1b382b] mt-0.5 group-hover:text-[#2d5a43] transition-colors leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#526351] mt-2 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#f0ebd9] flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-[#1b382b]">
                        ${prod.price.toFixed(2)}
                      </span>
                      <span className="text-[11px] text-[#788876] ml-1">/{prod.unit}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => addItem(prod, 1)}
                      className="px-3.5 py-2 rounded-xl bg-[#2d5a43] hover:bg-[#1b382b] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SPOTLIGHT PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full">
              What We Do
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b382b] mt-3 tracking-tight">
              Regenerative Farm Services
            </h2>
            <p className="text-sm sm:text-base text-[#4c5c4c] mt-2">
              From our doorstep delivery CSA baskets to guided educational agro-tours and professional soil consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((serv) => (
              <div
                key={serv.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5dec9] shadow-xs hover:border-[#2d5a43] transition-all flex flex-col group"
              >
                <div className="h-52 relative overflow-hidden bg-[#e8e0ce]">
                  <img
                    src={serv.image}
                    alt={serv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/90 font-medium">
                    {serv.durationOrSchedule}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1b382b] mb-1">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-[#2d5a43] font-semibold mb-3">
                      {serv.tagline}
                    </p>
                    <p className="text-xs text-[#526351] leading-relaxed line-clamp-3">
                      {serv.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#f0ebd9] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1b382b]">
                      {serv.pricingInfo}
                    </span>
                    <Link
                      to="/services"
                      className="text-xs font-bold text-[#2d5a43] hover:text-[#1b382b] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b382b] hover:bg-[#2d5a43] text-white text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Explore All 5 Farm Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FARMING PROCESS HIGHLIGHT TEASER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1b382b] text-[#f4eee1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#52b788] bg-[#2d5a43] px-3.5 py-1.5 rounded-full inline-block">
                Behind Every Seed
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Our 7-Step Living Soil Cycle
              </h2>
              <p className="text-sm sm:text-base text-[#b8c9b4] leading-relaxed">
                From biological compost inoculation in winter to same-day cold-chain dispatch at morning twilight, discover how we guarantee unrivaled nutrient density without chemicals.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#d6e5d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                  <span>1. Thermal Living Composting & Mycorrhizal Inoculation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#d6e5d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                  <span>2. Open-Pollinated Heirloom Seed Preservation</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#d6e5d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                  <span>3. Polyculture Guilds & Natural Companion Rows</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#d6e5d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                  <span>4. Solar Drip Irrigation & Twilight Dawn Harvesting</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/process"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#52b788] hover:bg-[#3f9e71] text-[#0f2418] font-bold text-sm transition-all"
                >
                  <span>Explore the Full 7-Step Process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2d5a43]">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
                    alt="Soil preparation"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 bg-[#15291f] text-xs font-semibold text-[#8fa382]">
                    Step 1: Soil Microbiology
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2d5a43]">
                  <img
                    src="https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=600&q=80"
                    alt="Dawn harvesting"
                    className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 bg-[#15291f] text-xs font-semibold text-[#8fa382]">
                    Step 5: 5:30 AM Dawn Harvest
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2d5a43]">
                  <img
                    src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80"
                    alt="Seed selection"
                    className="w-full h-48 sm:h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 bg-[#15291f] text-xs font-semibold text-[#8fa382]">
                    Step 2: Heritage Seed Vault
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#2d5a43]">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
                    alt="Eco packaging"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-3 bg-[#15291f] text-xs font-semibold text-[#8fa382]">
                    Step 7: 100% Compostable Dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf7f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full">
              Voices From The Table
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] mt-3">
              Cherished By Chefs & Families
            </h2>
            <p className="text-sm text-[#4c5c4c] mt-2">
              Hear from the culinary partners and community households whose kitchens are transformed by our harvest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white p-7 rounded-3xl border border-[#e5dec9] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#d97706] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d97706]" />
                    ))}
                  </div>
                  <p className="font-serif italic text-base text-[#1b382b] leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0ebd9] flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#e5dec9]"
                  />
                  <div>
                    <h4 className="font-semibold text-xs text-[#1b382b] leading-tight">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#637561]">{t.role}</p>
                    <p className="text-[10px] text-[#2d5a43] font-medium mt-0.5">
                      ★ Loves: {t.favoriteProduct}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#15291f] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20">
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Support Local Soil Stewardship</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Taste What Real Agriculture Tastes Like.
          </h2>

          <p className="text-sm sm:text-base text-[#c7d5c4] max-w-2xl mx-auto leading-relaxed">
            Order your first dawn-harvest box today, or visit our farm stand and walking trails this weekend. Fresh vegetables, antique apples, and honey waiting for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#52b788] hover:bg-[#3f9e71] text-[#0f2418] font-bold text-sm transition-all shadow-md"
            >
              Shop Today’s Harvest
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-all backdrop-blur-sm border border-white/30"
            >
              Plan a Weekend Farm Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
