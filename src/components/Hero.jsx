"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Oswald, Noto_Sans_Myanmar } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const oswa = Oswald({ subsets: ["latin"] });
const sans = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: "300" });

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <>
            <div id="home" className="relative w-full h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/main-video.mp4" type="video/mp4" />
                    Your browser doesn&apos;t support the video tag.
                </video>

                <div className="relative z-10 text-white px-6 bg-gradient-to-r from-black via-black/80 to-transparent h-full w-full flex items-center justify-start pt-[80px]">
                    <div className="flex-row md:mx-[80px]">
                        <div className={`text-[clamp(2rem,3.6vw,3.6rem)] font-normal text-white drop-shadow-lg text-start ${oswa.className}`}>
                            <p className="leading-tight">AI ISN'T THE FUTURE - IT IS THE {" "} <br className="hidden lg:block" />
                                <span className="mt-[clamp(-1rem,8vw,-10rem)] lg:">ENGINE OF YOUR BUSINESS</span> </p>
                        </div>
                        <p className={`mt-4 max-w-2xl text-[clamp(1rem,1.25vw,1.5rem)] drop-shadow-md ${sans.className} text-[#828282]`}>
                            Axolotron empowers enterprises to enhance operational efficiency, reduce expenditures, and consistently exceed customer expectations
                        </p>
                        <motion.button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} whileTap={{ scale: 0.95 }} className="mt-6 text-black bg-white font-semibold rounded-full shadow-md font-mukta w-[180px] text-[20px] h-[45px] cursor-pointer">Explore</motion.button>
                    </div>
                </div>
            </div>
        </>
    );
};
