import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Team() {
    return (
        <>
            <div className={`bg-[#151515] h-full sm:h-screen grid md:grid-cols-2 items-center justify-center ${lato.className} px-[clamp(1.5rem,7vw,11rem)]`}>
                <div className="relative flex items-center justify-center">
                    <Image src="/team.jpg" alt="/reload" height={400} width={500} quality={100} className="rounded-[7px] h-[400px] w-[500px] object-cover" />
                    <div className="absolute inset-0 z-20">
                        <div className="absolute top-0 left-0 h-[68%] w-[52%] border-2 border-[#151515]" />
                        <div className="absolute bottom-0 left-0 h-[30%] w-[52%] border-2 border-[#151515]" />
                        <div className="absolute bottom-0 right-0 h-[80%] w-[47%] border-2 border-[#151515]" />
                    </div>
                    <div className="absolute inset-0 z-30">
                        <div className="absolute top-[68%] left-0 h-[2%] w-[52%] border-2 border-[#151515] bg-[#151515]" />
                        <div className="absolute top-0 right-0 h-[20%] w-[48%] border-2 border-[#151515] bg-[#151515]" />
                        <div className="absolute top-0 left-[52%] h-[100%] w-[1%] border-2 border-[#151515] bg-[#151515]" />
                    </div>
                </div>
                <div className="p-[30px]">
                    <p className="text-white font-semibold text-[clamp(1.5rem,4vw,4rem)]">THE TEAM.</p>
                    <p className="text-white/70 text-[clamp(1rem,1.3vw,2rem)]">At Axolotron, we help ambitious businesses unlock the real power of AI. Whether you're cutting costs, streamlining operations, or scaling smarter—we build solutions that deliver results. No fluff, just data-driven impact. Partner with us to turn intelligence into action, and ideas into measurable growth.</p>
                </div>
            </div>
        </>
    );
};
