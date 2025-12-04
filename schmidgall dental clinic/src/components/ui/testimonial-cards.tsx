"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
    id: number;
    testimonial: string;
    author: string;
    date: string;
    initial: string;
}

interface TestimonialCardProps extends Testimonial {
    handleShuffle: () => void;
    position: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, date, initial }: TestimonialCardProps) {
    const dragRef = React.useRef(0);
    const isFront = position === "front";

    return (
        <motion.div
            style={{
                zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
            }}
            animate={{
                rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
                x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
                scale: position === "front" ? 1 : position === "middle" ? 0.95 : 0.9
            }}
            drag={true}
            dragElastic={0.35}
            dragListener={isFront}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onDragStart={(e: any) => {
                dragRef.current = e.clientX;
            }}
            onDragEnd={(e: any) => {
                if (dragRef.current - e.clientX > 150) {
                    handleShuffle();
                }
                dragRef.current = 0;
            }}
            transition={{ duration: 0.35 }}
            className={`absolute left-0 top-0 grid h-[400px] w-[350px] select-none content-between rounded-2xl border border-white/10 bg-[#1e293b] p-8 shadow-2xl ${isFront ? "cursor-grab active:cursor-grabbing" : ""
                }`}
        >
            <div>
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic">"{testimonial}"</p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
                    {initial}
                </div>
                <div>
                    <h4 className="text-white font-bold">{author}</h4>
                    <span className="text-gray-400 text-sm">{date}</span>
                </div>
            </div>
        </motion.div>
    );
};
