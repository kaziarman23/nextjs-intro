import React from 'react'

async function getUser(id) {

    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    
    return result.json()
    
  
}

export default getUser