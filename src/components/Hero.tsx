import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, TrendingUp, Shield } from 'lucide-react';
import CheckoutButton from './CheckoutButton';
import { PRODUCTS } from '../config/stripe';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Video Analysis Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6"
          >
            Analyze Videos with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {' '}AI Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your video content with advanced AI analysis. Get insights, automate workflows, 
            and unlock the full potential of your video data at an affordable price.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <CheckoutButton
              priceId={PRODUCTS.pro.priceId}
              planName={PRODUCTS.pro.name}
              className="btn-primary text-lg px-8 py-3 flex items-center group"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Free Trial
            </CheckoutButton>
            <button className="btn-secondary text-lg px-8 py-3">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-secondary-600">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <span className="font-medium">10x Faster Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-secondary-600">
              <Shield className="h-6 w-6 text-blue-500" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-secondary-600">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="font-medium">AI-Powered Insights</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-secondary-200 overflow-hidden">
            <div className="bg-secondary-800 px-6 py-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-secondary-400 text-sm ml-4">VideoAI Dashboard</span>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Play className="h-16 w-16 text-primary-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-secondary-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-secondary-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card p-4">
                      <div className="text-2xl font-bold text-primary-600">94%</div>
                      <div className="text-sm text-secondary-600">Accuracy</div>
                    </div>
                    <div className="card p-4">
                      <div className="text-2xl font-bold text-green-600">2.3s</div>
                      <div className="text-sm text-secondary-600">Processing</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Object Detection</span>
                      <span className="text-green-600">✓ Complete</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Scene Analysis</span>
                      <span className="text-green-600">✓ Complete</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Audio Processing</span>
                      <span className="text-yellow-600">⏳ Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;