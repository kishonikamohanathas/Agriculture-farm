import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, CheckCircle2, ShieldCheck, Heart, Award, Sparkles, ArrowRight, Eye, Layers, RefreshCw, XCircle } from 'lucide-react';
import { TEAM_MEMBERS, TIMELINE_DATA, FARM_VALUES } from '../data/farmData';

export const AboutPage: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO BANNER */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1b382b] text-[#f4eee1] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Rooted in Heritage & Living Biology</span>
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Restoring the Living Pulse of the Earth.
          </h1>

          <p className="text-base sm:text-lg text-[#d3e2d0] max-w-2xl mx-auto leading-relaxed">
            Verdant Roots is a 450-acre regenerative agriculture estate situated in the Willamette River Basin. We cultivate open-pollinated heirloom crops by rebuilding topsoil microbiome health.
          </p>
        </div>
      </section>

      {/* 2. THE BRAND STORY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full inline-block">
              Our Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] leading-tight">
              From Exhausted Pasture to a Living Fungal Sanctuary
            </h2>
            <p className="text-[#3e4f40] text-sm sm:text-base leading-relaxed">
              In the late autumn of 1984, Julian Thorne stepped onto forty acres of weary, compacted pastureland. Decades of heavy synthetic fertilizers had left the soil gray and lifeless—compacted to the hardness of concrete after dry summers.
            </p>
            <p className="text-[#3e4f40] text-sm sm:text-base leading-relaxed">
              While conventional neighbors urged him to apply synthetic nitrogen and glyphosate, Julian chose a different path: importing truckloads of aged barn manure, brewing biological compost teas, and planting deep-taproot daikon radishes and hairy vetch to break compaction naturally.
            </p>
            <p className="text-[#3e4f40] text-sm sm:text-base leading-relaxed">
              Within seven seasons, dark, crumbly humus returned. Earthworms multiplied by the thousands, native mycorrhizal fungi wove microscopic underground highways, and the first crop of heirloom Cherokee Purple tomatoes ripened with an intensity of flavor that had vanished from industrial supermarkets.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=700&q=80"
                alt="Julian Thorne checking soil"
                className="w-full h-64 rounded-3xl object-cover shadow-md"
              />
              <div className="p-4 bg-white rounded-2xl border border-[#e5dec9] text-xs">
                <span className="font-bold text-[#1b382b] block text-sm mb-1">450 Living Acres</span>
                <p className="text-[#596a57]">Expanded gradually over four decades without sacrificing biological rigor.</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-[#1b382b] text-white rounded-2xl text-xs">
                <span className="font-serif font-bold text-white block text-sm mb-1">Zero Chemicals</span>
                <p className="text-[#b8c9b4]">Not a single ounce of synthetic pesticide sprayed since foundation in 1984.</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80"
                alt="Fields misty morning"
                className="w-full h-64 rounded-3xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5efe1] border-y border-[#e5dec9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e2d8c3] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#1b382b] text-[#52b788] flex items-center justify-center mb-6">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1b382b] mb-3">
                Our Mission
              </h3>
              <p className="text-[#415344] text-sm sm:text-base leading-relaxed">
                To regenerate planetary topsoil through polyculture biological farming; safeguarding heritage genetic diversity, nourishing our community with pure dawn-harvested food, and educating the next generation of ecological land stewards.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#1b382b] text-[#f4eee1] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#2d5a43] text-[#8fa382] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="text-[#b9cab5] text-sm sm:text-base leading-relaxed">
                A world where agriculture acts as Earth’s primary carbon sponge and ecological healer, where communities know the names and hands of their farmers, and where unadulterated soil nutrition is accessible to every table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full">
            Guiding Tenets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] mt-3">
            Our Four Ecological Values
          </h2>
          <p className="text-sm text-[#4c5c4c] mt-2">
            Every seeding decision, water diversion, and harvest protocol adheres to these non-negotiable principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FARM_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#e5dec9] shadow-xs hover:border-[#2d5a43] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#f5efe1] text-[#1b382b] flex items-center justify-center mb-5 font-bold">
                  {idx === 0 && <Layers className="w-5 h-5 text-[#2d5a43]" />}
                  {idx === 1 && <Eye className="w-5 h-5 text-[#2d5a43]" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-[#2d5a43]" />}
                  {idx === 3 && <RefreshCw className="w-5 h-5 text-[#2d5a43]" />}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1b382b] mb-1">
                  {val.title}
                </h4>
                <p className="text-xs text-[#2d5a43] font-medium mb-3">
                  {val.subtitle}
                </p>
                <p className="text-xs text-[#526351] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FARMER PHOTOGRAPHY & TEAM PROFILES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5efe1] border-y border-[#e5dec9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e4dac6] px-3.5 py-1.5 rounded-full">
              Stewards of the Land
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] mt-3">
              Meet Our Growers & Scientists
            </h2>
            <p className="text-sm text-[#4c5c4c] mt-2">
              The botanists, agronomists, and harvesters whose hands touch the earth every sunrise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e5dec9] shadow-xs group flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-[#e8e0ce] relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[11px] text-[#d6e5d2] font-semibold">
                      {member.experience}
                    </span>
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-xl font-bold text-[#1b382b]">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#2d5a43] font-semibold mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#526351] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#f0ebd9] text-[11px] text-[#4d5c4b]">
                  <span className="font-semibold text-[#1b382b]">Favorite Crop:</span> {member.favoriteCrop}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE HISTORICAL TIMELINE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#2d5a43] bg-[#e8dfcb] px-3.5 py-1.5 rounded-full">
            Four Decades of Growth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b382b] mt-3">
            The Verdant Journey
          </h2>
          <p className="text-sm text-[#4c5c4c] mt-2">
            Click through our historical milestones to see how 40 fallow acres grew into a regional biological haven.
          </p>
        </div>

        {/* Milestone selector pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TIMELINE_DATA.map((milestone, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMilestone(idx)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedMilestone === idx
                  ? 'bg-[#1b382b] text-white shadow-sm scale-105'
                  : 'bg-white border border-[#e5dec9] text-[#415344] hover:bg-[#eae1ce]'
              }`}
            >
              {milestone.year}
            </button>
          ))}
        </div>

        {/* Active milestone showcase card */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#ded5c0] shadow-md animate-fade-in text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-[#1b382b] text-[#52b788] flex items-center justify-center text-2xl font-serif font-bold shrink-0">
              {TIMELINE_DATA[selectedMilestone].year}
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d5a43] bg-[#f0ebd9] px-3 py-1 rounded-full">
                Milestone Epoch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b]">
                {TIMELINE_DATA[selectedMilestone].title}
              </h3>
              <p className="text-sm sm:text-base text-[#4d5d4d] leading-relaxed pt-1">
                {TIMELINE_DATA[selectedMilestone].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Industrial vs Verdant Roots) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1b382b] text-[#f4eee1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#52b788] bg-[#2d5a43] px-3.5 py-1.5 rounded-full">
              The Real Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-3">
              Why Choose Verdant Roots?
            </h2>
            <p className="text-sm text-[#b8c9b4] mt-2">
              See how our living soil practices compare against conventional commercial agriculture.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2d5a43]">
                  <th className="py-4 px-4 text-[#8fa382] font-semibold uppercase tracking-wider">
                    Farming Attribute
                  </th>
                  <th className="py-4 px-4 text-rose-300 font-semibold uppercase tracking-wider bg-black/20 rounded-t-xl">
                    Standard Industrial Produce
                  </th>
                  <th className="py-4 px-4 text-[#52b788] font-bold uppercase tracking-wider bg-[#224434] rounded-t-xl">
                    Verdant Roots Regenerative
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2d5a43]/60">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Soil Nutrition</td>
                  <td className="py-4 px-4 text-[#d1d5db] bg-black/10">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Synthetic N-P-K salts that deplete microbial life</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white bg-[#224434]/70 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>Living compost teas, mycorrhizae & volcanic basalt</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Seed Lineage</td>
                  <td className="py-4 px-4 text-[#d1d5db] bg-black/10">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Patented hybrid monoculture bred for transport hardness</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white bg-[#224434]/70 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>72 open-pollinated heirloom varieties bred for nutrition & flavor</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Pest Management</td>
                  <td className="py-4 px-4 text-[#d1d5db] bg-black/10">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Synthetic chemical pesticides, fungicides & neonicotinoids</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white bg-[#224434]/70 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>Biological insect predators, aromatic herbs & companion planting</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Harvest to Table Time</td>
                  <td className="py-4 px-4 text-[#d1d5db] bg-black/10">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>7 to 14 days in storage, degreened with ethylene gas</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white bg-[#224434]/70 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>Under 12 hours from dawn hand-cut to your kitchen door</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Packaging</td>
                  <td className="py-4 px-4 text-[#d1d5db] bg-black/10">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Single-use clamshell plastics destined for landfills</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white bg-[#224434]/70 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>100% plant-cellulose wraps and reusable cedar crates</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#52b788] hover:bg-[#3f9e71] text-[#0f2418] font-bold text-sm transition-all"
            >
              <span>Taste the Difference in Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
