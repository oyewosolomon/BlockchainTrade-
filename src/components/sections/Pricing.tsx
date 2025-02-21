import React, { useState } from 'react';
import { Check, HelpCircle, AlertCircle } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');

  const tiers = [
    {
      name: 'Basic',
      description: 'Perfect for newcomers to crypto trading',
      monthlyFee: '0',
      tradingFee: '0.2%',
      features: [
        'Spot Trading',
        'Basic Market Analysis',
        'Email Support',
        'Mobile App Access',
        'Basic API Access',
        'Standard KYC Limits'
      ],
      highlight: false
    },
    {
      name: 'Pro',
      description: 'For serious traders who need more power',
      monthlyFee: '29',
      tradingFee: '0.15%',
      features: [
        'Everything in Basic',
        'Advanced Trading Tools',
        'Priority Support 24/7',
        'Advanced API Access',
        'Trading Bots (Basic)',
        'Higher KYC Limits'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for institutions',
      monthlyFee: '199',
      tradingFee: '0.1%',
      features: [
        'Everything in Pro',
        'Custom Trading Bots',
        'Dedicated Account Manager',
        'White-glove Support',
        'Custom API Solutions',
        'Unlimited Trading Volume'
      ],
      highlight: false
    }
  ];

  const tooltips = {
    tradingFee: 'Fee charged on each trade execution',
    apiAccess: 'Programmatic access to trading functions',
    kycLimits: 'Maximum trading amounts based on verification level'
  };

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transparent Pricing for Every Trader
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the plan that best suits your trading needs. All plans include our core trading features and security measures.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
            >
              <div
                className={`w-6 h-6 bg-blue-500 rounded-full transition-transform duration-300 transform ${
                  isAnnual ? 'translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual Billing (Save 20%)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? 'bg-blue-600 transform scale-105'
                  : 'bg-gray-800'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${
                    isAnnual 
                      ? (parseFloat(tier.monthlyFee) * 0.8).toFixed(0) 
                      : tier.monthlyFee
                  }</span>
                  <span className="text-gray-300 ml-2">/month</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-gray-300">Trading Fee: {tier.tradingFee}</span>
                  <button
                    onMouseEnter={() => setShowTooltip('tradingFee')}
                    onMouseLeave={() => setShowTooltip('')}
                    className="ml-2"
                  >
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                  </button>
                  {showTooltip === 'tradingFee' && (
                    <div className="absolute bg-gray-900 text-white text-sm p-2 rounded-lg mt-2">
                      {tooltips.tradingFee}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 ${
                      tier.highlight ? 'text-white' : 'text-blue-400'
                    } mr-3`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                tier.highlight
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-6 h-6 text-blue-400 mr-3" />
            <h4 className="text-xl font-semibold text-white">
              Volume Discounts Available
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-white font-medium mb-2">30-Day Volume</h5>
              <ul className="space-y-2 text-gray-400">
                <li>$0 - $50,000: Base Rate</li>
                <li>$50,000 - $1M: 10% Discount</li>
                <li>$1M+: 20% Discount</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-2">Staking Benefits</h5>
              <ul className="space-y-2 text-gray-400">
                <li>1,000 BTS: 5% Fee Reduction</li>
                <li>5,000 BTS: 15% Fee Reduction</li>
                <li>10,000 BTS: 25% Fee Reduction</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-2">Market Maker Rates</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Maker Orders: Up to 0.05%</li>
                <li>High-Volume: Custom Rates</li>
                <li>Contact Sales for Details</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-white mb-4">
            Have Questions?
          </h4>
          <p className="text-gray-400 mb-6">
            Our pricing specialists are here to help you find the perfect plan for your needs.
          </p>
          <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;