import React from 'react'

function error() {

  throw new Error("creating an Error")

  return (
    <>
    <main className="my-10">
            <div>
                <h1>Error page</h1>
                <p>In this page we are hendling some Error</p>
            </div>
        </main>
    </>
    
  )
}

export default error