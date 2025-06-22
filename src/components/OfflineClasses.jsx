"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OfflineClasses() {

    const [link, setLink] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchData() {
                const data = await getData("formlink");
                if (data?.[0]?.formlink) {
                    setLink(data[0].formlink);
                }
            }
            fetchData();
        }, 10000);
    }, []);

    return (
        <>
            <div className="bg-black px-[8%] h-full py-[50px]">
                <p className="text-white font-semibold text-[clamp(2.25rem,2.75vw,3rem)]">Offline Classes</p>
                <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center justify-between">
                    <div className="w-full h-full flex flex-col items-center justify-evenly gap-[20px]">
                        <p className="text-white/60 text-[clamp(1.25rem,1.5vw,1.75rem)]">Interactive in-person learning with expert mentors and hands-on training sessions.</p>
                        <a href={link} target="_blank"><motion.button whileTap={{ scale: 0.95 }} className="px-[20px] py-[8px] bg-white text-black text-[18px] rounded-[7px] cursor-pointer">Register Now</motion.button></a>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/offline.avif" alt="/reload" height={350} width={350} className="h-[300px] w-[400px] object-cover rounded-[10px]" />
                    </div>
                </div>
            </div>
        </>
    );
};
