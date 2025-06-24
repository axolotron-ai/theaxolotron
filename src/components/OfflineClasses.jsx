"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getData } from "@/firebase/firestoreService";
import { Drawer } from "@mui/material";
import { CircleUser, ShieldCheck, Timer, Unlink2, X } from "lucide-react";

export default function OfflineClasses() {

    const [link, setLink] = useState("");
    const [open, toggleDrawer] = useState(false);

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
            <div id="elite" className="bg-black px-[8%] h-full py-[50px]">
                <p className="text-white font-semibold text-[clamp(2.25rem,2.75vw,3rem)]">Axolotron's Elite AI course</p>
                <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center justify-between">
                    <div className="w-full h-full flex flex-col items-center justify-evenly gap-[20px]">
                        <p className="text-white/60 text-[clamp(1.25rem,1.5vw,1.75rem)]">A rigorously structured, mentor-led offline program crafted to develop high-caliber AI talent — through in-depth learning, real-world projects, and industry-grade training.</p>
                        <div className="flex flex-row justify-evenly w-full">
                            <motion.button onClick={() => toggleDrawer(true)} className="px-[20px] py-[8px] bg-white text-black text-[18px] rounded-[7px] cursor-pointer">Learn More</motion.button>
                            <a href={link} target="_blank"><motion.button whileTap={{ scale: 0.95 }} className="px-[20px] py-[8px] bg-white text-black text-[18px] rounded-[7px] cursor-pointer">Register Now</motion.button></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/offline.avif" alt="/reload" height={350} width={350} className="h-[300px] w-[400px] object-cover rounded-[10px]" />
                    </div>
                </div>
            </div>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <div className="bg-black/85 h-[700px] sm:h-full w-full py-[20px] px-[40px] flex flex-col gap-[20px]">
                    <div className="flex items-center justify-end w-full">
                        <X className="h-[30px] w-[30px] text-white cursor-pointer" onClick={() => toggleDrawer(false)} />
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-white font-semibold text-[18px] flex items-center gap-[10px]"><Timer className="h-[35px] w-[35px] text-white" /> Duration</p>
                        <p className="bg-accent text-black/90 p-[8px] rounded-[7px]">6 Months</p>
                    </div>
                    <div className="w-full h-[1px] bg-white/50" />
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-white font-semibold text-[18px] flex items-center gap-[10px]"><Unlink2 className="h-[35px] w-[35px] text-white" /> Mode</p>
                        <p className="bg-accent text-black/90 p-[8px] rounded-[7px]">Offline (In-Person Training)</p>
                    </div>
                    <div className="w-full h-[0.5px] bg-white/50" />
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-white font-semibold text-[18px] flex items-center gap-[10px]"><CircleUser className="h-[35px] w-[35px] text-white" /> Batch Size</p>
                        <p className="bg-accent text-black/90 p-[8px] rounded-[7px]">30 Students Only</p>
                    </div>
                    <div className="w-full h-[0.5px] bg-white/50" />
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-white font-semibold text-[18px] flex items-center gap-[10px]"><ShieldCheck className="h-[35px] w-[35px] text-white" /> Certification</p>
                        <p className="bg-accent text-black/90 p-[8px] rounded-[7px]">Axolotron Academy Certified AI & ML Professional</p>
                    </div>
                    <div className="w-full h-[0.5px] bg-white/50" />
                    <div className="flex flex-col items-center justify-center">
                        <a href={link} target="_blank"><motion.button whileTap={{ scale: 0.95 }} className="px-[20px] py-[8px] bg-white text-black text-[18px] rounded-[7px] cursor-pointer">Register Now</motion.button></a>
                    </div>
                </div>
            </Drawer>
        </>
    );
};
