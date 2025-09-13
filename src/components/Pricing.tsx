import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: 'Free Forever',
      description: 'Perfect for trying out VideoAI',
      features: [
        '5 video analyses per month',
        'Basic object detection',
        'Standard processing speed',
        'Email support',
        '720p video support'
      ],
      buttonText: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '9.90',
      period: 'per month',
      description: 'Best value for professionals',
      features: [
        'Unlimited video analyses',
        'Advanced AI features',
        'Priority processing',
        '24/7 chat support',
        '4K video support',
        'Custom model training',
        'Team collaboration',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated infrastructure',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment',
        'Advanced security',
        'Training & onboarding',
        'Account manager'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {' '}Pricing
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular 
                  ? 'border-primary-500 transform scale-105' 
                  : 'border-secondary-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                <p className="text-secondary-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold text-secondary-900">{plan.price}</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-secondary-900">€{plan.price}</span>
                      {plan.price !== '0' && (
                        <span className="text-secondary-600 ml-2">/{plan.period.split(' ')[1]}</span>
                      )}
                    </div>
                  )}
                  <div className="text-secondary-600 text-sm">{plan.period}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-secondary-200 p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-yellow-500 mr-2" />
              <h3 className="text-2xl font-bold text-secondary-900">Why Choose VideoAI?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">10x</div>
                <div className="text-secondary-600">Faster than competitors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-secondary-600">Uptime guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-secondary-600">Expert support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;