import type { Metadata } from "next";
import Chat from "@/sections/chat/Chat";

export const metadata: Metadata = {
    title: "Asistente AI",
    description: "Interactúa con nuestra inteligencia artificial para resolver dudas sobre SCADA, BMS y AI + IIoT.",
};

export default async function Index() {
    return <Chat />;
}
