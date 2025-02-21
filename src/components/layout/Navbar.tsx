import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'Markets',
      submenu: ['Spot Trading', 'Futures', 'Margin Trading']
    },
    {
      label: 'Features',
      submenu: ['Trading Tools', 'API Access', 'Security']
    },
    'Pricing',
    'About',
    'Support'
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">BlockchainTrade</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => (
              typeof item === 'string' ? (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ) : (
                <div key={index} className="relative group">
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 hidden group-hover:block">
                    <div className="bg-gray-800 rounded-lg shadow-xl py-2 mt-2 min-w-[160px]">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 mt-2 rounded-lg p-4">
            {navLinks.map((item, index) => (
              typeof item === 'string' ? (
                <a
                  key={index}
                  href="#"
                  className="block py-2 text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ) : (
                <div key={index} className="py-2">
                  <button className="flex items-center text-gray-300 hover:text-white">
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block text-sm text-gray-300 hover:text-white"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )
            ))}
            <div className="mt-4 space-y-2">
              <button className="block w-full py-2 text-gray-300 hover:text-white">
                Log In
              </button>
              <button className="block w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;