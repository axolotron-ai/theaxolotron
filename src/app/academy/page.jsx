import Header from "@/components/academy/Header";
import Hero from "@/components/academy/Hero";
import Levels from "@/components/academy/Levels";
import Outcomes from "@/components/academy/Outcomes";
import Performance from "@/components/academy/Performance";
import Vision from "@/components/academy/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OfflineClasses from "@/components/OfflineClasses";

export default function page() {
    return (
        <>
            <Header />
            <Hero />
            <OfflineClasses />
            <Performance />
            <Vision />
            <Levels />
            <Outcomes />
            <Contact />
            <Footer />
        </>
    )
};
