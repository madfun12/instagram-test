import { Suspense } from "react";
import Code from "./code";

export default function Auth() {
    return (
        <>
            <h1>Authorization successful</h1>
            <Suspense>
                <Code />
            </Suspense>
        </>
    );
}
