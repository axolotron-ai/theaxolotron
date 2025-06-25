"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { getData } from "@/firebase/firestoreService";
import truncateByWords from "@/utils/truncateByWords";
import { Anchor, ChevronsLeftRightEllipsis, Shrub, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function page() {

    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [activeSet, setActiveSet] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchData() {
                const data = await getData("healthcare");
                setValue(data);
            }
            fetchData();
        }, 100);
    }, []);

    return (
        <>
            <div className="bg-black/85 min-h-screen px-[clamp(2rem,2.5vw,3rem)]">
                <p className="text-white text-[clamp(1.25rem,2vw,2.25rem)] font-semibold py-[50px]">Healthcare</p>
                <div className="flex flex-wrap gap-[40px]">
                    {Array.isArray(value) && value.map((val, index) => (
                        <div key={index} onClick={() => { setActiveSet(val); setIsOpen(true); }} className="flex flex-col gap-[15px] cursor-pointer hover:outline-1 hover:outline-white/50 hover:rounded-[7px] p-[10px]">
                            <img src={val?.image} alt="/reload" className="h-[250px] w-[350px] object-cover rounded-[7px]" />
                            <p className="text-white text-[clamp(1rem,1.25vw,2rem)]">{truncateByWords(val?.title, 5)}</p>
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && activeSet &&
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="h-screen min-w-screen bg-grid-inch text-black p-6 rounded-xl flex flex-col overflow-y-scroll">
                        <button
                            className="flex items-center justify-end text-white text-xl cursor-pointer outline-none"
                            onClick={() => {
                                setIsOpen(false);
                                setActiveSet(null);
                            }}
                        >
                            <X />
                        </button>
                        <div>
                            <div className="sm: mx-[100px]">
                            <DialogTitle className="text-2xl font-bold mb-4 text-white">{activeSet?.title}</DialogTitle>
                            <Image
                                src={activeSet?.image}
                                alt="case"
                                height={200}
                                width={380}
                                className="rounded-md mb-4 object-cover w-[500px] h-[300px] mt-[40px]"
                            />
                            <p className="mb-6 text-white/60 flex text-justify my-[40px]">{activeSet.description}</p>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">Who is this for?</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <Anchor className="text-white h-[50px] w-[50px]" />
                                    </div>
                                    <div className="h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-center sm:justify-center">
                                        <div>
                                            {activeSet?.isForList?.isFor1 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor1}</p>}
                                            {activeSet?.isForList?.isFor2 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor2}</p>}
                                            {activeSet?.isForList?.isFor3 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor3}</p>}
                                            {activeSet?.isForList?.isFor4 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor4}</p>}
                                            {activeSet?.isForList?.isFor5 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor5}</p>}
                                            {activeSet?.isForList?.isFor6 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor6}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">Benefits</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <Shrub className="text-white h-[50px] w-[50px]" />
                                    </div>
                                    <div className="h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-center sm:justify-center">
                                        <div>
                                            {activeSet?.benefitsList?.benefits1 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits1}</p>}
                                            {activeSet?.benefitsList?.benefits2 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits2}</p>}
                                            {activeSet?.benefitsList?.benefits3 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits3}</p>}
                                            {activeSet?.benefitsList?.benefits4 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits4}</p>}
                                            {activeSet?.benefitsList?.benefits5 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits5}</p>}
                                            {activeSet?.benefitsList?.benefits6 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits6}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">Integrations</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <ChevronsLeftRightEllipsis className="text-white h-[50px] w-[50px]" />
                                    </div>
                                    <div className="h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-center sm:justify-center">
                                        <div>
                                            {activeSet?.integrationList?.integration1 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration1}</p>}
                                            {activeSet?.integrationList?.integration2 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration2}</p>}
                                            {activeSet?.integrationList?.integration3 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration3}</p>}
                                            {activeSet?.integrationList?.integration4 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration4}</p>}
                                            {activeSet?.integrationList?.integration5 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration5}</p>}
                                            {activeSet?.integrationList?.integration6 && <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration6}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};
