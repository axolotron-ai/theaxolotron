"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Oswald, Noto_Sans_Myanmar } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const oswa = Oswald({ subsets: ["latin"] });
const sans = Noto_Sans_Myanmar({ subsets: ["myanmar"], weight: "300" });

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div id="home" className="bg-[#151515]">
            <div className="relative w-full h-screen overflow-hidden pt-[130px] bg-grid-inch-white rounded-b-[70px]">
                <p className="text-[clamp(3rem,4vw,5rem)] font-bold flex flex-col items-center justify-center">Discover How AI Can Automate Tasks and <span className="mt-[-20px]"> Supercharge Your Productivity</span></p>
                <div className="grid grid-cols-3 px-[10%] mt-[80px]">
                    <div className="flex flex-col gap-[25px]">
                        <p className="font-semibold text-[21px]">Lorem ipsum vestibulum tortor eget tortor id adipiscing donec commodo aliquam nunc ac fermentum neque eu pellentesque quis tristique erat augue</p>
                        <p className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px]">Explore</p>
                    </div>
                    <Image src="/academy_man.png" alt="/reload" height={400} width={350} quality={100} className="ml-[100px]" />
                </div>
            </div>
        </div>
    );
};
