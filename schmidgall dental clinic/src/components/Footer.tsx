import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-serif font-bold mb-6 text-white">Schmidgall Dental</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Providing exceptional dental care in a relaxed and professional environment. Your smile is our priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110"><Facebook size={20} /></a>
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110"><Instagram size={20} /></a>
                            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-110"><Twitter size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" /> Home</a></li>
                            <li><a href="#treatments" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" /> Treatments</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" /> About Us</a></li>
                            <li><a href="#testimonials" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" /> Testimonials</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 hover:opacity-100 transition-opacity" /> Contact</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex items-start gap-4 group">
                                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <span>11 Blondin Way, off Downtown Road<br />London, SE16 6AE</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:02072521628" className="hover:text-white transition-colors">020 7252 1628</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="bg-white/5 p-3 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:info@schmidgalldental.com" className="hover:text-white transition-colors">info@schmidgalldental.com</a>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h4 className="text-lg font-bold mb-8 text-white">Opening Hours</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon - Thu</span> <span>08:30 - 18:00</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Friday</span> <span>08:30 - 17:30</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-accent font-medium">Closed</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Sunday</span> <span className="text-accent font-medium">Closed</span></li>
                        </ul>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 Schmidgall Dental Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
