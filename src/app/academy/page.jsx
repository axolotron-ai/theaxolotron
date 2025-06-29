import Clients from "@/components/academy/Clients";
import Gallery from "@/components/academy/Gallery";
import Header from "@/components/academy/Header";
import Hero from "@/components/academy/Hero";
import Levels from "@/components/academy/Levels";
import Outcomes from "@/components/academy/Outcomes";
import Performance from "@/components/academy/Performance";
import Vision from "@/components/academy/Vision";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OfflineClasses from "@/components/OfflineClasses";

export default function page() {
    return (
        <>
            <Chatbot />
            <Header />
            <Hero />
            <OfflineClasses />
            <Performance />
            <Vision />
            <Levels />
            <Outcomes />
            <Gallery />
            <Clients />
            <Contact />
            <Footer />
        </>
    )
};
