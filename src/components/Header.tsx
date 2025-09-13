import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Video className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
              <Zap className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
              VideoAI
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Dashboard
            </Link>
            <a href="#features" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-secondary-600 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">
              Sign In
            </button>
            <button className="btn-primary">
              Start Free Trial
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-secondary-200"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-secondary-600 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link to="/dashboard" className="text-secondary-600 hover:text-primary-600 font-medium">
                Dashboard
              </Link>
              <a href="#features" className="text-secondary-600 hover:text-primary-600 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-secondary-600 hover:text-primary-600 font-medium">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="btn-secondary">Sign In</button>
                <button className="btn-primary">Start Free Trial</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;