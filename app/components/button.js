"use client";

import React from "react";

function button() {
    return (
        <div className="mt-5">
            <button
                onClick={() => console.log("button is clicked")}
                className="bg-green-500 p-2"
            >
                Click here!
            </button>
        </div>
    );
}

export default button;
