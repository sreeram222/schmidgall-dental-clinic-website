import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Whitening = () => {
    return (
        <section className="bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full min-h-[400px]"
                >
                    <img
                        src="/images/whitening-room.jpg"
                        alt="Dental Whitening Room"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" /> {/* Subtle overlay */}
                </motion.div>

                {/* Content Section */}
                <div className="flex items-center p-12 lg:p-24 bg-gray-50">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-4 block">
                            Free Whitening
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                            Whitening for life
                        </h2>

                        <ul className="space-y-6 mb-10">
                            {[
                                "Visit Schmidgall Dental for a new patient cleaning & exam",
                                "Take home a complimentary custom whitening kit",
                                "Book a cleaning every 6 months and we'll refill your whitening gel"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <Check className="text-accent shrink-0 mt-1" size={20} />
                                    <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-accent hover:bg-accent-light text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wide">
                            BOOK ONLINE
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Whitening;
