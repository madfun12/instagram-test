/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Post = {
    caption: string;
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
    thumbnail_url: string;
    timestamp: string;
};

const AccountPage = () => {
    const { userid } = useParams();
    const [posts, setPosts] = useState<Post[]>([]);

    console.log(posts);
    const getAccount = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/account/${userid}`
            );

            setPosts(response.data.media);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAccount();
    }, []);
    return (
        <>
            <h1 className="font-bold text-4xl py-8 m-auto w-fit">
                Follow us on Instagram
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-8 max-w-[1400px] m-auto">
                {posts.map((post) => (
                    <a key={post.id} href={post.permalink}>
                        <img
                            src={post.media_url}
                            alt={post.caption}
                            className="object-cover w-full h-full aspect-square"
                            crossOrigin="anonymous"
                        />
                    </a>
                ))}
            </div>
        </>
    );
};

export default AccountPage;
