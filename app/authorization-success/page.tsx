"use client";

import { useParams } from "next/navigation";

export default function Home() {
    const params = useParams<{ code: string }>();

    console.log(params);
    return (
        <>
            <h1>Authorization successful</h1>
            <p>code: {params.code}</p>
        </>
    );
}
