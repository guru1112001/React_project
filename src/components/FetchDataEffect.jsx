import { useEffect, useState } from "react"

const FetchDataEffect = () => {
    const [posts,SetPost]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{

            const response=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await response.json();
            SetPost(data)

             
        }
        fetchData()
      },[])
  return (
    <div>
        <h1>first post title</h1>
        {posts.length>0?<h2>{posts[0].title}</h2>:<p>loading...</p>}
    </div>
  )
}

export default FetchDataEffect