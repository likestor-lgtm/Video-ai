import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  FileVideo, 
  Clock, 
  Users, 
  Globe,
  Cpu,
  Eye,
  Mic,
  Target
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analysis',
      description: 'State-of-the-art machine learning models for comprehensive video understanding and content analysis.',
      color: 'text-purple-600'
    },
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Identify and track objects, people, and scenes with industry-leading accuracy and precision.',
      color: 'text-blue-600'
    },
    {
      icon: Mic,
      title: 'Audio Processing',
      description: 'Extract insights from audio tracks, including speech recognition and sentiment analysis.',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Get instant insights and analytics as your videos are processed with live dashboards.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process videos 10x faster than traditional methods with our optimized AI infrastructure.',
      color: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to keep your video content safe and private.',
      color: 'text-red-600'
    },
    {
      icon: FileVideo,
      title: 'Multiple Formats',
      description: 'Support for all major video formats including MP4, AVI, MOV, and streaming protocols.',
      color: 'text-indigo-600'
    },
    {
      icon: Clock,
      title: 'Batch Processing',
      description: 'Process multiple videos simultaneously with automated workflows and scheduling.',
      color: 'text-teal-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with team members through integrated workspace tools.',
      color: 'text-pink-600'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Fast video processing worldwide with our distributed cloud infrastructure.',
      color: 'text-cyan-600'
    },
    {
      icon: Cpu,
      title: 'Custom Models',
      description: 'Train custom AI models for your specific use cases and industry requirements.',
      color: 'text-violet-600'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Advanced targeting and segmentation based on video content and viewer behavior.',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Powerful Features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
              {' '}Modern Video Analysis
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Everything you need to analyze, understand, and optimize your video content with cutting-edge AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-secondary-50 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
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
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Video Workflow?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of creators and businesses who are already using VideoAI to unlock insights from their video content.
            </p>
            <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;