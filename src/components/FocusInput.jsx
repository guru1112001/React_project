import React, { useRef } from 'react'

const FocusInput = () => {
    const inputElement=useRef(null);
    const focusInput=()=>{
        inputElement.current.focus();
        inputElement.current.value="guri"

    }

  return (
    <div>
        <input type="text" name="" id="" ref={inputElement}/>
        <button onClick={()=>focusInput()}>click me!!</button>
    </div>
  )
}

export default FocusInput