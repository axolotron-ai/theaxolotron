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
            <div className={`bg-[#151515] h-screen grid grid-cols-2 items-center justify-center ${lato.className} px-[clamp(1.5rem,7vw,11rem)]`}>
                <div className="relative flex items-center justify-center">
                    <Image src="/team.jpg" alt="/reload" height={500} width={500} quality={100} />
                    <div className="absolute" />
                </div>
                <div>
                    <p className="text-white font-semibold text-[clamp(1rem,4vw,4rem)]">THE TEAM.</p>
                    <p className="text-white/70 text-[clamp(0.8rem,1.3vw,2rem)]">At Axolotron, we help ambitious businesses unlock the real power of AI. Whether you're cutting costs, streamlining operations, or scaling smarter—we build solutions that deliver results. No fluff, just data-driven impact. Partner with us to turn intelligence into action, and ideas into measurable growth.</p>
                </div>
            </div>
        </>
    );
};
