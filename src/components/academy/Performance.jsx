import { BadgePercent } from "lucide-react";
import Image from "next/image";
import { lato } from "@/utils/fonts";

export default function Performance() {
    return (
        <div className="bg-[#151515] h-[450px] flex flex-col items-center justify-evenly">
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
                        <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Individuals trained</p>
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
    );
};
