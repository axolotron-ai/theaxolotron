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
        <div className="bg-[#151515] h-[650px] flex flex-col items-center justify-evenly">
            <div className="grid grid-cols-2 items-center justify-between h-[100px] w-[75%] gap-[10%]">
                <p className="text-[clamp(1.7rem,3vw,3rem)] text-white font-semibold">The <span className="text-[#939393]">Numbers Reflect Our</span> REPUTATION</p>
                <p className="text-[#939393] text-[clamp(0.85rem,1.5vw,1.25rem)]">Our trusted metrics showcase real impact across industries, proving our ability to deliver scalable, AI-powered solutions that drive growth. Join the businesses that rely on us to transform data into performance.</p>
            </div>

            <div className="bg-black outline-2 outline-[#939393]/40 p-[30px] grid grid-cols-3 gap-[20px] w-[75%] rounded-[10px]">
                <div className="flex flex-row gap-[5px] items-center justify-center border-r-2 border-[#939393]">
                    <div className="flex flex-col items-center justify-center gap-[10px]">
                        <Image src="/percentage.png" alt="/reload" width={50} height={50} quality={100} />
                        <p className="text-white text-[clamp(1.1rem,2.2vw,2.2rem)]">255%</p>
                        <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Up to 255% Performace Growth</p>
                    </div>
                </div>

                <div className="flex flex-row gap-[5px] items-center justify-center border-r-2 border-[#939393]">
                    <div className="flex flex-col items-center justify-center gap-[16px]">
                        <Image src="/people.png" alt="/reload" width={50} height={50} quality={100} />
                        <p className="text-white text-[clamp(1.1rem,2.2vw,2.2rem)]">15+</p>
                        <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Satisfied Clients</p>
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] items-center justify-between">
                    <div className="flex flex-col items-center justify-center gap-[10px]">
                        <Image src="/bulb.png" alt="/reload" width={50} height={50} quality={100} />
                        <p className="text-white text-[clamp(1.1rem,2.2vw,2.2rem)]">27+</p>
                        <p className={`${lato.className} text-[#939393] text-[clamp(0.8rem,1.25vw,1.25rem)]`}>Innovative Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
