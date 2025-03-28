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
      submenu: ['Trading Tools', 'Security']
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
          <div className="flex-shrink-0 flex items-center gap-3">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 3L14 9L10 5L3 11M4.5 21C3.67157 21 3 20.3284 3 19.5V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V19.5C6 20.3284 5.32843 21 4.5 21ZM11.5 21C10.6716 21 10 20.3284 10 19.5V14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5V19.5C13 20.3284 12.3284 21 11.5 21ZM18.5 21C17.6716 21 17 20.3284 17 19.5V16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5V19.5C20 20.3284 19.3284 21 18.5 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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