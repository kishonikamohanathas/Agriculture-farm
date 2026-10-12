import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    totalCount,
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 35;
  const progressPercent = Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100));
  const amountToFree = Math.max(0, freeDeliveryThreshold - subtotal);

  const discountAmount = promoApplied ? subtotal * 0.1 : 0;
  const deliveryFee = subtotal >= freeDeliveryThreshold || items.length === 0 ? 0 : 5.00;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HARVEST10' || promoCode.trim().toUpperCase() === 'VERDANT') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Try code HARVEST10 for 10% demo discount');
    }
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSuccess(true);
  };

  const handleFinishCheckout = () => {
    clearCart();
    setCheckoutSuccess(false);
    setIsCheckingOut(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf7f0] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#e5dec9] bg-[#f5efe1] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1b382b] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1b382b]">
                  Your Harvest Basket
                </h3>
                <span className="text-xs text-[#627360] font-medium">
                  {totalCount} item{totalCount === 1 ? '' : 's'} handpicked for you
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#4a5d49] hover:text-[#1b382b] hover:bg-[#e7dfce] rounded-full transition-colors"
              aria-label="Close basket"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free delivery tracker */}
          <div className="px-5 py-3.5 bg-[#1b382b] text-[#f4eee1] text-xs">
            <div className="flex items-center justify-between mb-1.5 font-medium">
              <span>
                {amountToFree === 0
                  ? '🎉 Qualified for FREE Same-Day Chilled Dispatch!'
                  : `Add $${amountToFree.toFixed(2)} more for FREE Chilled Dispatch`}
              </span>
              <span className="font-bold text-[#8fa382]">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#2d5a43] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#52b788] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#627360]">
                <div className="w-16 h-16 rounded-full bg-[#e8e0ce] flex items-center justify-center mb-4 text-[#8a9d86]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1b382b] mb-1">
                  Your basket is empty
                </h4>
                <p className="text-sm max-w-xs mb-6">
                  Explore our certified organic vegetables, heirloom fruits, grains, and fragrant herbs freshly picked at dawn.
                </p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2d5a43] hover:bg-[#1b382b] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  Explore Fresh Harvest
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3.5 p-3.5 rounded-2xl bg-white border border-[#e5dec9] shadow-xs hover:border-[#cfc4ab] transition-all"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 bg-[#e8e0ce]"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-sm font-semibold text-[#1b382b] leading-snug truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-[#9ea79c] hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#71826f]">{item.product.unit}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#d8cfbe] rounded-lg bg-[#faf7f0]">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="px-2 py-1 text-[#2d5a43] hover:bg-[#e8e0ce] rounded-l-md transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#1b382b]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="px-2 py-1 text-[#2d5a43] hover:bg-[#e8e0ce] rounded-r-md transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#1b382b]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#e5dec9] bg-[#f5efe1] space-y-3.5">
              {/* Promo code bar */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Coupon code (try HARVEST10)"
                    className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-white border border-[#d8cfbe] text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-[#2d5a43] text-white hover:bg-[#1b382b] transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="p-2 bg-emerald-100/80 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between font-medium">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    HARVEST10 Applied (-10% farm discount)
                  </span>
                  <button
                    onClick={() => setPromoApplied(false)}
                    className="text-xs text-emerald-900 underline hover:no-underline"
                  >
                    Remove
                  </button>
                </div>
              )}
              {promoError && <p className="text-[11px] text-amber-700">{promoError}</p>}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#526351]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-[#1b382b]">${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Farm Courtesy Discount (10%):</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Chilled Farm Dispatch:</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="pt-2 border-t border-[#dfd6c2] flex justify-between text-base font-bold text-[#1b382b]">
                  <span>Estimated Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-1 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3 px-4 rounded-xl bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <span>Proceed to Demo Order</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full text-center text-xs text-[#71826f] hover:text-rose-700 transition-colors py-1"
                >
                  Clear basket
                </button>
              </div>

              <div className="text-[10px] text-center text-[#7e8e7c] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2d5a43]" />
                Zero packaging waste guarantee. Return crates on next drop.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckingOut && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#faf7f0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ded5c0] relative max-h-[90vh] overflow-y-auto">
            {!checkoutSuccess ? (
              <>
                <button
                  onClick={() => setIsCheckingOut(false)}
                  className="absolute top-5 right-5 p-2 rounded-full text-[#6b7b69] hover:bg-[#eae1ce] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#52b788] bg-[#1b382b] px-3 py-1 rounded-full font-bold">
                    Demo Farm Order
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1b382b] mt-3">
                    Confirm Produce Dispatch
                  </h3>
                  <p className="text-xs text-[#526351] mt-1">
                    Simulate your farm order. No payment card required for this interactive demonstration.
                  </p>
                </div>

                <form onSubmit={handleConfirmOrder} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Recipient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Clara Henderson"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Delivery Notification Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="clara@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1b382b] mb-1">
                      Delivery Address / Drop-off Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 124 Forest Creek Dr, Porch Cooler Box"
                      defaultValue="329 Meadow Glen Way (Leave on front porch cooler)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#d8cfbe] text-sm text-[#1b382b] focus:outline-none focus:border-[#2d5a43]"
                    />
                  </div>

                  <div className="p-4 bg-[#f1ebd9] rounded-2xl border border-[#ded5c0] space-y-2 text-xs">
                    <div className="font-semibold text-[#1b382b] flex items-center justify-between">
                      <span>Order Summary ({totalCount} items)</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-[#647562]">
                      Harvested at tomorrow's 5:30 AM dawn shift. Dispatched by 9:00 AM in insulated wooden return crates.
                    </p>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 py-3 border border-[#1b382b]/30 text-[#1b382b] font-medium text-xs rounded-xl hover:bg-[#eae1ce] transition-colors"
                    >
                      Back to Basket
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-xs rounded-xl transition-all shadow-md"
                    >
                      Place Demo Order (${grandTotal.toFixed(2)})
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
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Harvest Ticket #VR-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1b382b] mt-3">
                    Order Received, {customerName || 'Friend'}!
                  </h3>
                  <p className="text-sm text-[#526351] max-w-sm mx-auto mt-2 leading-relaxed">
                    Our dawn harvesters will gather your produce at tomorrow’s morning twilight. A confirmation summary was sent to{' '}
                    <strong className="text-[#1b382b]">{customerEmail || 'your email'}</strong>.
                  </p>
                </div>

                <div className="p-4 bg-[#f1ebd9] rounded-2xl text-left border border-[#ded5c0] space-y-1.5 text-xs text-[#526351]">
                  <p><strong>Dispatch Window:</strong> Tomorrow 7:00 AM – 10:30 AM</p>
                  <p><strong>Packing Method:</strong> 100% compostable cellulose & reusable cedar tote</p>
                  <p><strong>Payment Status:</strong> Demonstration Completed (No charges made)</p>
                </div>

                <button
                  type="button"
                  onClick={handleFinishCheckout}
                  className="w-full py-3 bg-[#1b382b] hover:bg-[#2d5a43] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  Return to Farm Homepage
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
