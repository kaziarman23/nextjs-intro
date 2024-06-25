import PrevBtn from '@/app/components/prevBtn'
import getUser from '@/lib/getuser'

import React from 'react'

async function posts({params}) {
    const {id} = params
    const post = await getUser(id)
    // console.log(post)
  return (
    <div className='mt-10 flex flex-col justify-center items-center gap-3'>
        <h1>Details about MR.{post.username}</h1>
        <h2>Full Name : {post.name}</h2>
        <h3>Company : {post.company.name}</h3>
        <h3>Website : {post.website}</h3>
        <h3>Email : {post.email}</h3>
        <h3>Contact : {post.phone}</h3>
        
        <PrevBtn/>
    </div>
  )
}

export default posts