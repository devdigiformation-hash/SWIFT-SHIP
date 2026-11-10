import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Package, Truck, Building2, MapPin, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      subItems: [
        {
          name: 'Parcel Collection',
          path: '/services/parcel-collection',
          desc: 'Doorstep pickup from UK residences and business premises.',
          icon: Package,
        },
        {
          name: 'UK Parcel Delivery',
          path: '/services/uk-parcel-delivery',
          desc: 'Next-day & scheduled domestic transit across Great Britain.',
          icon: Truck,
        },
        {
          name: 'Business Courier Solutions',
          path: '/services/business-courier-solutions',
          desc: 'High-volume recurring distribution and dedicated linehaul.',
          icon: Building2,
        },
      ],
    },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Track', path: '/track' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-swift-midnight/80 backdrop-blur-xl border-b border-white/10 shadow-glass py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo_transparent.png"
            alt="SwiftShip UK"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-swift-accent transition-colors">
              SwiftShip
            </span>
            <span className="text-[10px] font-mono tracking-widest text-swift-steel uppercase">
              British Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                      location.pathname.startsWith('/services')
                        ? 'text-swift-accent bg-white/5'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Glass Mega Dropdown */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50">
                      <div className="glass-card rounded-2xl p-3 shadow-glass border border-white/10 space-y-1">
                        {link.subItems?.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="p-2 rounded-lg bg-swift-blue/15 text-swift-accent group-hover/item:bg-swift-blue group-hover/item:text-white transition-colors">
                                <Icon size={16} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover/item:text-swift-accent transition-colors">
                                  {sub.name}
                                </div>
                                <div className="text-xs text-slate-400 leading-snug">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-swift-accent bg-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/track"
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Track Demo Parcel"
          >
            <Search size={16} />
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-swift-blue hover:bg-blue-600 text-white text-sm font-medium transition-all shadow-glow-blue hover:shadow-lg active:scale-95"
          >
            Book Collection
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-swift-midnight/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-swift-accent bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 space-y-1 mt-1 border-l border-white/10 ml-4">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-1.5 text-sm text-slate-400 hover:text-swift-accent"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/track"
              className="w-full py-3 rounded-xl glass-panel text-center text-sm font-medium text-slate-200"
            >
              Track Parcel (SS-UK-4587-21)
            </Link>
            <Link
              to="/contact"
              className="w-full py-3 rounded-xl bg-swift-blue text-center text-sm font-medium text-white shadow-glow-blue"
            >
              Book Collection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
