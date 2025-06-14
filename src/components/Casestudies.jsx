"use client";
import { Lato, Prompt } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { getData } from "@/firebase/firestoreService";
import { useEffect, useState } from "react";

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
    const [value, setValue] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getData("casestudies");
            setValue(data);
            console.log(data)
        }
        fetchData();
    }, []);

    const motionButton = (children) => {
        return (
            <motion.button whileTap={{ scale: 0.95 }} className="bg-white px-[30px] text-black py-[8px] rounded-[7px] cursor-pointer w-fit mt-[5px] font-semibold">{children}</motion.button>
        );
    };

    return (
        <>
            <div id="casestudies" className={`${lato.className} bg-grid-inch h-full text-white`}>
                <div className="mx-[clamp(1.5rem,7vw,11rem)] py-[40px]">
                    <p className={`${prompt.className} text-[clamp(1rem,2vw,3rem)]`}>CASE STUDIES</p>
                    <p className="text-[#939393] text-[clamp(1.25rem,3vw,3.5rem)]">THE <span className="text-white">SUCCESS</span> STORIES</p>
                </div>
                <div className="mx-[clamp(1.5rem,8vw,11rem)] flex flex-wrap">
                    {
                        Array.isArray(value) &&
                        value.map((val, index) => {
                            if (index == 0) {
                                return (
                                    <div key={index} className="grid sm:grid-cols-2 gap-[3%] mb-[50px]">
                                        <Image src={val?.image} alt="/reload" height={400} width={350} quality={100} className="rounded-[7px] overflow-hidden h-full w-full object-cover" />
                                        <div className="flex flex-col gap-[16px]">
                                            <p className="text-[clamp(1rem,1.8vw,3rem)]">{val?.title}</p>
                                            <p className="text-[#939393] text-[clamp(0.8rem,1.25vw,2.5rem)]">{val?.description}</p>
                                            <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit font-semibold">{val?.improvement_1}</p>
                                            <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">{val?.improvement_2}</p>
                                            {motionButton("Read more")}
                                        </div>
                                    </div>
                                )
                            }
                            else if (index < 3) {
                                return (
                                    <div key={index} className="w-[50%]">
                                        <Image src={val?.image} alt="/reload" height={350} width={300} quality={100} className="rounded-[7px] overflow-hidden h-[clamp(15rem,25vw,20rem)] w-[90%] object-cover" />
                                        <div className="flex flex-col gap-[16px] w-[90%]">
                                            <p className="text-[clamp(1rem,1.5vw,3rem)]">{val?.title}</p>
                                            <p className="text-[#939393] text-[clamp(0.8rem,1.15vw,2.5rem)]">{val?.description}</p>
                                            <p className="px-[18px] py-[7px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">{val?.improvement_1}</p>
                                            {motionButton("Read more")}
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )
                    }
                </div>

                <div className="flex items-center justify-center py-[60px] bg-gradient-to-t from-black via-transparent to-transparent">
                    {motionButton("Explore more")}
                </div>
            </div>
        </>
    );
};