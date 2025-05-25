import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Performance from "@/components/Performance";
import Products from "@/components/Products";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Performance />
            <Products />
        </>
    );
}
