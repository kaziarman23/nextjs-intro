import React from "react";

async function getAllUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!result.ok) {
        throw new Error("There is a error in fetching data");
    }

    return result.json();
}

export default getAllUsers;
