"use client";
import { Prompt } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { addData, getData } from "@/firebase/firestoreService";
import { toast, Toaster } from "sonner";

const prompt = Prompt({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Contact() {

    const [name, setName] = useState("");
    const [orgName, setOrgName] = useState("");
    const [email, setEmail] = useState("");
    const [cno, setCno] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchData() {
                const data = await getData("formlink");
                if (data?.[0]?.formlink) {
                    setLink(data[0].formlink);
                    console.log(data[0].formlink);
                }
            }
            fetchData();
        }, 10000);
    }, []);

    const whenClicked = () => {
        if (!name || !orgName || !email || !cno) {
            toast.info("Enter all the fields!");
        } else {
            addData("contacts", { name, orgName, email, cno });
            toast.success("Query Sent Successfully!");
            document.getElementById("input_01").value = "";
            document.getElementById("input_02").value = "";
            document.getElementById("input_03").value = "";
            document.getElementById("input_04").value = "";
        }
    };

    const motionButton = (children) => {
        return (
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => whenClicked()} className="bg-white px-[50px] py-[8px] rounded-[5px] cursor-pointer w-fit text-black">{children}</motion.button>
        );
    };

    return (
        <div id="contact" className={`${prompt.className} flex flex-wrap gap-[50px] items-center justify-evenly px-[50px] md:px-[100px] py-[110px] bg-black text-white`}>
            <div className="flex flex-col gap-[40px] sm:border-l-2 sm:border-b-2 border-white/40">
                <div>
                    <p className="text-[clamp(2.5rem,3.5vw,4rem)] sm:ml-[-50px]">Contact us</p>
                    <p className="text-white/40 text-[clamp(1rem,1.25vw,2rem)] pl-[30px]">AI doesn't wait, and neither should your business.</p>
                </div>

                <div className="flex flex-col gap-[40px] sm:px-[40px]">
                    <input id="input_01" placeholder="Name" onChange={(e) => setName(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    <input id="input_02" placeholder="Organization Name" onChange={(e) => setOrgName(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    <input id="input_04" placeholder="Contact No" onChange={(e) => setCno(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    <input id="input_03" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    {motionButton("Send")}
                </div>
            </div>
            <div className="sm:h-[600px] w-[1px] bg-white/40" />
            <div className="hidden sm:block">
                <div className="flex flex-col gap-[60px] w-[400px]">
                    <div>
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Phone no</p>
                        <p className="text-white/40">91+8248916635</p>
                        <p className="text-white/40">91+6382714477</p>
                    </div>
                    <div>
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Email Address</p>
                        <a className="text-white/40 underline" href="mailto:axolotron.ai@gmail.com">axolotron.ai@gmail.com</a>
                    </div>
                    <div>
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Address</p>
                        <p className="text-white/40">89, Sangmam Nagar, Chettipalayam, Coimbatore, 641201.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between gap-[20px]">
                <div className="flex flex-row w-full items-center gap-[5px]"><p className="w-full h-[1px] bg-white/50" />OR<p className="w-full h-[1px] bg-white/50" /></div>
                <p>Simply Fill The Form</p>
                <a href={link} target="_blank"><motion.button whileTap={{ scale: 0.95 }} className="px-[20px] py-[8px] bg-white text-black text-[18px] rounded-[7px] cursor-pointer">The Form</motion.button></a>
            </div>
            <Toaster richColors />
        </div>
    );
};
