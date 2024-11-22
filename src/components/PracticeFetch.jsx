import React, { useEffect, useState } from 'react'

const PracticeFetch = () => {

    const [title,SetTittle]=useState([]);
    useEffect(()=>{
        const fetchdata=async()=>{
           const response=await fetch('https://jsonplaceholder.typicode.com/posts')
           const data=await response.json()

        }
    })
  return (
    <div>
        <h1>title</h1>
        
    </div>
  )
}

export default PracticeFetch