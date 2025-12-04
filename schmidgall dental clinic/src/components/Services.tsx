import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'General Dentistry',
            description: 'Comprehensive care to maintain your oral health, including check-ups, hygiene, and restorative treatments.',
            image: '/images/treatment.jpg'
        },
        {
            title: 'Cosmetic Dentistry',
            description: 'Transform your smile with teeth whitening, veneers, composite bonding, and smile makeovers.',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'Dental Implants',
            description: 'Permanent solutions for missing teeth, restoring both function and aesthetics to your smile.',
            image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section id="treatments" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">World-Class Treatments</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        We use the latest technology and techniques to provide you with the best possible care, ensuring a comfortable and effective treatment journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-serif font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-200 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {service.description}
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-accent font-bold tracking-wide uppercase text-sm hover:text-white transition-colors">
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
