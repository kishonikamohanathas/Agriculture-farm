import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data/farmData';
import { GalleryItem } from '../types';
import { Sprout, X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photographs', count: GALLERY_ITEMS.length },
    { key: 'fields', label: 'Fields & Terraces', count: GALLERY_ITEMS.filter(g => g.category === 'fields').length },
    { key: 'crops', label: 'Heirloom Crops', count: GALLERY_ITEMS.filter(g => g.category === 'crops').length },
    { key: 'farmers', label: 'Farmers & Growers', count: GALLERY_ITEMS.filter(g => g.category === 'farmers').length },
    { key: 'harvesting', label: 'Dawn Harvesting', count: GALLERY_ITEMS.filter(g => g.category === 'harvesting').length },
    { key: 'greenhouses', label: 'Glass Greenhouses', count: GALLERY_ITEMS.filter(g => g.category === 'greenhouses').length },
    { key: 'produce', label: 'Fresh Produce', count: GALLERY_ITEMS.filter(g => g.category === 'produce').length },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem: GalleryItem | null =
    activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2d5a43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20 mb-4">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Living Chronicles from the River Basin</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Life on Verdant Roots
          </h1>

          <p className="text-sm sm:text-base text-[#b8c9b4] max-w-2xl leading-relaxed">
            A visual documentation of our mist-covered terraces, heirloom blossoms, morning harvesters, and seasonal soil stewardship across 450 certified organic acres.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setActiveItemIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.key
                  ? 'bg-[#1b382b] text-white shadow-sm'
                  : 'bg-white text-[#415344] border border-[#d8cfbe] hover:bg-[#ede5d3]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.key ? 'bg-white/20 text-white' : 'bg-[#e5dec9] text-[#2d5a43]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-[#e5dec9] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-[#e8e0ce]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-3 rounded-full bg-white/90 text-[#1b382b] backdrop-blur-xs shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Badge tags */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-[#1b382b]/90 text-white text-[10px] font-bold backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 text-[11px] font-medium text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#52b788]" />
                    {item.location}
                  </span>
                  <span className="text-[11px] text-[#a7d7b5]">{item.season}</span>
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1b382b] group-hover:text-[#2d5a43] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#526351] mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#f0ebd9] flex items-center justify-between text-[11px] text-[#788876]">
                  <span>Click to view full photograph</span>
                  <Camera className="w-3.5 h-3.5 text-[#2d5a43]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LIGHTBOX / PREVIEW MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Right Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="max-w-4xl w-full bg-[#1b382b] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col md:flex-row max-h-[90vh]">
            {/* Main high-res image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full max-h-[70vh] object-cover"
              />
            </div>

            {/* Photo metadata sidebar */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#52b788] bg-[#2d5a43] px-3 py-1 rounded-full">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-xs text-[#a7d7b5] font-mono">
                    {activeItemIndex! + 1} / {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold leading-tight">
                  {activeItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#d6e5d2] leading-relaxed">
                  {activeItem.caption}
                </p>

                <div className="space-y-2.5 p-4 rounded-2xl bg-[#15291f] border border-[#2d5a43] text-xs">
                  <div className="flex items-center gap-2 text-[#b8c9b4]">
                    <MapPin className="w-4 h-4 text-[#52b788] shrink-0" />
                    <span><strong>Location:</strong> {activeItem.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#b8c9b4]">
                    <Calendar className="w-4 h-4 text-[#52b788] shrink-0" />
                    <span><strong>Season / Lighting:</strong> {activeItem.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#b8c9b4]">
                    <Camera className="w-4 h-4 text-[#52b788] shrink-0" />
                    <span><strong>Shot on:</strong> 50mm Prime, natural morning light</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2d5a43] flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  className="text-xs text-[#a7d7b5] hover:text-white flex items-center gap-1 font-semibold"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  className="text-xs text-[#a7d7b5] hover:text-white flex items-center gap-1 font-semibold"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
