"use client";
import { Lato, Prompt } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { getData } from "@/firebase/firestoreService";
import { useEffect, useState } from "react";
import truncateByWords from "@/utils/truncateByWords";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

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
    const [isOpen, setIsOpen] = useState(false);
    const [activeSet, setActiveSet] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await getData("casestudies");
            setValue(data);
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
                <div className="mx-[clamp(1.5rem,8vw,11rem)] flex flex-wrap flex-col sm:flex-row">
                    {
                        Array.isArray(value) &&
                        value.map((val, index) => {
                            if (index == 0) {
                                return (
                                        <div key={index || val.id} className="grid sm:grid-cols-2 gap-[3%] mb-[50px]">
                                            <Image src={val?.image} alt="/reload" height={380} width={340} quality={100} className="rounded-[7px] overflow-hidden h-[clamp(15rem,25vw,30rem)] w-full object-cover" />
                                            <div className="flex flex-col gap-[16px]">
                                                <p className="text-[clamp(1rem,1.8vw,3rem)]">{truncateByWords(val.title, 10)}</p>
                                                <p className="text-[#939393] text-[clamp(0.8rem,1.25vw,2.5rem)]">{truncateByWords(val.description, 35)}</p>
                                                <p className="px-[18px] py-[5px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit font-semibold">{truncateByWords(val.improvement_1, 10)}</p>
                                                <p className="px-[18px] py-[5px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">{truncateByWords(val.improvement_2, 10)}</p>
                                                <p onClick={() => { setIsOpen(true); setActiveSet(val); }}>{motionButton("Read more")}</p>
                                            </div>
                                        </div>
                                );
                            }
                            else if (index < 3) {
                                return (
                                    <div key={index || val.id} className="w-full sm:w-[50%] flex flex-col gap-[15px] mt-[20px]">
                                        <Image src={val?.image} alt="/reload" height={350} width={300} quality={100} className="rounded-[7px] overflow-hidden h-[clamp(14rem,24vw,19rem)] w-[90%] object-cover" />
                                        <div className="flex flex-col gap-[16px] w-[90%]">
                                            <p className="text-[clamp(1rem,1.5vw,3rem)]">{truncateByWords(val.title, 10)}</p>
                                            <p className="text-[#939393] text-[clamp(0.8rem,1.15vw,2.5rem)]">{truncateByWords(val.description, 35)}</p>
                                            <p className="px-[18px] py-[5px] text-black bg-[#89E856] outline-4 outline-[#4FB717] rounded-full w-fit mt-[5px] font-semibold">{truncateByWords(val.improvement_1, 10)}</p>
                                            <p onClick={() => { setIsOpen(true); setActiveSet(val); }}>{motionButton("Read more")}</p>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )
                    }
                </div>
                {isOpen && activeSet &&
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogContent className="h-screen min-w-screen bg-grid-inch text-black p-6 rounded-xl flex flex-col overflow-y-scroll">
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
                                    <a href="/blog" className="bg-white text-black px-[15px] py-[10px] font-semibold cursor-pointer rounded-[5px] mt-[40px] w-fit">More Blogs</a>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                }

                <a href="/blog" className="flex items-center justify-center py-[60px] bg-gradient-to-t from-black via-transparent to-transparent">
                    {motionButton("Explore more")}
                </a>
            </div>
        </>
    );
};