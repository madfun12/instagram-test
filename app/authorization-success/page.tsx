"use client";

import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();

    const code = searchParams.get("code");

    return (
        <>
            <h1>Authorization successful</h1>
            <p>code: {code}</p>
        </>
    );
}
