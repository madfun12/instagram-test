import { Suspense } from "react";
import Code from "./code";

export default function Auth() {
    return (
        <>
            <h1 className="text-center p-8 text-xl fon-bold">
                Authorization successful
            </h1>
            <Suspense>
                <Code />
            </Suspense>
        </>
    );
}
