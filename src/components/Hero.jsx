"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Oswald, Noto_Sans_Myanmar } from "next/font/google";
import { motion } from "framer-motion";

const oswa = Oswald({ subsets: ["latin"] });
const sans = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: "300" });

export default function Hero() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
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

                {/* Content Over Video */}
                <div className="relative z-10 text-white px-6 bg-gradient-to-r from-black via-black/80 to-transparent h-full w-full flex items-center justify-start pt-[80px]">
                    <div className="flex-row md:mx-[80px]">
                        <div className={`text-[clamp(2rem,3.6vw,3.6rem)] font-normal text-white drop-shadow-lg text-start ${oswa.className}`}>
                            <p>AI ISN'T THE FUTURE - IT IS THE</p>
                            <p className="mt-[clamp(-1rem,8vw,-10rem)]">ENGINE OF YOUR BUSINESS</p>
                        </div>
                        <p className={`mt-4 max-w-2xl text-[clamp(1rem,1.25vw,1.5rem)] drop-shadow-md ${sans.className} text-[#828282]`}>
                            Axolotron empowers enterprises to enhance operational efficiency, reduce expenditures, and consistently exceed customer expectations
                        </p>
                        <motion.button whileTap={{ scale: 0.95 }} className="mt-6 text-black bg-white font-semibold rounded-full shadow-md font-mukta w-[180px] text-[20px] h-[45px] cursor-pointer">Explore</motion.button>
                    </div>
                </div>
            </div>
        </>
    );
};
