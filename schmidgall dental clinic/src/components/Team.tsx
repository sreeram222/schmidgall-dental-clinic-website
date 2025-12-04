import { motion } from 'framer-motion';

const Team = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                            <img
                                src="/images/team-meet.jpg"
                                alt="Dr. Schmidgall"
                                className="rounded-[2rem] shadow-2xl w-full object-cover h-[600px] transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl hidden md:block border border-gray-50"
                            >
                                <p className="text-6xl font-serif font-bold text-accent mb-2">15+</p>
                                <p className="text-primary font-bold text-lg tracking-wide uppercase">Years Experience</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Meet Your <br /><span className="text-accent">Dental Team</span></h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Our dental team will ensure that your visit is always relaxed and calm, putting patient safety and satisfaction above all else. When you visit our practice, you will be met by our friendly and courteous team.
                        </p>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            We are proud to offer patient-centred care in a relaxed and supportive setting. At every stage in the treatment journey, we will make sure you are informed about your options and empowered to make the right decisions for your needs.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div className="border-l-4 border-accent pl-8">
                                <h4 className="font-bold text-primary text-2xl mb-2 font-palatino">Dr Schmidgall</h4>
                                <p className="text-accent font-bold tracking-wide uppercase text-sm">Principal Dentist</p>
                            </div>
                            <div className="border-l-4 border-accent pl-8">
                                <h4 className="font-bold text-primary text-2xl mb-2 font-palatino">Dr. Sarah</h4>
                                <p className="text-accent font-bold tracking-wide uppercase text-sm">Orthodontist</p>
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-primary-light text-white px-12 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl font-bold tracking-wide uppercase text-sm">
                            Read More About Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
