"use client";

import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const { code } = router.query;

    return (
        <>
            <h1>Authorization successful</h1>
            <p>code: {code}</p>
        </>
    );
}
