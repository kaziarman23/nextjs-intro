import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

async function fetch() {
    const posts = await getAllUsers();
    // super hero's api

    return (
        <div className="w-full flex flex-col justify-center items-center mt-10">
            <h1>There are some user's data.</h1>
            <h2>You can view it for more details.</h2>
            <ul className="mt-6">
                {posts.map((post) => (
                    <li className="my-2" key={post.id}>
                        <Link href={`/fetch/${post.id}`}>
                            User Name : {post.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default fetch;
