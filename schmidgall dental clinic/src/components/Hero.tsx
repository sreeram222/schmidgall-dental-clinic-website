import { motion } from 'framer-motion';
import { FlowButton } from "@/components/ui/flow-button";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-start text-left px-6 md:pl-20">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white font-sans font-bold tracking-[0.2em] uppercase mb-4"
                    >
                        TRUSTED CANARY WHARF DENTISTS
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-palatino font-bold text-white mb-6 leading-tight"
                    >
                        Exceptional care <br />
                        for all ages
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-white/90 mb-10 max-w-2xl"
                    >
                        We offer NHS and private dental care to help you achieve a healthy and beautiful smile. Located near Canary Wharf.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-start"
                    >
                        <FlowButton
                            text="BOOK ONLINE"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-64 h-16 bg-white text-gray-900 border-white font-bold tracking-widest uppercase hover:bg-gray-100"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
