import React from 'react';
import { ArrowRight, ChevronDown, TrendingUp, Shield, Coins } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
            <TrendingUp className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">$1B+ Monthly Trading Volume</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Trade Smarter with
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> BlockchainTrade</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Institutional-grade crypto trading platform with advanced automation and unmatched security. Access 100+ cryptocurrencies instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center transition-all">
              Start Trading
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all">
              View Markets
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <Coins className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">100+ Coins</h3>
              <p className="text-gray-400">Trade major and emerging cryptocurrencies</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Smart Trading</h3>
              <p className="text-gray-400">Automated strategies & advanced tools</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Bank-Grade</h3>
              <p className="text-gray-400">Enterprise security & compliance</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;