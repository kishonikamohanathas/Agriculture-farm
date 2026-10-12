import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Sprout, Filter, X, Check, Info, Sparkles, ArrowUpDown } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/farmData';
import { Product, ProductCategory } from '../types';
import { useCart } from '../context/CartContext';

export const ProductsPage: React.FC = () => {
  const { addItem } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [filterHeirloom, setFilterHeirloom] = useState(false);
  const [filterSeasonal, setFilterSeasonal] = useState(false);

  // Modal for quick inspect
  const [inspectedProduct, setInspectedProduct] = useState<Product | null>(null);

  // Local quantities state for individual card steppers before adding
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQty = (id: string) => quantities[id] || 1;
  const setQty = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAddToCart = (product: Product) => {
    const qty = getQty(product.id);
    addItem(product, qty);
    // Reset local stepper back to 1
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  const categories: { key: ProductCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Harvests', count: PRODUCTS_DATA.length },
    { key: 'vegetables', label: 'Fresh Vegetables', count: PRODUCTS_DATA.filter(p => p.category === 'vegetables').length },
    { key: 'fruits', label: 'Orchard Fruits', count: PRODUCTS_DATA.filter(p => p.category === 'fruits').length },
    { key: 'grains', label: 'Ancient Grains', count: PRODUCTS_DATA.filter(p => p.category === 'grains').length },
    { key: 'herbs', label: 'Aromatic & Medicinal Herbs', count: PRODUCTS_DATA.filter(p => p.category === 'herbs').length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.botanicalName && item.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesHeirloom = !filterHeirloom || item.isHeirloom;
      const matchesSeasonal = !filterSeasonal || item.isSeasonal;

      return matchesCategory && matchesQuery && matchesHeirloom && matchesSeasonal;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, filterHeirloom, filterSeasonal]);

  return (
    <div className="min-h-screen pt-20 bg-[#faf7f0]">
      {/* 1. HERO HEADER */}
      <section className="bg-[#1b382b] text-[#f4eee1] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2d5a43] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#a7d7b5] text-xs font-semibold backdrop-blur-sm border border-white/20 mb-4">
            <Sprout className="w-4 h-4 text-[#52b788]" />
            <span>Dawn-Cut Produce • 100% Certified Organic</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            Our Seasonal Harvest
          </h1>

          <p className="text-sm sm:text-base text-[#b8c9b4] max-w-2xl leading-relaxed">
            Fresh vegetables, antique orchard fruits, whole stoneground grains, and living herbs grown in living, unadulterated soil. Hand-cut at 5:30 AM every morning.
          </p>
        </div>
      </section>

      {/* 2. CONTROLS: SEARCH, CATEGORIES & FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Search box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#697967] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search heirloom tomatoes, apples, spelt, basil..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] placeholder-[#819280] focus:outline-none focus:border-[#2d5a43] transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#819280] hover:text-[#1b382b]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Toggle Tags & Sort */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={() => setFilterHeirloom(!filterHeirloom)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                filterHeirloom
                  ? 'bg-[#1b382b] text-white border-[#1b382b]'
                  : 'bg-white text-[#415344] border-[#d8cfbe] hover:bg-[#ede5d3]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
              <span>Heirloom Only</span>
            </button>

            <button
              onClick={() => setFilterSeasonal(!filterSeasonal)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                filterSeasonal
                  ? 'bg-[#d97706] text-white border-[#d97706]'
                  : 'bg-white text-[#415344] border-[#d8cfbe] hover:bg-[#ede5d3]'
              }`}
            >
              <span>Peak Season Only</span>
            </button>

            <div className="flex items-center gap-1.5 bg-white border border-[#d8cfbe] rounded-xl px-3 py-1.5 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#697967]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-[#1b382b] font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
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

        {/* Active results info */}
        <div className="flex items-center justify-between text-xs text-[#627360] mb-6">
          <span>
            Showing <strong className="text-[#1b382b]">{filteredProducts.length}</strong> fresh varieties
          </span>
          {(searchQuery || filterHeirloom || filterSeasonal || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilterHeirloom(false);
                setFilterSeasonal(false);
              }}
              className="text-[#2d5a43] hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#e5dec9] max-w-lg mx-auto my-12">
            <div className="w-16 h-16 rounded-full bg-[#f0ebd9] flex items-center justify-center text-[#2d5a43] mx-auto mb-4">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1b382b] mb-2">
              No crops matched your filter
            </h3>
            <p className="text-xs text-[#526351] mb-6">
              Try adjusting your search keyword or clearing the heirloom/seasonal toggle filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilterHeirloom(false);
                setFilterSeasonal(false);
              }}
              className="px-5 py-2.5 rounded-full bg-[#1b382b] text-white text-xs font-semibold hover:bg-[#2d5a43] transition-colors"
            >
              Show All Available Produce
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const qty = getQty(prod.id);

              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#e5dec9] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden bg-[#e8e0ce]">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Quick view button */}
                    <button
                      onClick={() => setInspectedProduct(prod)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs flex items-center justify-center transition-colors opacity-90 hover:opacity-100"
                      title="Inspect Crop Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {prod.isHeirloom && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1b382b]/90 text-white text-[10px] font-bold backdrop-blur-xs">
                          Heirloom
                        </span>
                      )}
                      {prod.isSeasonal && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#d97706]/90 text-white text-[10px] font-bold backdrop-blur-xs">
                          In Peak Season
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-medium text-white px-2 py-1 rounded-lg bg-black/40 backdrop-blur-xs">
                      <span>{prod.origin}</span>
                      <span className="text-[#a7d7b5]">{prod.stockCount} in stock</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-[#697967] mb-0.5">
                        <span>{prod.category}</span>
                        <span className="text-[#2d5a43] italic normal-case">{prod.harvestWindow}</span>
                      </div>

                      <h3
                        onClick={() => setInspectedProduct(prod)}
                        className="font-serif text-lg font-bold text-[#1b382b] group-hover:text-[#2d5a43] transition-colors leading-snug cursor-pointer"
                      >
                        {prod.name}
                      </h3>

                      {prod.botanicalName && (
                        <p className="text-[11px] italic text-[#788876] mt-0.5 mb-1.5">
                          {prod.botanicalName}
                        </p>
                      )}

                      <p className="text-xs text-[#526351] line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#f0ebd9] space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-xl font-bold text-[#1b382b]">
                            ${prod.price.toFixed(2)}
                          </span>
                          <span className="text-[11px] text-[#71826f] ml-1">/{prod.unit}</span>
                        </div>

                        {/* Nutrition pill snippet */}
                        <span className="text-[10px] text-[#2d5a43] font-medium bg-[#f0ebd9] px-2 py-0.5 rounded-md truncate max-w-[140px]">
                          {prod.nutritionHighlight}
                        </span>
                      </div>

                      {/* Stepper & Add to Basket Button */}
                      <div className="flex items-center gap-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#d8cfbe] rounded-xl bg-[#faf7f0] shrink-0">
                          <button
                            type="button"
                            onClick={() => setQty(prod.id, -1)}
                            className="p-1.5 text-[#2d5a43] hover:bg-[#e8e0ce] rounded-l-lg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-[#1b382b]">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(prod.id, 1)}
                            className="p-1.5 text-[#2d5a43] hover:bg-[#e8e0ce] rounded-r-lg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Add Button */}
                        <button
                          type="button"
                          onClick={() => handleAddToCart(prod)}
                          className="flex-1 py-2 px-3 rounded-xl bg-[#1b382b] hover:bg-[#2d5a43] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs active:scale-95"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Basket</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* QUICK INSPECT PRODUCT MODAL */}
      {inspectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#faf7f0] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#ded5c0] relative max-h-[90vh] flex flex-col md:flex-row">
            <button
              onClick={() => setInspectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left image */}
            <div className="md:w-1/2 h-64 md:h-auto relative bg-[#e8e0ce]">
              <img
                src={inspectedProduct.image}
                alt={inspectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#2d5a43] bg-[#e8dfcb] px-2.5 py-1 rounded-full">
                  {inspectedProduct.category}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#1b382b] mt-2">
                  {inspectedProduct.name}
                </h3>
                {inspectedProduct.botanicalName && (
                  <p className="text-xs italic text-[#637561] mb-3">
                    {inspectedProduct.botanicalName}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#4d5d4d] leading-relaxed mb-4">
                  {inspectedProduct.description}
                </p>

                <div className="space-y-2 p-3.5 rounded-2xl bg-white border border-[#e5dec9] text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#697967]">Plot / Origin:</span>
                    <strong className="text-[#1b382b]">{inspectedProduct.origin}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#697967]">Harvest Window:</span>
                    <strong className="text-[#1b382b]">{inspectedProduct.harvestWindow}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#697967]">Nutrition Profile:</span>
                    <strong className="text-[#2d5a43] text-right max-w-[160px] truncate">
                      {inspectedProduct.nutritionHighlight}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ded5c0]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#1b382b]">
                      ${inspectedProduct.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-[#71826f] ml-1">/{inspectedProduct.unit}</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Harvested fresh at 5:30 AM
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    addItem(inspectedProduct, 1);
                    setInspectedProduct(null);
                  }}
                  className="w-full py-3 bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Harvest Basket</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
