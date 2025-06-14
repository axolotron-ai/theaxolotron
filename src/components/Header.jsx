"use client";
import { MuseoModerno } from "next/font/google";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const museo = MuseoModerno({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-between p-[20px] bg-black/30 w-[85%] mx-auto fixed inset-0 z-50 h-[55px] md:h-[60px] rounded-full top-[35px] backdrop-blur-3xl">
            <a href="/"><Image src="/axolotron-logo.png" alt="axolotron-logo" height={50} width={50} quality={100} className="md:h-[16px] md:w-[150px] h-[12px] w-[100px]" /></a>
            <div className="md:block hidden">
                <div className={`${museo.className} flex text-white gap-[15px] md:gap-[40px] items-center text-[18px]`}>
                    <p onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Home</p>
                    <p className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Academics</p>
                    <p onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Products</p>
                    <p onClick={() => document.getElementById("casestudies").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Case Studies</p>
                    <motion.button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} whileTap={{ scale: 0.97 }} className="bg-white text-black rounded-full px-[12px] py-[7px] cursor-pointer shadow-inner">Free Consultation</motion.button>
                </div>
            </div>
            <div className="md:hidden">
                <Menu size={32} className="text-white" />
            </div>
        </div>
    )
}
