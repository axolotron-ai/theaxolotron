"use client";
import Clients from "@/components/academy/Clients";
import ClientsB from "@/components/academy/ClientsB";
import Footer from "@/components/Footer";
import MotionButton from "@/components/MotionButton";
import { oswald } from "@/utils/fonts";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
    return (
        <>
            <div className="bg-[#151515] min-h-screen px-[calc(10%)] py-[calc(5%)]">
                <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mb-[40px]">
                    <div>
                        <p className={`${oswald.className} text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white`}>AI WORKSHOP (2.30 HOURS)</p>
                        <p className="text-[clamp(1.1rem,1.5vw,2rem)] text-white pb-[50px]">CoveredA fast-paced, engaging session that introducesAI in a way your audience will remember — fun,practical, and personalized to their field(engineering, marketing, healthcare, business,etc.).</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/workshop.jpg" alt="/reload" height={350} width={350} quality={100} className="h-[350px] w-[350px] object-cover rounded-[7px]" />
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">What's Covered</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>From Hiroshima to AI: The Story of Power</p>
                            <p>What is AI, Really? (Simple, No Jargon)</p>
                            <p>Where AI Is Hiding in Your Daily Life</p>
                            <p>Prompt Engineering 101 (Formula + Strategy)</p>
                            <p>Live Prompt Battle (Audience + AI Interaction)</p>
                            <p>Human Evolution to AGI & ASI</p>
                            <p>Kardashev Scale & Space AI</p>
                            <p>The Death of Traditional Jobs</p>
                            <p>The 10x AI Mindset Shift</p>
                            <p>Mic Drop Close: Create or Be Replaced</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-white">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">Outcomes</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>A powerful mindset shift toward AI</p>
                            <p>Understanding of how prompt engineering works</p>
                            <p>Awareness of AI's real impact across industries</p>
                            <p>Inspiration to start using AI for career, income, or automation</p>
                            <p>Free PDF: Prompt Cheat Sheet + Career Tracks</p>
                            <p>Certificate of participation</p>
                        </div>
                    </div>
                </div>

                <div className="py-[calc(4%)] flex items-center justify-end">
                    <motion.button whileTap={{ scale: 0.95 }} className="px-[30px] py-[15px] bg-white text-black font-semibold rounded-[7px] cursor-pointer">Enquiry</motion.button>
                </div>
            </div>
            <ClientsB />
            <Footer />
        </>
    )
};
