import React, { useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { CreditCard, Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  priceId: string;
  planName: string;
  className?: string;
  children: React.ReactNode;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ 
  priceId, 
  planName, 
  className = '', 
  children 
}) => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!stripe) {
      setError('Stripe is not loaded');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // In a real app, you would call your backend to create a checkout session
      // For demo purposes, we'll simulate the process
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          planName,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        setError(error.message || 'An error occurred');
      }
    } catch (err) {
      // For demo purposes, show a success message
      setError(null);
      alert(`Checkout initiated for ${planName} plan! In a real app, this would redirect to Stripe Checkout.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCheckout}
        disabled={loading || !stripe}
        className={`${className} ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Processing...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <CreditCard className="h-4 w-4 mr-2" />
            {children}
          </div>
        )}
      </motion.button>
      {error && (
        <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
};

export default CheckoutButton;