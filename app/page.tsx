import AvailableParts from "@/components/landingComp/AvailableParts";
import Contact from "@/components/landingComp/Contact";
import Differents from "@/components/landingComp/Differents";
import Hero from "@/components/landingComp/Hero";
import Testmonial from "@/components/landingComp/testimonial";

export default function Page() {
    return (
        <div>
            <Hero />
            <Differents />
            <AvailableParts />
            <Testmonial />
            <Contact />
        </div>
    );
}
