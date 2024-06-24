import React from "react";
import button from "../components/button";

function clientSide() {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mt-5">
            <div>
                <h1>This is a demo of both Server and client side Rendering</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <p>
                    In this component every thing is in server component except
                    That Button component.
                </p>
                <h4>Some demo Text</h4>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            
            <div className="w-full h-5 flex justify-center items-center">
                <h1>Have to fix it latter..</h1>
                <button />
            </div>
        </div>
    );
}

export default clientSide;
