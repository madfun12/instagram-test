"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Code = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState("");

    const sendCodeToApi = async (code: string) => {
        try {
            const response = await axios.post("http://localhost:8080/account", {
                code: code,
            });

            const { userID } = response.data;

            setUser(userID);

            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const createAccount = useCallback(() => {
        if (code) sendCodeToApi(code);
    }, []);

    useEffect(() => {
        createAccount();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center m-auto h-full">
            <>
                {loading && (
                    <p>
                        Setting up widget
                        <span className="animate-pulse">...</span>
                    </p>
                )}
                {!loading && !user && <p>Error creating widget</p>}
                <a
                    className={`px-8 py-2 rounded-lg bg-neutral-900 mt-4 block w-fit   ${
                        loading
                            ? "text-transparent animate-pulse "
                            : "text-white "
                    }${!loading && !user ? "bg-red-700" : ""} 
                    }`}
                    aria-disabled={loading}
                    href={loading ? "#" : `/account/${user}`}
                >
                    {user ? "Go to widget" : "Please try again"}
                </a>
            </>
        </div>
    );
};

export default Code;
