import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

    const [count,SetCount]=useState(0);
    const intervalRef=useRef(null)
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            SetCount((prev)=>prev+1)
        },1000);
        return()=>clearInterval(intervalRef.current)
    })
  return (
    <div>
        <h1>timer {count} seconds</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>clear me</button>
    </div>
  )
}

export default Timer