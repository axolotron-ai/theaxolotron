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
                        <p className={`${oswald.className} text-[clamp(1.5rem,2.5vw,3rem)] font-semibold text-white`}>AI UPSKILLING (2 HOURS)</p>
                        <p className="text-[clamp(1.1rem,1.5vw,2rem)] text-white pb-[50px]">A 3-hour, high-impact, hands-on workshop thatshows employees and teams how to use AI tools,prompts, and automation to 10x theirproductivity, creativity, and efficiency — nocoding or prior AI experience needed.</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/upskilling.jpg" alt="/reload" height={350} width={350} quality={100} className="h-[350px] w-[350px] object-cover rounded-[7px]" />
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <div className="grid grid-cols-2">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">What We Cover</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>The real meaning of AI (no jargon, just clarity)</p>
                            <p>How AI already impacts every department</p>
                            <p>Prompt Engineering mastery — talk to AI like a pro</p>
                            <p>Live demos of ChatGPT, Fireflies, Perplexity, SheetGPT, etc.</p>
                            <p>AI in your workflow: writing, planning, analysis, automation</p>
                            <p>The future of work — and how to stay ahead of it</p>
                            <p>Tools to turn teams into AI-powered performers</p>
                            <p>How to build and automate your own AI workflows (Zapier intro)</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 text-white">
                        <p className="outline-1 outline-white/50 p-[10px] text-[20px] font-semibold h-full flex items-center">Outcomes</p>
                        <div className="outline-1 outline-white/50 p-[10px] flex flex-col gap-[14px] text-[18px] text-white">
                            <p>Teams know how to write effective prompts</p>
                            <p>Use 10+ powerful AI tools across departments</p>
                            <p>Automate parts of their workflow instantly</p>
                            <p>Gain clarity on AI's impact on their role</p>
                            <p>Leave with a toolkit PDF, cheat sheet & certificate</p>
                            <p>Walk away confident and future-ready</p>
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
