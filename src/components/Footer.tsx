import React from 'react';
import { Video, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Video className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">VideoAI</span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Transform your video content with advanced AI analysis. Get insights, automate workflows, 
              and unlock the full potential of your video data at an affordable price.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-secondary-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            © 2024 VideoAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;