import { ArrowRight } from "lucide-react";
import Image from "next/image"

export default function Levels() {

    const value = [{ src: "/talks.jpg", name: "AI Talks", link: "/academy/talks" },
    { src: "/workshop.jpg", name: "AI Workshop" },
    { src: "/bootcamp.jpg", name: "AI Bootcamp" },
    { src: "/upskilling.jpg", name: "Corporate Upskilling" },
    ];

    return (
        <>
            <div id="ourprograms" className="bg-[#DDDDDD] px-[3%] py-[5%] flex flex-col gap-[40px]">
                <div>
                    <p className="font-semibold text-[34px] pl-[3%]">Our Programs</p>
                </div>
                <div className="hidden sm:block">
                    <div className="flex flex-row items-center justify-between mx-[6%] gap-[40px]">
                        {
                            value.map((val, index) => (
                                <div key={index} className="flex flex-col gap-[20px]">
                                    <div>
                                        <Image src={val.src} alt="/relaoad" height={200} width={200} className="h-[300px] w-[300px] object-cover outline-1 outline-black/60 rounded-[10px]" />
                                        <p className="flex items-center justify-center text-[20px] mt-[15px] font-semibold">{val.name}</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <a href={val?.link}><button className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px]">Explore</button></a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="block sm:hidden">
                    <div className="flex flex-wrap gap-[25px] items-center justify-between mx-[10%]">
                        {
                            value.map((val, index) => (
                                <div key={index} className="relative flex flex-col gap-[20px]">
                                    <Image src={val.src} alt="/relaoad" height={200} width={200} className="relative h-[300px] w-[300px] object-cover outline-1 outline-black/60 rounded-[10px]" />
                                    <div className="absolute bottom-0 bg-gradient-to-t text-white text-[20px] p-[10px] font-semibold from-black via-black/70 to-transparent flex items-center justify-between w-full">{val?.name} <ArrowRight className="text-black bg-white h-[40px] w-[40px] p-[10px] rounded-full" /></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
