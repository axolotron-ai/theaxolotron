"use client";
import { MuseoModerno } from "next/font/google";
import { Oswald } from "next/font/google";
import Image from "next/image";
import { AlignJustify, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";

const museo = MuseoModerno({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [drawerAction, setDrawerAction] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-between p-[20px] bg-black/30 w-[85%] mx-auto fixed inset-0 z-50 h-[55px] md:h-[60px] rounded-full top-[35px] backdrop-blur-3xl">
            <a href="/" className="w-full flex items-center justify-start"><Image src="/Axolotron.png" alt="axolotron-logo" height={50} width={50} quality={100} className="h-[16px] w-[150px]" /></a>
            <div className="lg:block hidden">
                <div className={`${museo.className} flex text-white gap-[15px] md:gap-[40px] items-center text-[18px]`}>
                    <p onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Home</p>
                    <a href="/academy" className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Academy</a>
                    <p onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Products</p>
                    <p onClick={() => document.getElementById("casestudies").scrollIntoView({ behavior: "smooth" })} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200 min-w-[120px]">Case Studies</p>
                    <motion.button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} whileTap={{ scale: 0.97 }} className="bg-white text-black rounded-full px-[12px] py-[7px] cursor-pointer shadow-inner min-w-[200px]">Free Consultation</motion.button>
                </div>
            </div>
            <div className="block sm:hidden">
                <AlignJustify className="text-white" onClick={() => setDrawerAction(true)} />
                <Drawer open={drawerAction} onClose={() => setDrawerAction(false)}>
                    <>
                        <p className="p-[20px] text-bold text-white text-[22px] bg-[#151515]">Quick Navigations</p>
                        <div className={`${museo.className} flex text-white gap-[20px] flex-col text-[18px] bg-[#151515] h-full p-[20px]`}>
                            <p onClick={() => { document.getElementById("home").scrollIntoView({ behavior: "smooth" }); setDrawerAction(false); }} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Home</p>
                            <a href="/academy" className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Academy</a>
                            <p onClick={() => { document.getElementById("products").scrollIntoView({ behavior: "smooth" }); setDrawerAction(false); }} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200">Products</p>
                            <p onClick={() => { document.getElementById("casestudies").scrollIntoView({ behavior: "smooth" }); setDrawerAction(false); }} className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200 min-w-[120px]">Case Studies</p>
                            <motion.button onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); setDrawerAction(false); }} whileTap={{ scale: 0.97 }} className="bg-white text-black rounded-full px-[12px] py-[7px] cursor-pointer shadow-inner min-w-[200px]">Free Consultation</motion.button>
                        </div>
                    </>
                </Drawer>
            </div>
        </div>
    )
};
