import React from 'react'

const Greeting = ({timeoftheday}) => {
 if(timeoftheday==="morning"){
    return(<h1>Good morning!</h1>)
 }
 else if(timeoftheday==="evening"){
    return(<h1>Good evening!</h1>)
 }
}

export default Greeting