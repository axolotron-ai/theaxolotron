import { MuseoModerno } from "next/font/google";

const text = MuseoModerno({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Footer() {
    return (
        <>
            <div className={`${text.className} h-[350px] bg-[#141414] flex flex-wrap items-center justify-between px-[50px] md:px-[100px] text-white`}>
                <a href="/" className="sm:mb-[70px]">
                    <p className="text-[clamp(1.5rem,1.8vw,2.25rem)]">Axolotron</p>
                    <p className="text-white/50 text-[clamp(1rem,1.25vw,2rem)]">AI products that define evolution</p>
                </a>
                <div className="flex flex-row justify-evenly gap-[15%] w-[50%]">
                    <div>
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Socials</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Products</p>
                        <p className="text-white/50">Healthcare</p>
                        <p className="text-white/50">E-commerce</p>
                        <p className="text-white/50">Logistics</p>
                    </div>
                    <div className="flex flex-col justify-evenly gap-[8px]">
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Contact</p>
                        <div>
                            <p className="text-[clamp(1rem,1.25vw,2rem)]">Phone No</p>
                            <p className="text-white/50">91+82489 16635</p>
                            <p className="text-white/50">91+63827 14477</p>
                        </div>
                        <div>
                            <p className="text-[clamp(1rem,1.25vw,2rem)]">Email Address</p>
                            <p className="text-white/50">axolotron.ai@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
