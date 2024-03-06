import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export default function Home() {
    const params = useSearchParams();

    const code = params.get("code");
    return (
        <>
            <h1>Authorization successful</h1>
            <p>code: {code}</p>
        </>
    );
}
