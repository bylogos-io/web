"use client";

import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HardwareAlternatives } from "@/components/hardware-alternatives";
//import { Testimonials } from "@/components/testimonials";
import { Stack } from "@/components/stack";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

import { Header } from "@/components/header";

import "./page.css";
//import { Arch } from "@/components/arch";

export default function Home() {
    return (
        <div>
            <div className="relative z-10">
                <div className="bg-black">
                    <div>
                        <Header />
                        <Hero />
                    </div>
                    <Features />
                    {
                        //<Arch />
                    }
                    <HardwareAlternatives />
                    <Stack />
                    <Newsletter />
                </div>
            </div>
            <div className="h-90 -z-60 pointer-events-none select-none"></div>
            <div className="fixed bottom-0 left-0 right-0 z-1 pointer-events-auto">
                <Footer />
            </div>
        </div>
    );
}
