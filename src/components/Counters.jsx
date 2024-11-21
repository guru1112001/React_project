import React, { useReducer, useState } from 'react'
import { counterReducer,intialState } from './CounterReducer'


const Counters = () => {

    const [state,dispatch]=useReducer(counterReducer,intialState)
    const[value,Setvalue]=useState(0)


    const handleincreament =()=>{
        dispatch({type:'increment'})
    }
    const handledecreament =()=>{
        dispatch({type:'decreament'})
    }
    const handleincrementbyamount=()=>{
        dispatch({type:'incrementByAmount' , payload :Number(value)})
        Setvalue(0)
    }
    const handledecreamentbyamount=()=>{
        dispatch({type:'decreamenttByAmount',payload:Number(value)})
        Setvalue(0)
    }
  return (
    <div>
        <h1>counter value {state.count}</h1>
        <button onClick={handleincreament}>increament</button>
        <button onClick={handledecreament}>decreament</button>
        <input type="text" value={value} onChange={e=>Setvalue(e.target.value)} />
        <button onClick={handleincrementbyamount} >add</button>
        <button onClick={handledecreamentbyamount} >subtract</button>

    </div>
  )
}

export default Counters