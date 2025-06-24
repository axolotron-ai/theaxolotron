"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getData } from "@/firebase/firestoreService";
import { lato } from "@/utils/fonts";
import truncateByWords from "@/utils/truncateByWords";
import { MoveRight } from "lucide-react";

export default function Products() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const value = [{ name: "Healthcare", srcVideo: "/healthcare_vdo.mp4", srcPic: "/healthcare.jpg", link: "/products/healthcare" },
    { name: "Ecommerce", srcVideo: "/ecommerce_new_vdo.mp4", srcPic: "/ecommerce.jpg", link: "/products/ecommerce" },
    { name: "Corporate", srcVideo: "/corporate_vdo.mp4", srcPic: "/corporate.jpg", link: "/products/corporate" }];

    useEffect(() => {
        async function fetchData() {
            const data = await getData("products");
            //setValue(data);
        }
        fetchData();
    }, []);

    const motionButton = (children) => {
        return (
            <motion.button whileTap={{ scale: 0.95 }} className="bg-white font-semibold px-[30px] py-[10px] flex items-center justify-center my-[60px] cursor-pointer text-[18px] rounded-[7px]">
                {children}
            </motion.button>
        );
    };

    return (
        <div id="products" className="space-y-4 bg-black">
            <div className={`${lato.className} flex flex-col gap-[6px] pl-[10%] justify-start py-[50px]`}>
                <p className="text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white">Our products</p>
                <p className="text-[#939393] text-[clamp(1.1rem,1.5vw,2rem)]">Redefining industries with the power of AI.</p>
            </div>

            <div className="hidden sm:block w-full">
                <div className="flex flex-row flex-wrap justify-evenly gap-10 px-4 min-h-screen">
                    {Array.isArray(value) && value.map((val, index) => {
                        const isHovered = hoveredIndex === index;

                        if (index < 3) {
                            return (
                                <div
                                    key={index}
                                    className="relative h-[500px] w-[280px] outline-2 outline-[#939393]/40 rounded-[15px] overflow-hidden cursor-pointer"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <motion.video
                                        src={val?.srcVideo}
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
                                            src={val?.srcPic}
                                            alt={val?.name}
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
                                        <p className="text-white text-[32px] font-semibold">{val?.name}</p>

                                        <a href={val?.link}>
                                            <motion.button
                                                whileTap={{ scale: 0.90 }}
                                                initial={false}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="mt-3 bg-white text-black px-[70px] py-2 rounded-lg shadow-md font-semibold cursor-pointer"
                                            >
                                                Explore
                                            </motion.button>
                                        </a>
                                    </motion.div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="block sm:hidden">
                <div className="flex flex-wrap justify-evenly gap-10 px-4 w-full pb-[50px]">
                    {Array.isArray(value) && value.map((val, index) => {
                        if (index < 3) {
                            return (
                                <div
                                    key={index}
                                    className="relative h-[300px] w-[280px] outline-2 outline-[#939393]/40 rounded-[15px] overflow-hidden cursor-pointer"
                                >
                                    <motion.div
                                        className="absolute h-full w-full"
                                    >
                                        <Image
                                            src={val?.srcPic}
                                            alt={val?.name}
                                            fill
                                            quality={100}
                                            sizes="280px"
                                            className="object-cover h-auto w-auto"
                                        />
                                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent">
                                            <a href={val?.link}><p className="text-white flex items-center justify-between p-[10px] font-semibold text-[20px]">AI for {truncateByWords(val?.name, 1)} <MoveRight className="text-black bg-white rounded-full h-[40px] w-[40px] p-[6px]" /></p></a>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
