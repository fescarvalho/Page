"use client";

import dynamic from "next/dynamic";
import SitePreloader from "@/components/ui/SitePreloader";

const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/ui/MagneticCursor"), { ssr: false });

export default function ClientWrappers() {
    return (
        <>
            <SitePreloader />
            <MagneticCursor />
            <CommandPalette />
        </>
    );
}
