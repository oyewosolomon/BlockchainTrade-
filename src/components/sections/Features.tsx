import React from 'react';
import { FaFileAlt, FaCalendar, FaTh, FaChartBar, FaBookOpen, FaChartLine } from 'react-icons/fa';
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
      icon: <LineChart className="w-6 h-6 text-black" />,
      title: "Advanced Trading Tools",
      description: "Professional-grade charts, technical indicators, and trading views customized for your strategy."
    },
    {
      icon: <Lock className="w-6 h-6 text-black" />,
      title: "Institutional Security",
      description: "Multi-signature wallets, cold storage, and 24/7 security monitoring to protect your assets."
    },
    {
      icon: <Laptop className="w-6 h-6 text-black" />,
      title: "Automated Trading",
      description: "Create and deploy custom trading strategies with our intuitive bot interface."
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Lightning Fast Execution",
      description: "High-performance matching engine processing 100,000+ trades per second."
    },
    {
      icon: <History className="w-6 h-6 text-black" />,
      title: "24/7 Market Access",
      description: "Trade anytime with our highly available platform and real-time market data."
    },
    {
      icon: <Globe className="w-6 h-6 text-black" />,
      title: "Global Compliance",
      description: "Fully regulated platform adhering to international financial standards."
    }
  ];

  return (
    <section className=" bg-gradient-to-br from-gray-900 to-black">
      <div className='py-16 px-4 max-w-6xl text-gray-200 mx-auto '>

      
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our modern features</h2>
          <p className="text-gray-300 text-lg">
            Using technology to make finance simpler, smarter and more rewarding.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Features */}
          <div className="space-y-16 w-full lg:w-1/3">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start justify-end text-right">
                <div className="max-w-xs">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                <div className="ml-6 bg-indigo-50 p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Center Phone Image */}
          <div className="w-full lg:w-1/3 my-12 lg:my-0 flex justify-center">
            <div className="relative w-64 h-auto">
              <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/images/f.png" 
                  alt="Mobile app interface showing finance dashboard" 
                  className="w-full h-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-16 w-full lg:w-1/3">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-6 bg-indigo-50 p-4 rounded-full">
                  {feature.icon}
                </div>
                <div className="max-w-xs">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;