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
            <div className="bg-black/85 min-h-screen">
                <p className="text-white text-[clamp(1.25rem,2.25vw,2.25rem)] font-semibold py-[50px] mx-[calc(8%)]">Healthcare</p>
                <div className="sm:grid flex flex-col sm:grid-cols-3 mx-[calc(10%)] gap-[30px]">
                    {Array.isArray(value) && value.map((val, index) => (
                        <div key={index} onClick={() => { setActiveSet(val); setIsOpen(true); }} className="flex flex-col gap-[15px] cursor-pointer hover:outline-1 hover:outline-white/50 hover:rounded-[7px] p-[10px] h-fit w-fit">
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
                            <div className="sm:mx-[calc(10%)] mx-[calc(4%)]">
                                <DialogTitle className="text-[clamp(1.5rem,1.8vw,2rem)] font-bold mb-4 text-white">{activeSet?.title}</DialogTitle>
                                <div className="flex flex-col sm:flex-row gap-[40px]">
                                    <Image
                                        src={activeSet?.image}
                                        alt="case"
                                        height={200}
                                        width={380}
                                        className="rounded-md mb-4 object-cover w-[500px] h-[300px] mt-[40px]"
                                    />
                                    <p className="mb-6 text-white/60 flex text-justify my-[40px] text-[clamp(1rem,1.26vw,1.8rem)]">{activeSet.description}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">What it does</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="hidden sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <Anchor className="text-white h-[50px] w-[50px] outline-2 outline-white p-[10px] rounded-full" />
                                    </div>
                                    <div className="hidden sm:block h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-start sm:justify-start sm:pl-[calc(10%)] text-[clamp(1rem,1.24vw,1.7rem)]">
                                        <div>
                                            {activeSet?.isForList?.isFor1 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor1}</p></div>}
                                            {activeSet?.isForList?.isFor2 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor2}</p></div>}
                                            {activeSet?.isForList?.isFor3 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor3}</p></div>}
                                            {activeSet?.isForList?.isFor4 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor4}</p></div>}
                                            {activeSet?.isForList?.isFor5 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor5}</p></div>}
                                            {activeSet?.isForList?.isFor6 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.isForList?.isFor6}</p></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">Benefits</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="hidden sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <Shrub className="text-white h-[50px] w-[50px] outline-2 outline-white p-[10px] rounded-full" />
                                    </div>
                                    <div className="hidden sm:block h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-start sm:justify-start sm:pl-[calc(10%)] text-[clamp(1rem,1.24vw,1.7rem)]">
                                        <div>
                                            {activeSet?.benefitsList?.benefits1 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits1}</p></div>}
                                            {activeSet?.benefitsList?.benefits2 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits2}</p></div>}
                                            {activeSet?.benefitsList?.benefits3 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits3}</p></div>}
                                            {activeSet?.benefitsList?.benefits4 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits4}</p></div>}
                                            {activeSet?.benefitsList?.benefits5 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits5}</p></div>}
                                            {activeSet?.benefitsList?.benefits6 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.benefitsList?.benefits6}</p></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-[clamp(1.5rem,2.25vw,3rem)] w-full text-center my-[30px]">Integrations</p>
                                <div className="flex flex-row items-center justify-evenly">
                                    <div className="hidden sm:w-[30%] sm:flex sm:items-center sm:justify-center">
                                        <ChevronsLeftRightEllipsis className="text-white h-[50px] w-[50px] outline-2 outline-white p-[10px] rounded-full" />
                                    </div>
                                    <div className="hidden sm:block h-[200px] w-[1px] bg-white/60" />
                                    <div className="sm:w-[70%] sm:flex sm:flex-col sm:items-start sm:pl-[calc(10%)] sm:justify-start text-[clamp(1rem,1.24vw,1.7rem)]">
                                        <div>
                                            {activeSet?.integrationList?.integration1 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration1}</p></div>}
                                            {activeSet?.integrationList?.integration2 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration2}</p></div>}
                                            {activeSet?.integrationList?.integration3 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration3}</p></div>}
                                            {activeSet?.integrationList?.integration4 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration4}</p></div>}
                                            {activeSet?.integrationList?.integration5 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration5}</p></div>}
                                            {activeSet?.integrationList?.integration6 && <div className="flex flex-row gap-[10px] items-center"><div className="h-[7px] w-[7px] bg-white/70 rounded-full" /> <p className="text-white/50 p-[5px] rounded-[4px] w-fit">{activeSet?.integrationList?.integration6}</p></div>}
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
