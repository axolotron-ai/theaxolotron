import Image from 'next/image';
import { Open_Sans, } from 'next/font/google';

const sans = Open_Sans({ subsets: ["latin"] });

export default function Impacts() {
    return (
        <>
            <div className="grid grid-cols-3 h-full pt-[100px] pb-[100px] pl-[50px] bg-black">
                <div className="flex flex-col justify-between">
                    <p className={`${sans.className} text-[35px] bg-gradient-to-r from-white to-[#464646] bg-clip-text text-transparent font-bold pl-[50px]`}>How our AI impact<br /> your business!</p>
                    <div className="bg-[#303030] grid grid-flow-row items-center my-[20px] ml-[20px] mr-[5px] rounded-[20px] p-[30px]">
                        <div className="flex flex-row gap-[20px] mb-[15px]">
                            <Image src="/imp-1.png" alt="impacts image" width={50} height={50} quality={100} />
                            <p className={`text-white font-semibold text-[26px] ${sans.className}`}>Time Efficient</p>
                        </div>
                        <p className={`${sans.className} text-[#B2B2B2] text-[20px] font-semibold`}>AI handles repetitive <br /> tasks, saving time for<br /> core business operations.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end w-full">
                    <div className="bg-[#303030] my-[20px] mx-[5px] rounded-[20px] py-[80px] px-[50px]">
                        <div className="flex flex-row gap-[20px] mb-[15px]">
                            <Image src="/imp-2.png" alt="impacts image" width={50} height={50} quality={100} className="h-[50px] w-[50px] mt-[12px]" />
                            <p className={`text-white font-semibold text-[26px] ${sans.className}`}>Data Driven <br />Decision Making</p>
                        </div>
                        <p className={`${sans.className} text-[#B2B2B2] text-[20px] font-semibold`}>AI analyzes large datasets to<br /> identify trends, optimize marketing<br /> strategies, and improve business<br /> forecasting for smarter decision<br />-making.</p>
                    </div>
                </div>
                <div className={`${sans.className} flex flex-col`}>
                    <div className="bg-[#303030] my-[20px] mx-[5px] rounded-[20px] px-[40px] py-[60px] w-[400px]">
                        <div className="flex flex-row gap-[20px] mb-[15px]">
                            <Image src="/imp-3.png" alt="impacts image" width={50} height={50} quality={100} className="h-[50px] w-[50px] mt-[12px]" />
                            <p className="text-white font-semibold text-[26px]">Personalized Marketing</p>
                        </div>
                        <p className="text-[#B2B2B2] text-[20px] font-semibold">AI tailors ads, emails, and recommendations based on user behavior, increasing engagement</p>
                    </div>
                    <div className="bg-[#303030] my-[20px] mx-[5px] rounded-[20px] px-[40px] py-[60px] w-[400px]">
                        <div className="flex flex-row gap-[20px] mb-[15px]">
                            <Image src="/imp-4.png" alt="impacts image" width={50} height={50} quality={100} className="h-[50px] w-[50px] mt-[12px]" />
                            <p className="text-white font-semibold text-[26px]">Faster Content Creation</p>
                        </div>
                        <p className="text-[#B2B2B2] text-[20px] font-semibold">AI generates marketing copy, reports, and designs in seconds, saving time on creative tasks.</p>
                    </div>
                </div>
            </div>
        </>
    )
}