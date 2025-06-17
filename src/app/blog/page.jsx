"use client";
import { Lato, Prompt } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { getData } from "@/firebase/firestoreService";
import { useEffect, useState } from "react";
import truncateByWords from "@/utils/truncateByWords";

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

export default function CasestudiesPage() {
    const [value, setValue] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSet, setActiveSet] = useState("");

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
            <div className={`${lato.className} bg-grid-inch min-h-screen text-white`}>
                <div className="mx-[clamp(1.5rem,7vw,11rem)] py-[40px]">
                    <p className={`${prompt.className} text-[clamp(1rem,2vw,3rem)]`}>Recent blog posts</p>
                </div>
                <div className="mx-[clamp(1.5rem,8vw,11rem)] grid grid-cols-3">
                    {
                        Array.isArray(value) &&
                        value.map((val, index) => (
                            <div key={val?.id + index} onClick={() => { setIsOpen(true); setActiveSet(val); }} className="h-full w-[320px] flex flex-col gap-[10px] cursor-pointer hover:outline hover:outline-white/40 p-[10px] rounded-[10px]" >
                                <Image src={val.image} alt="/reload" height={200} width={250} quality={100} className="h-[200px] w-[300px] object-cover rounded-[10px]" />
                                <p className="font-semibold">{truncateByWords(val.title, 8)}</p>
                                <p className="font-light">{truncateByWords(val.description, 10)}</p>
                            </div>
                        )
                        )
                    }
                </div>
                {
                    isOpen && activeSet &&
                    <div key={activeSet?.id} className="fixed h-screen w-screen inset-0 top-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 overflow-y-scroll">
                        <div className="bg-grid-inch text-white p-6 rounded-xl w-full mt-[570px] flex flex-col">
                            <button
                                className="flex items-center justify-end text-white text-xl cursor-pointer"
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSet(null);
                                }}
                            >
                                <X />
                            </button>
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-white">{activeSet.title}</h2>
                                <Image
                                    src={activeSet?.image}
                                    alt="case"
                                    height={200}
                                    width={380}
                                    className="rounded-md mb-4 object-cover w-[500px] h-[300px] mt-[40px]"
                                />
                                <p className="mb-6 text-white/60 flex text-justify my-[40px]">{activeSet.description}</p>
                                <p className="px-[18px] py-[5px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold mb-[20px]">{activeSet.improvement_1}</p>
                                {activeSet.improvement_2 && <p className="px-[18px] py-[5px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">{activeSet.improvement_2}</p>}
                                <div className="flex items-center justify-center">
                                    <a href="/blog" className="bg-white text-black px-[15px] py-[10px] font-semibold cursor-pointer rounded-[5px] mt-[40px] w-fit">Other Blogs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};