"use client";
import Clients from "@/components/academy/Clients";
import ClientsB from "@/components/academy/ClientsB";
import MotionButton from "@/components/MotionButton";
import { oswald } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
/*

    const value = [{ src: "/talks.jpg", name: "AI Talks", link: "/academy/talks" },
    { src: "/workshop.jpg", name: "AI Workshop" },
    { src: "/bootcamp.jpg", name: "AI Bootcamp" },
    { src: "/upskilling.jpg", name: "Corporate Upskilling" },
    ];
*/
export default function page() {
    return (
        <>
            <div className="bg-[#151515] min-h-screen px-[calc(10%)] py-[calc(5%)]">
                <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mb-[40px]">
                    <div>
                        <p className={`${oswald.className} text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white`}>THE AI TALK</p>
                        <p className="text-[clamp(1.1rem,1.5vw,2rem)] text-white pb-[50px]">A fast-paced, engaging session that introducesAI in a way your audience will remember — fun,practical, and personalized to their field(engineering, marketing, healthcare, business,etc.).</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/talks.jpg" alt="/reload" height={350} width={350} quality={100} className="h-[350px] w-[350px] object-cover rounded-[7px]" />
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">What's Covered</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>What AI is (explained simply, with humor)</p>
                            <p>How AI is already impacting your life/career</p>
                            <p>Prompt Engineering basics — with live demos</p>
                            <p>Real AI tools (domain-relevant)</p>
                            <p>How AI is changing jobs in your industry</p>
                            <p>Human vs. Machine: what stays human</p>
                            <p>What to do next (practical mindset & steps)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-white">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">Outcomes</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p> AI awareness that sticks</p>
                            <p>Hands-on experience with real tools</p>
                            <p>Prompting confidence</p>
                            <p>Career clarity in an AI-driven world</p>
                            <p>A certificate + PDF toolkit to take home</p>
                            <p>Motivation to start using AI today</p>
                        </div>
                    </div>
                </div>

                <div className="py-[calc(4%)] flex items-center">
                    <motion.button whileTap={{ scale: 0.95 }} className="px-[30px] py-[15px] bg-white text-black font-semibold rounded-[7px] cursor-pointer">Enquiry</motion.button>
                </div>
            </div>
            <ClientsB />
        </>
    )
};
