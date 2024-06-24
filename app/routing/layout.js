import Link from "next/link";
import React from "react";

function routingLayout({ children }) {
    return (
        <>
            <nav className="w-full h-10 my-6">
                <ul className="flex justify-center items-center gap-5">
                    <li>
                        {" "}
                        <Link href="/routing/mission">Mission</Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/routing/vision">Vision</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}

export default routingLayout;
