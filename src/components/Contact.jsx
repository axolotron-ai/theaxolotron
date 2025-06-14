"use client";
import { Prompt } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { addData } from "@/firebase/firestoreService";
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

    const whenClicked = () => {
        if (!name && !orgName && !email) {
            toast.info("Enter all the fields!");
        } else {
            addData("contacts", { name, orgName, email });
            toast.success("Query Sent Successfully!");
            document.getElementById("input_01").value = "";
            document.getElementById("input_02").value = "";
            document.getElementById("input_03").value = "";
        }
    };

    const motionButton = (children) => {
        return (
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => whenClicked()} className="bg-white px-[50px] py-[8px] rounded-[5px] cursor-pointer w-fit text-black">{children}</motion.button>
        );
    };

    return (
        <div id="contact" className={`${prompt.className} flex flex-wrap gap-[50px] items-center justify-between px-[50px] md:px-[100px] py-[110px] bg-black text-white`}>
            <div className="flex flex-col gap-[40px] ">
                <div>
                    <p className="text-[clamp(2rem,2.5vw,3rem)]">Contact us</p>
                    <p className="text-white/40 text-[clamp(1rem,1.25vw,2rem)]">AI doesn't wait, and neither should your business.</p>
                </div>

                <div className="flex flex-col gap-[35px]">
                    <input id="input_01" placeholder="Name" onChange={(e) => setName(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    <input id="input_02" placeholder="Organization Name" onChange={(e) => setOrgName(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    <input id="input_03" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="outline-none border-b-2 border-white/40" />
                    {motionButton("Send")}
                </div>
            </div>

            <div className="flex flex-col gap-[40px] w-[400px]">
                <div>
                    <p className="text-[clamp(1rem,1.25vw,2rem)]">Phone no</p>
                    <p className="text-white/40">91+8248916635</p>
                    <p className="text-white/40">91+6382714477</p>
                </div>
                <div>
                    <p className="text-[clamp(1rem,1.25vw,2rem)]">Email Address</p>
                    <p className="text-white/40">axolotron.ai@gmail.com</p>
                </div>
                <div>
                    <p className="text-[clamp(1rem,1.25vw,2rem)]">Address</p>
                    <p className="text-white/40">eu ipsum eget dignissim pellentesque in posuere placerat commodo tempor ac faucibus dolor id feugiat nulla.</p>
                </div>
            </div>
            <Toaster richColors />
        </div>
    );
};
