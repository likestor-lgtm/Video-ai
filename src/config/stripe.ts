// Stripe configuration
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here';

// Price IDs for different plans
export const STRIPE_PRICE_IDS = {
  pro: 'price_pro_monthly', // Replace with your actual Stripe Price ID
  enterprise: 'price_enterprise_monthly' // Replace with your actual Stripe Price ID
};

// Product configuration
export const PRODUCTS = {
  starter: {
    name: 'Starter',
    price: 0,
    priceId: null,
    features: [
      '5 video analyses per month',
      'Basic object detection',
      'Standard processing speed',
      'Email support',
      '720p video support'
    ]
  },
  pro: {
    name: 'Pro',
    price: 9.90,
    priceId: STRIPE_PRICE_IDS.pro,
    features: [
      'Unlimited video analyses',
      'Advanced AI features',
      'Priority processing',
      '24/7 chat support',
      '4K video support',
      'Custom model training',
      'Team collaboration',
      'API access'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: null,
    priceId: STRIPE_PRICE_IDS.enterprise,
    features: [
      'Everything in Pro',
      'Dedicated infrastructure',
      'Custom integrations',
      'SLA guarantees',
      'On-premise deployment',
      'Advanced security',
      'Training & onboarding',
      'Account manager'
    ]
  }
};