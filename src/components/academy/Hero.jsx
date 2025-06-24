"use client";
import { Oswald, Noto_Sans_Myanmar } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import { oswald } from "@/utils/fonts";

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
            <div className="relative w-full h-full sm:min-h-screen overflow-hidden pt-[130px] bg-grid-inch-white rounded-b-[70px]">
                <div className="hidden sm:block">
                    <p className={`${oswald.className} text-[clamp(2.5rem,4vw,5rem)] font-bold w-full flex flex-col items-center justify-center`}>Discover How AI Can Automate Tasks and <span className="mt-[-20px]"> Supercharge Your Productivity</span></p>
                </div>
                <div className="block sm:hidden">
                    <p className="text-[clamp(2.25rem,4vw,5rem)] font-bold w-full flex items-center justify-center text-center leading-tight">Discover How AI Can Automate Tasks and Supercharge Your Productivity</p>
                </div>
                <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 px-[10%] mt-[80px]">
                    <div className="sm:flex sm:flex-col sm:gap-[25px]">
                        <p className="hidden sm:block font-semibold text-[21px]">At Axolotron Academy, we don't just teach AI — we train minds to think with it. Our talks, workshops, and bootcamps are built to prepare students, professionals, and teams for a world where intelligence is infinite, and adaptability is the new advantage. If you're ready to evolve, we'll show you how.</p>
                        <div className="block sm:hidden">
                            <div className="w-full flex items-center justify-center">
                                <p className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px]">Explore</p>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <p onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px]">Explore</p>
                        </div>
                    </div>
                    <Image src="/academy_man.png" alt="/reload" height={400} width={350} quality={100} className="sm:ml-[100px] mt-[-120px] sm:mt-0" />
                </div>
            </div>
        </div>
    );
};
