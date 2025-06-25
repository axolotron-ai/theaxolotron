"use client";
import { deleteData } from "@/firebase/firestoreService";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export function HeadTitle({ children }) {
    return (
        <p className="px-[12px] py-[7px] bg-black/90 text-white rounded-[7px] w-fit">{children}</p>
    )
};

export function InnerText({ children }) {
    return (
        <p className="text-black bg-transparent">{children}</p>
    )
};

export function FlexBox({ headLine, innerText, id, dbName }) {
    return (
        <div key={id} className="max-w-[calc(100%-40px)] p-[5px] flex flex-row mx-[20px]">
            <div className="w-[95%] bg-accent p-[10px] rounded-l-[7px] flex flex-col gap-[5px] text-start">
                <HeadTitle>{headLine}</HeadTitle>
                <InnerText>{innerText}</InnerText>
            </div>
            <div className="w-[5%] flex items-center justify-center bg-red-100 hover:bg-red-300 cursor-pointer"
                onClick={() => {
                    if (deleteData(dbName, id)) {
                        toast.success("Data Deleted!")
                    }
                }}
            >
                <Trash2 className="text-red-600" />
            </div>
        </div>
    )
};
