import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="h-8 w-8 text-green-600" />
        </motion.div>

        <h1 className="text-2xl font-bold text-secondary-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-secondary-600 mb-8">
          Welcome to VideoAI Pro! Your subscription is now active and you can start analyzing unlimited videos.
        </p>

        <div className="space-y-4">
          <Link
            to="/dashboard"
            className="btn-primary w-full flex items-center justify-center"
          >
            Go to Dashboard
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
          
          <Link
            to="/"
            className="btn-secondary w-full"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-700">
            <strong>Next steps:</strong> Check your email for a receipt and setup instructions.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;