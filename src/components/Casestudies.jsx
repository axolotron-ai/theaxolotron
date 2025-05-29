"use client";
import { Lato, Prompt } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

const prompt = Prompt({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Casestudies() {
    return (
        <>
            <div className={`${lato.className} bg-grid-inch h-full text-white`}>
                <div className="mx-[clamp(1.5rem,7vw,11rem)] py-[40px]">
                    <p className={`${prompt.className} text-[clamp(1rem,2vw,3rem)]`}>CASE STUDIES</p>
                    <p className="text-[#939393] text-[clamp(1.25rem,3vw,3.5rem)]">THE <span className="text-white">SUCCESS</span> STORIES</p>
                </div>
                <div className="mx-[clamp(1.5rem,8vw,11rem)] flex flex-col gap-[50px]">
                    <div className="grid sm:grid-cols-2 gap-[3%]">
                        <Image src="/casestudies_01.jpg" alt="/reload" height={400} width={350} quality={100} className="rounded-[7px] overflow-hidden h-full w-full object-cover" />
                        <div className="flex flex-col gap-[16px]">
                            <p className="text-[clamp(1rem,1.8vw,3rem)]">Urban environments face thousands of road accidents annually. The major issues:</p>
                            <p className="text-[#939393] text-[clamp(0.8rem,1.25vw,2.5rem)]">In today's fast-paced world, rapid response to road accidents can mean the difference between life and death. Yet, many cities still rely on outdated systems that delay emergency services.</p>
                            <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit font-semibold">30% reduced time consumption</p>
                            <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">20% increased revenue</p>
                            <button className="bg-white px-[30px] text-black py-[8px] rounded-[7px] cursor-pointer w-fit mt-[5px] font-semibold">Read more</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap space-x-[55px] justify-evenly">
                        <div className="grid grid-rows-2 gap-[2.5%] h-[600px] w-[80%]">
                            <Image src="/casestudies_02.jpg" alt="/reload" height={400} width={350} quality={100} className="rounded-[7px] overflow-hidden h-[300px] w-[80%] object-cover" />
                            <div className="flex flex-col gap-[10px] w-[550px]">
                                <p className="text-[clamp(1rem,1.8vw,3rem)]">Case studies title a little big to cover the context of the paper</p>
                                <p className="text-[#939393] text-[clamp(0.8rem,1.25vw,2.5rem)]">In today's fast-paced world, rapid response to road accidents can mean the difference between life and death. Yet, many cities still rely on outdated systems that delay emergency services.</p>
                                <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">20% increased revenue</p>
                                <button className="bg-white px-[30px] text-black py-[8px] rounded-[7px] cursor-pointer w-fit mt-[5px] font-semibold">Read more</button>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-[2.5%] h-[600px] w-[80%]">
                            <Image src="/casestudies_03.jpg" alt="/reload" height={400} width={350} quality={100} className="rounded-[7px] overflow-hidden h-[300px] w-[80%] object-cover" />
                            <div className="flex flex-col gap-[10px] w-[550px]">
                                <p className="text-[clamp(1rem,1.8vw,3rem)]">Case studies title a little big to cover the context of the paper</p>
                                <p className="text-[#939393] text-[clamp(0.8rem,1.25vw,2.5rem)]">In today's fast-paced world, rapid response to road accidents can mean the difference between life and death. Yet, many cities still rely on outdated systems that delay emergency services.</p>
                                <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">20% increased revenue</p>
                                <button className="bg-white px-[30px] text-black py-[8px] rounded-[7px] cursor-pointer w-fit mt-[5px] font-semibold">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center py-[60px] bg-gradient-to-t from-black via-transparent to-transparent">
                    <motion.button className="bg-white text-black font-semibold px-[20px] py-[12px] flex gap-[10px] cursor-pointer rounded-full text-[17px]">Explore More <ArrowDown /> </motion.button>
                </div>
            </div>
        </>
    );
};