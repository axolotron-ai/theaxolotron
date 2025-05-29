import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import Products from "@/components/Products";
import Casestudies from "@/components/Casestudies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Performance />
            <Products />
            <Casestudies />
            <Team />
        </>
    );
};
