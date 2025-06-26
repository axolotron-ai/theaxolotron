"use client";
import MotionButton from "@/components/MotionButton";
import { motion } from "framer-motion";

export default function page() {
    return (
        <>
            <div className="bg-[#DDDDDD] min-h-screen px-[calc(10%)] py-[calc(5%)]">
                <p className="text-[clamp(1.5rem,2.5vw,3rem)] font-semibold">THE AI TALK</p>
                <p className="teext-[clamp(1.25rem,2vw,2.5rem)] text-black/60 pb-[50px]">A fast-paced, engaging session that introducesAI in a way your audience will remember — fun,practical, and personalized to their field(engineering, marketing, healthcare, business,etc.).</p>

                <div className="flex flex-col ">
                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-black/50 p-[10px] text-[20px] font-semibold h-full flex items-center">What's Covered</p>
                        <div className="outline-1 outline-black/50 p-[10px] flex flex-col gap-[14px] text-[18px]">
                            <p>What AI is (explained simply, with humor)</p>
                            <p>How AI is already impacting your life/career</p>
                            <p>Prompt Engineering basics — with live demos</p>
                            <p>Real AI tools (domain-relevant)</p>
                            <p>How AI is changing jobs in your industry</p>
                            <p>Human vs. Machine: what stays human</p>
                            <p>What to do next (practical mindset & steps)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-black/50 p-[10px] text-[20px] font-semibold h-full flex items-center">Outcomes</p>
                        <div className="outline-1 outline-black/50 p-[10px] flex flex-col gap-[14px] text-[18px]">
                            <p> AI awareness that sticks</p>
                            <p>Hands-on experience with real tools</p>
                            <p>Prompting confidence</p>
                            <p>Career clarity in an AI-driven world</p>
                            <p>A certificate + PDF toolkit to take home</p>
                            <p>Motivation to start using AI today</p>
                        </div>
                    </div>
                </div>

                <div className="py-[calc(4%)] flex items-center justify-center">
                    <motion.button whileTap={{ scale: 0.95 }} className="px-[30px] py-[15px] bg-black text-white font-semibold rounded-[7px] cursor-pointer">Enquiry</motion.button>
                </div>
            </div>
        </>
    )
};
