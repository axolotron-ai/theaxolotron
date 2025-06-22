import { BadgePercent } from "lucide-react";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Performance() {
    return (
        <>
            <div className="hidden sm:block outline-none border-none">
                <div className="bg-[#151515] h-[550px] flex flex-col items-center justify-evenly">
                    <div className="bg-black outline-2 outline-[#939393]/40 p-[30px] grid grid-cols-3 gap-[20px] w-[75%] rounded-[10px]">
                        <div className="flex flex-row gap-[5px] items-center justify-center border-r-2 border-[#939393]/40">
                            <div className="flex flex-col items-center justify-center gap-[10px]">
                                <Image src="/percentage.png" alt="/reload" width={50} height={50} quality={100} className="h-auto w-auto" />
                                <p className="text-white text-[clamp(1.15rem,2.2vw,2.2rem)]">150%</p>
                                <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Increased Productivity</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-[5px] items-center justify-center border-r-2 border-[#939393]/40">
                            <div className="flex flex-col items-center justify-center gap-[16px]">
                                <Image src="/people.png" alt="/reload" width={50} height={50} quality={100} className="h-auto w-auto" />
                                <p className="text-white text-[clamp(1.15rem,2.2vw,2.2rem)]">500+</p>
                                <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Individuals Trained</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[5px] items-center justify-between">
                            <div className="flex flex-col items-center justify-center gap-[10px]">
                                <Image src="/bulb.png" alt="/reload" width={50} height={50} quality={100} className="h-auto w-auto" />
                                <p className="text-white text-[clamp(1.15rem,2.2vw,2.2rem)]">50+</p>
                                <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Hours Trained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block sm:hidden">
                <div className="bg-[#151515] h-[650px] flex flex-col items-center justify-evenly">
                    <div className="h-[100px] w-[75%] gap-[10%]">
                        <p className="text-white text-[30px]">Creating values through meaningful <span className="text-[#939393]"> collaborations and solutions.</span></p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 px-[25px]">
                        <p className="text-white text-[40px] flex flex-col gap-[4px] justify-center items-center w-full">15+ <span className="text-[#939393] text-[24px]">Happy Clients</span> </p>
                        <p className="text-white text-[40px] flex flex-col gap-[4px] justify-center items-center w-full">27+ <span className="text-[#939393] text-[24px]">Projects</span></p>
                        <p className="text-white text-[40px] flex flex-col gap-[4px] justify-center items-center w-full pt-[40px]">255% <span className="text-[#939393] text-[24px]">Proven Growth</span></p>
                        <p className="text-white text-[40px] flex flex-col gap-[4px] justify-center items-center w-full pt-[40px]">3 <span className="text-[#939393] text-[24px]">Countries</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};
