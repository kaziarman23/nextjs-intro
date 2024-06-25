"use client";

import Link from "next/link";
import React from "react";

function PrevBtn() {
    function handleClick() {
        console.log("prevBtn is clicked");
    }

    return (
        <div className="mt-5">
            <button
                onClick={() => handleClick()}
                className="my-5 p-5 bg-green-500 rounded-xl"
            >
                <Link href={"/fetch"}>Previous Page</Link>
            </button>
        </div>
    );
}

export default PrevBtn;
