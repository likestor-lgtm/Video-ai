import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Play, 
  Pause, 
  BarChart3, 
  Eye, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Download,
  Share2,
  Settings,
  Filter
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const videoAnalyses = [
    {
      id: 1,
      name: 'Product Demo Video',
      status: 'completed',
      progress: 100,
      duration: '2:34',
      uploadDate: '2024-01-15',
      insights: {
        objects: 23,
        scenes: 8,
        accuracy: 94
      }
    },
    {
      id: 2,
      name: 'Marketing Campaign',
      status: 'processing',
      progress: 67,
      duration: '1:45',
      uploadDate: '2024-01-15',
      insights: {
        objects: 0,
        scenes: 0,
        accuracy: 0
      }
    },
    {
      id: 3,
      name: 'Training Material',
      status: 'completed',
      progress: 100,
      duration: '5:12',
      uploadDate: '2024-01-14',
      insights: {
        objects: 45,
        scenes: 12,
        accuracy: 97
      }
    }
  ];

  const stats = [
    { label: 'Videos Analyzed', value: '1,234', change: '+12%', color: 'text-blue-600' },
    { label: 'Processing Time Saved', value: '45.2h', change: '+8%', color: 'text-green-600' },
    { label: 'Accuracy Rate', value: '96.8%', change: '+2%', color: 'text-purple-600' },
    { label: 'Active Projects', value: '23', change: '+5%', color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-secondary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">Dashboard</h1>
          <p className="text-secondary-600">Manage and analyze your video content with AI-powered insights.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary-600 mb-1">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className="text-sm text-green-600 font-medium">{stat.change}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-8"
        >
          <div className="text-center py-12">
            <Upload className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Upload New Video</h3>
            <p className="text-secondary-600 mb-6">Drag and drop your video files or click to browse</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Choose Files
              </button>
              <button className="btn-secondary">
                Upload from URL
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="border-b border-secondary-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'analytics', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-secondary-900">Recent Analyses</h2>
                <div className="flex items-center space-x-2">
                  <button className="btn-secondary flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <button className="btn-secondary flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {videoAnalyses.map((video) => (
                  <div key={video.id} className="card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary-900">{video.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-secondary-600">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {video.duration}
                            </span>
                            <span>Uploaded {video.uploadDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-secondary-900">{video.insights.objects}</div>
                          <div className="text-xs text-secondary-600">Objects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-secondary-900">{video.insights.scenes}</div>
                          <div className="text-xs text-secondary-600">Scenes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-secondary-900">{video.insights.accuracy}%</div>
                          <div className="text-xs text-secondary-600">Accuracy</div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {video.status === 'completed' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-yellow-500" />
                          )}
                          <span className={`text-sm font-medium capitalize ${
                            video.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                          }`}>
                            {video.status}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
                            <Download className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-secondary-600 hover:text-primary-600 transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {video.status === 'processing' && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm text-secondary-600 mb-2">
                          <span>Processing...</span>
                          <span>{video.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${video.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="card">
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Advanced Analytics</h3>
                <p className="text-secondary-600">Detailed analytics and insights coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="card">
              <div className="text-center py-12">
                <Settings className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Settings</h3>
                <p className="text-secondary-600">Configure your preferences and account settings...</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;