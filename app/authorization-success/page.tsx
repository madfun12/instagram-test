"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
    const searchParams = useSearchParams();

    const code = searchParams.get("code");

    return (
        <>
            <h1>Authorization successful</h1>
            <Suspense>
                <p>code: {code}</p>
            </Suspense>
        </>
    );
}
