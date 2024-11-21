import { useEffect, useState } from "react"

const CounterEffect = () => {

    const [count,Setcount]=useState(0);
    useEffect(()=>{
        document.title=count;
    },[count])
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>Setcount(count+1)}>+</button>
    </div>
  )
}

export default CounterEffect