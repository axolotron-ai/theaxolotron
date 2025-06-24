"use client";
import { motion } from "framer-motion";

export default function MotionButton({onClick, children}) {
    return (
        <motion.button whileTap={{ scale: 0.95 }} onClick={onClick} className="bg-white px-[50px] py-[8px] rounded-[5px] cursor-pointer w-fit text-black">{children}</motion.button>
    );
};
