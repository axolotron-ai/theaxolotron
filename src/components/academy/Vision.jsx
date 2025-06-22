import Image from "next/image";

export default function Vision() {
    return (
        <div className="bg-black">
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 py-[50px] px-[30px] sm:py-[130px] sm:px-[100px] bg-white rounded-t-[70px]">
                <div className="flex flex-col gap-[25px] mb-[15px]">
                    <p className="text-[40px] font-semibold">Company's Vision</p>
                    <p className="font-semibold sm:pr-[80px] text-[20px]">To make world-class AI education accessible, practical, and transformative — so every learner is not just trained, but truly prepared for the future of work. <br /><span>We don't create certificate holders. We build confident, job-ready AI professionals.</span></p>
                    <button className="hidden sm:block outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px] mt-[40px]">View Gallery</button>
                </div>
                <div>
                    <Image src="/vision.jpg" alt="/reload" height={200} width={200} quality={100} className="h-[350px] w-[550px] rounded-[12px]" />
                </div>
            </div>
        </div>
    );
};
