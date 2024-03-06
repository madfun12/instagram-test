"use client";

import { useSearchParams } from "next/navigation";

const Code = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    return <p>code:{code}</p>;
};

export default Code;
