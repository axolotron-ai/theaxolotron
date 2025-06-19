import Image from "next/image";

export default function Vision() {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-2 py-[130px] px-[100px] bg-white rounded-t-[70px]">
                <div className="flex flex-col gap-[25px]">
                    <p className="text-[40px] font-semibold">Company's Vision</p>
                    <p className="font-semibold pr-[80px] text-[20px]">ttt neque eu pellentesque quis tristique erat augue fames sed volutpat at dui sagittis ipsum tortor sapien faucibus tristique non vulputate laoreet eu consectetur elementum in malesuada adipiscing neque pellentesque eu pretium</p>
                    <button className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px] mt-[40px]">View Gallery</button>
                </div>
                <div>
                    <Image src="/vision.jpg" alt="/reload" height={200} width={200} quality={100} className="h-[350px] w-[550px] rounded-[12px]" />
                </div>
            </div>
        </div>
    );
};
