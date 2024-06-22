import Link from "next/link";
import React from "react";

function AboutLayout({ children }) {
    return (
        <>
            <nav className="my-6">
                <ul className="flex gap-5">
                    <li>
                        {" "}
                        <Link href="/about/misstion">Misstion</Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="/about/vision">Vision</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    );
}

export default AboutLayout;
