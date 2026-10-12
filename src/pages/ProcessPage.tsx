import React, { useState } from 'react';
import { Sprout, CheckCircle2, ChevronDown, ChevronUp, Layers, Sun, Droplets, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/farmData';
import { Link } from 'react-router-dom';

export const ProcessPage: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2d5a43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20 mb-4">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Closed-Loop Biological Methodology</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Our 7-Step Farming Process
          </h1>

          <p className="text-sm sm:text-base text-[#b8c9b4] max-w-2xl leading-relaxed">
            From winter fungal inoculation to morning twilight picking and plant-starch dispatch—experience the seven intentional stages that make our produce truly life-giving.
          </p>
        </div>
      </section>

      {/* 2. STEP BY STEP VISUAL JOURNEY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Steps Navigation Bar */}
        <div className="mb-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] border-b border-[#ded5c0] pb-4">
            {PROCESS_STEPS.map((step) => (
              <button
                key={step.stepNumber}
                onClick={() => setExpandedStep(step.stepNumber)}
                className={`flex flex-col items-center group transition-all text-center px-2 ${
                  expandedStep === step.stepNumber ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mb-2 transition-all ${
                    expandedStep === step.stepNumber
                      ? 'bg-[#1b382b] text-[#52b788] shadow-md ring-4 ring-[#52b788]/20'
                      : 'bg-white border border-[#d8cfbe] text-[#415344] group-hover:bg-[#eae1ce]'
                  }`}
                >
                  0{step.stepNumber}
                </div>
                <span className="text-[11px] font-bold text-[#1b382b] max-w-[90px] leading-tight truncate">
                  {step.title.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Step Cards */}
        <div className="space-y-12">
          {PROCESS_STEPS.map((step) => {
            const isExpanded = expandedStep === step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                id={`step-${step.stepNumber}`}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${
                  isExpanded
                    ? 'border-[#2d5a43] shadow-lg ring-1 ring-[#2d5a43]/20'
                    : 'border-[#e5dec9] shadow-xs hover:border-[#cfc3aa]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8">
                  {/* Step Image */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 bg-[#e8e0ce] shadow-xs">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 bg-[#1b382b]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-bold">
                        Stage 0{step.stepNumber}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-[11px] font-medium flex items-center justify-between">
                        <span>{step.seasonOrTiming}</span>
                        <span className="text-[#a7d7b5]">Eco Certified</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Information */}
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#2d5a43] bg-[#f0ebd9] px-3 py-1 rounded-full">
                        {step.ecoTechnique}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1b382b] mt-2.5">
                        {step.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-[#2d5a43] mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4d5d4d] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail bullet points */}
                    <div className="pt-2">
                      <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#1b382b] mb-2.5">
                        Key Rigorous Protocols:
                      </h4>
                      <div className="space-y-2">
                        {step.detailPoints.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2 text-xs text-[#3a4a3a] bg-[#faf7f0] p-2.5 rounded-xl border border-[#ded5c0]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive toggle details */}
                    <div className="pt-3 flex items-center justify-between border-t border-[#f0ebd9]">
                      <span className="text-xs text-[#71826f]">
                        Season Window: <strong className="text-[#1b382b]">{step.seasonOrTiming}</strong>
                      </span>
                      <button
                        onClick={() => toggleStep(step.stepNumber)}
                        className="text-xs font-bold text-[#2d5a43] hover:text-[#1b382b] flex items-center gap-1"
                      >
                        <span>{isExpanded ? 'Collapse Stage' : 'Expand Stage'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. LIVING SOIL DEEP DIVE SECTION */}
        <div className="mt-24 bg-[#1b382b] text-[#f4eee1] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#2d5a43] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#52b788] bg-[#2d5a43] px-3.5 py-1.5 rounded-full inline-block">
                The Science of Flavor
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Why Living Biology Produces Superior Food
              </h3>
              <p className="text-sm text-[#b8c9b4] leading-relaxed">
                When a tomato plant is fed synthetic salts, it absorbs water rapidly, ballooning in cell size while diluting sugars, lycopene, and mineral iron. In living regenerative loam, mycorrhizal fungi trade micronutrients for plant carbohydrates in symbiotic equilibrium—resulting in 40% higher antioxidant concentrations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#15291f] border border-[#2d5a43]">
                  <div className="text-2xl font-bold text-[#52b788] font-serif">40x</div>
                  <div className="text-xs text-[#d6e5d2] font-semibold mt-1">Fungal Diversity</div>
                  <div className="text-[11px] text-[#8fa382] mt-0.5">Over synthetic sterile fields</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#15291f] border border-[#2d5a43]">
                  <div className="text-2xl font-bold text-[#52b788] font-serif">70%</div>
                  <div className="text-xs text-[#d6e5d2] font-semibold mt-1">Water Retained</div>
                  <div className="text-[11px] text-[#8fa382] mt-0.5">Due to high humus sponge matrix</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#15291f] border border-[#2d5a43]">
                  <div className="text-2xl font-bold text-[#52b788] font-serif">0 ppb</div>
                  <div className="text-xs text-[#d6e5d2] font-semibold mt-1">Synthetic Chemical</div>
                  <div className="text-[11px] text-[#8fa382] mt-0.5">Strict organic purity</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#15291f] p-6 rounded-2xl border border-[#2d5a43] space-y-4">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#52b788]" />
                Experience the Taste Today
              </h4>
              <p className="text-xs text-[#b8c9b4] leading-relaxed">
                Taste the tangible proof of our 7-step process in every crunchy heirloom carrot and sun-sweetened tomato.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  to="/products"
                  className="w-full text-center py-3 bg-[#52b788] hover:bg-[#3fa071] text-[#0f2418] font-bold text-xs rounded-xl transition-all"
                >
                  Order Fresh Harvest Produce
                </Link>
                <Link
                  to="/services"
                  className="w-full text-center py-2.5 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold rounded-xl transition-all"
                >
                  Book an Educational Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
