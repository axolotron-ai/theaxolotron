"use client";
import { getData } from "@/firebase/firestoreService";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {

    const [value, setValue] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await getData("gallery");
            setValue(data);
        }
        fetchData();
    }, []);

    return (
        <div id="gallery" className="bg-[#DDDDDD] h-full px-[40px] sm:px-[100px]">
            <div className="py-[50px]">
                <p className="text-[clamp(2rem,3vw,3.5rem)] font-semibold pb-[30px]">Gallery</p>
                <p className="text-[clamp(1rem,1.2vw,2rem)] sm:w-[50%]">Explore snapshots from our AI training sessions — moments of learning, discovery, and transformation.</p>
            </div>
            <div className="grid flex-col sm:grid-cols-3 sm:grid-rows-2 gap-[25px] pb-[70px]">
                {
                    Array.isArray(value) && value.map((val, index) => (
                        <div key={val.id || index} className="h-[300px] rounded-[7px] object-cover">
                            <Image src={val?.image} alt="/reload" height={250} width={250} quality={100} className="h-full w-full object-cover rounded-[14px]" />
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
};
