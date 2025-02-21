import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Mail,
  Phone,
  Globe,
  Shield,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      'Spot Trading',
      'Margin Trading',
      'Futures',
      'Trading Bots',
      'API Access',
      'Mobile App'
    ],
    company: [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Partners',
      'Contact'
    ],
    support: [
      'Help Center',
      'Trading Guides',
      'FAQ',
      'API Documentation',
      'Fee Schedule',
      'Status'
    ],
    legal: [
      'Terms of Service',
      'Privacy Policy',
      'Risk Disclosure',
      'AML Policy',
      'Cookie Policy'
    ]
  };

  return (
    <footer className="bg-gray-900">
      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">BlockchainTrade</h3>
            <p className="text-gray-400 mb-6">
              Leading digital asset trading platform with institutional-grade security and advanced trading features.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-gray-400">
                <Shield className="w-5 h-5 mr-2" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center text-gray-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Licensed Exchange</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:support@blockchaintrade.com" className="hover:text-white transition-colors">
                  support@blockchaintrade.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Globe className="w-5 h-5 mr-3" />
                <span>24/7 Global Support</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social media and newsletter */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} BlockchainTrade Solutions. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;