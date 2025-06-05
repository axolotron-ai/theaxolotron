"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const value = [
        { srcVideo: "/healthcare.mp4", srcPic: "/healthcare_pic.jpg", name: "Healthcare" },
        { srcVideo: "/ecommerce.mp4", srcPic: "/ecommerce_pic.jpg", name: "Ecommerce" },
        { srcVideo: "/logistics.mp4", srcPic: "/logistics_pic.jpg", name: "Logistics" },
    ];

    return (
        <div className="flex flex-col items-center justify-center space-y-4 bg-black">
            <div className={`${lato.className} text-center py-[50px]`}>
                <p className="text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white">Our products</p>
                <p className="text-[#939393] text-[clamp(1.1rem,1.5vw,2rem)]">Redefining industries with the power of AI.</p>
            </div>

            <div className="flex flex-wrap justify-evenly gap-10 px-4 w-full">
                {value.map((val, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            className="relative h-[500px] w-[280px] outline-2 outline-[#939393] rounded-[15px] overflow-hidden cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.video
                                src={val.srcVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute h-full w-full object-cover"
                                initial={false}
                                animate={{ opacity: isHovered ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />

                            <motion.div
                                className="absolute h-full w-full"
                                initial={false}
                                animate={{ opacity: isHovered ? 0 : 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    priority
                                    src={val.srcPic}
                                    alt={val.name}
                                    fill
                                    quality={100}
                                    sizes="280px"
                                    className="object-cover h-auto w-auto"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                            <motion.div
                                className="absolute bottom-[-20px] w-full flex flex-col items-center z-20"
                                initial={false}
                                animate={{ y: isHovered ? -40 : 0 }}
                                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            >
                                <p className="text-white text-[32px] font-semibold">{val.name}</p>

                                <motion.button
                                    whileTap={{ scale: 0.90 }}
                                    initial={false}
                                    animate={{ opacity: isHovered ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-3 bg-white text-black px-[70px] py-2 rounded-lg shadow-md font-semibold cursor-pointer"
                                >
                                    Explore
                                </motion.button>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            <motion.button whileTap={{ scale: 0.95 }} className="bg-white font-semibold px-[30px] py-[15px] flex items-center justify-center my-[60px] cursor-pointer text-[18px] rounded-[7px]">Explore All</motion.button>
        </div>
    );
}
