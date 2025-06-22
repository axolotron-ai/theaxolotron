import Image from "next/image"

export default function Levels() {

    const value = [{ src: "/students.jpg" }, { src: "/employees.jpg" }, { src: "/organizations.jpg" }];

    return (
        <>
            <div id="products" className="bg-[#DDDDDD] px-[3%] py-[5%] flex flex-col gap-[40px]">
                <div>
                    <p className="font-semibold text-[34px] pl-[3%]">Academic Levels ;</p>
                </div>
                <div className="flex flex-wrap items-center justify-between mx-[10%]">
                    {
                        value.map((val, index) => (
                            <div key={index} className="flex flex-col gap-[20px]">
                                <div>
                                    <Image src={val.src} alt="/relaoad" height={200} width={200} className="h-[300px] w-[300px] object-cover outline-1 outline-black/60 rounded-[10px]" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="outline-1 outline-black cursor-pointer w-fit px-[20px] py-[10px] rounded-[7px] font-semibold text-[18px]">Explore</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};
