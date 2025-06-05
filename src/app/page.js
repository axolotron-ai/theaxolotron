import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import Products from "@/components/Products";
import Casestudies from "@/components/Casestudies";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import connect from "@/db/connect";
import Footer from "@/components/Footer";

export default function Home() {
    connect();

    return (
        <>
            <Header />
            <Hero />
            <Performance />
            <Products />
            <Casestudies />
            <Team />
            <Contact />
            <Footer />
        </>
    );
};
