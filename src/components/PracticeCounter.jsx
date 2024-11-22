import React, { useState } from 'react'

const PracticeCounter = () => {

    const[count,SetCount]=useState(0)

  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={()=>SetCount(count+1)}>+</button>
        <button onClick={()=>SetCount(count-1)}>-</button>
        <button onClick={()=>SetCount(0)}>reset</button>
    </div>
  )
}

export default PracticeCounter