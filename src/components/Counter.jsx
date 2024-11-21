import { useState } from "react"

const Counter = () => {
    const [count,Setcount]=useState(0)
    const handleclick=()=>{
        Setcount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleclick}>+</button>
    </div>
  )
}

export default Counter