import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Professional Trader",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      content: "BlockchainTrade's automated trading features have revolutionized my trading strategy. The platform's reliability and advanced tools are unmatched.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Manager",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      content: "The institutional-grade security and deep liquidity pools make BlockchainTrade our go-to platform for large-scale cryptocurrency trading.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Crypto Enthusiast",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      content: "As a newcomer to crypto trading, I found BlockchainTrade's interface intuitive while still offering all the advanced features I needed as I grew.",
      rating: 4
    }
  ];

  return (
    <div className="bg-gray-800 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied traders who have chosen BlockchainTrade Solutions for their digital asset trading needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;