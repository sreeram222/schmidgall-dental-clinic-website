import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', url: '#' },
        { name: 'Treatments', url: '#treatments' },
        { name: 'About Us', url: '#about' },
        { name: 'Testimonials', url: '#testimonials' },
        { name: 'Contact', url: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative">
                <a href="#" className={`flex flex-col items-center group ${scrolled ? 'text-primary' : 'text-white'}`}>
                    {/* Star Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mb-1 text-accent"
                    >
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                    <span className="text-2xl font-bold tracking-[0.15em] uppercase leading-none">Schmidgall</span>
                    <span className="text-[0.65rem] font-medium tracking-[0.35em] uppercase opacity-90 mt-1">Dental Clinic</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            className={`text-sm font-bold tracking-widest uppercase hover:text-accent transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="tel:02072521628"
                        className="hidden md:flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Phone size={18} />
                        <span className="hidden sm:inline">020 7252 1628</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    className="text-lg font-medium text-gray-900 hover:text-accent"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="tel:02072521628"
                                className="flex items-center gap-2 text-primary font-bold mt-2"
                            >
                                <Phone size={18} />
                                020 7252 1628
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
