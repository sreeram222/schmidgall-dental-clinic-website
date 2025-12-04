import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Country Day Dental from the first time my family started using them as our dentist we knew they would be our choice. Always cheerful and friendly group. Been attending for about 27yrs. An awesome group of professionals!",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Vincent",
        name: "Vincent Delgado",
        role: "Google Review",
    },
    {
        text: "I didn't want to leave! When's the last time you said that about going to the dentist? And I'm not even kidding. This is the BEST dentist. Amazing facility. State-of-the-art. Exceptional, innovate cleaning. Cocofloss is a game changer.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=David",
        name: "David Martinez",
        role: "Google Review",
    },
    {
        text: "Country Day Dental is absolutely phenomenal! Dr. Schmidgall is a genuinely nice guy with a calm and pleasant demeanor that puts you at ease. He designed the most natural and perfect four front teeth for my mouth that look like what I should have been born with!",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Jaclyn",
        name: "Jaclyn Cordes",
        role: "Google Review",
    },
    {
        text: "Couldn't recommend Dr. Schmidgall and his team enough! I had my front two teeth replaced with veneers due to damage done to them at a young age & the finished product was incredible. The veneers look so natural & compliment the shape of my natural teeth perfectly.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Whitney",
        name: "Whitney Breen",
        role: "Google Review",
    },
    {
        text: "Extraordinary! I'm so thankful I drove 25+ miles and I'll do it again. Hands down the absolute best dental experience I've had. The ENTIRE staff was warm, thorough, professional, caring and knowledgeable about everything!",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Rese",
        name: "Rese Torrence",
        role: "Google Review",
    },
    // Duplicating to fill columns
    {
        text: "The reception team have been nothing but helpful, polite and always positive and kind! I want to also give a shoutout to dr maan who has been super helpful.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Sian",
        name: "Sian Carolan",
        role: "Google Review",
    },
    {
        text: "It was my most enjoyable dental treatments. They are very friendly. It is very relaxing place. My stressed gone with her smile.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Bulent",
        name: "Bulent Erel",
        role: "Google Review",
    },
    {
        text: "This is wonderful experience. I took treatment from Dr vhabna. She is very caring her behaviour so nice. I liked her treatment.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Mousumi",
        name: "Mousumi Das",
        role: "Google Review",
    },
    {
        text: "Professional, clean and very friendly environment. I would highly recommend this dental clinic to anyone looking for quality care.",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=Sarah",
        name: "Sarah Jenkins",
        role: "Google Review",
    }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-[#0f172a] py-24 relative overflow-hidden">
            <div className="container z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
                        Happy Patients
                    </h2>
                    <p className="text-gray-400 text-lg text-center">
                        Don't just take our word for it. Here's what our patients have to say about their experience with us.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
