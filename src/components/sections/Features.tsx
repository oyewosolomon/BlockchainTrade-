import React from 'react';
import { 
  LineChart, 
  Lock, 
  Laptop, 
  Zap,
  History,
  Globe,
  UserCheck
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Advanced Trading Tools",
      description: "Professional-grade charts, technical indicators, and trading views customized for your strategy."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Institutional Security",
      description: "Multi-signature wallets, cold storage, and 24/7 security monitoring to protect your assets."
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Automated Trading",
      description: "Create and deploy custom trading strategies with our intuitive bot interface."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Execution",
      description: "High-performance matching engine processing 100,000+ trades per second."
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "24/7 Market Access",
      description: "Trade anytime with our highly available platform and real-time market data."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Compliance",
      description: "Fully regulated platform adhering to international financial standards."
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Professional Trading for Everyone
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the power of institutional-grade trading technology combined with an intuitive user interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                <div className="text-blue-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-all">
            <UserCheck className="w-5 h-5 mr-2" />
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;