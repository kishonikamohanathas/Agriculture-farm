import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-[#1b382b] text-white px-4 py-3 rounded-2xl shadow-xl border border-[#3b664f] flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-[#52b788] text-[#1b382b] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold leading-tight truncate">{toastMessage}</p>
          <button
            onClick={() => {
              clearToast();
              setIsCartOpen(true);
            }}
            className="text-[11px] text-[#a3d9bc] hover:underline flex items-center gap-1 mt-0.5 font-medium"
          >
            <ShoppingBag className="w-3 h-3" /> View in Basket
          </button>
        </div>
        <button
          onClick={clearToast}
          className="text-white/60 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
