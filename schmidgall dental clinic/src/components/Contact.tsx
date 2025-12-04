import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        privacyPolicy: false,
        marketing: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
        alert('Thank you for your message. We will contact you shortly.');
    };

    return (
        <section id="consultation" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                >
                    <div className="grid md:grid-cols-5">
                        <div className="md:col-span-2 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">Book Your Free Consultation</h3>
                                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                                    Take the first step towards your perfect smile. Fill out the form and our team will get back to you to schedule your appointment.
                                </p>
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div className="w-16 h-1 bg-accent mb-6" />
                                <p className="text-sm text-white/60">
                                    By submitting this form, you agree to our privacy policy and terms of service.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3 p-12 bg-gray-50/50">
                            <form onSubmit={handleSubmit} className="space-y-6">


                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="privacyPolicy"
                                            checked={formData.privacyPolicy}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 text-accent rounded border-gray-300 focus:ring-accent cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">I accept the Privacy Policy</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="marketing"
                                            checked={formData.marketing}
                                            onChange={handleChange}
                                            className="w-5 h-5 text-accent rounded border-gray-300 focus:ring-accent cursor-pointer"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">I would like to receive marketing updates</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-accent hover:bg-accent-light text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
