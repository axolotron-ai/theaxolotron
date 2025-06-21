import { Facebook } from "lucide-react";
import { MuseoModerno } from "next/font/google";
import Image from "next/image";

const text = MuseoModerno({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

export default function Footer() {
    return (
        <>
            <div className={`${text.className} h-full bg-[#141414] flex flex-wrap items-center justify-between py-[50px] px-[50px] md:px-[100px] text-white gap-[15px]`}>
                <a href="/" className="sm:mb-[70px]">
                    <p className="text-[clamp(1.5rem,1.8vw,2.25rem)]">Axolotron</p>
                    <p className="text-white/50 text-[clamp(1rem,1.25vw,2rem)]">AI products that define evolution</p>
                </a>
                <div className="flex flex-col sm:flex-row justify-evenly gap-[50px] sm:gap-[15%] w-[50%]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[clamp(1rem,1.25vw,2rem)] ">Socials</p>
                        <a href="https://www.facebook.com/share/1VcEE6ftQH/" target="blank" className="flex flex-row gap-[10px]"> <Image src="/socialHandlesIcons/facebook.png" alt="/reload" width={25} height={15} quality={100} /> @Axolotron</a>
                        <a href="https://www.instagram.com/axolotron/profilecard/?igsh=MXhlYnFneW82OTZvYQ==" target="blank" className="flex flex-row gap-[8px]"> <Image src="/socialHandlesIcons/instagram.png" alt="/reload" width={27} height={17} quality={100} /> @Axolotron</a>
                        <a href="https://www.linkedin.com/company/axolotron/" target="blank" className="flex flex-row gap-[10px]"> <Image src="/socialHandlesIcons/linkedin.png" alt="/reload" width={25} height={15} quality={100} /> @Axolotron</a>
                        <a href="https://www.reddit.com/u/axolotronai/s/vnT0B5Dp1t" target="blank" className="flex flex-row gap-[10px]"> <Image src="/socialHandlesIcons/reddit.png" alt="/reload" width={25} height={15} quality={100} /> @Axolotron</a>
                        <a href="https://x.com/axolotronAI?t=0_hFej4tXfSUpk4LfckbVw&s=09" target="blank" className="flex flex-row gap-[10px]"> <Image src="/socialHandlesIcons/twitter.png" alt="/reload" width={25} height={15} quality={100} className="text-white bg-white p-[2px] rounded-[5px]" /> @Axolotron</a>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Products</p>
                        <p className="text-white/50">Healthcare</p>
                        <p className="text-white/50">E-commerce</p>
                        <p className="text-white/50">Logistics</p>
                    </div>
                    <div className="flex flex-col justify-evenly gap-[7px]">
                        <p className="text-[clamp(1rem,1.25vw,2rem)]">Contact</p>
                        <div>
                            <p className="text-[clamp(1rem,1.25vw,2rem)]">Phone No</p>
                            <p className="text-white/50">91+82489 16635</p>
                            <p className="text-white/50">91+63827 14477</p>
                        </div>
                        <div>
                            <p className="text-[clamp(1rem,1.25vw,2rem)]">Email Address</p>
                            <a className="text-white/50 underline cursor-pointer" href="mailto:axolotron.ai@gmail.com">axolotron.ai@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#141414] pt-[20px] h-[70px] sm:h-[180px] w-full my-[-50px]">
                <Image src="Axolotron.svg" alt="/reload" height={100} width={250} quality={100} className="h-full w-full object-fill" />
            </div>
        </>
    );
};
