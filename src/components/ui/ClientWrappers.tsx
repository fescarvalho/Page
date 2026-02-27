"use client";

import dynamic from "next/dynamic";

const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette"), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/ui/MagneticCursor"), { ssr: false });

export default function ClientWrappers() {
    return (
        <>
            <MagneticCursor />
            <CommandPalette />
        </>
    );
}
