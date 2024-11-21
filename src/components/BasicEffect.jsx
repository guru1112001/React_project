import { useEffect } from "react"

const BasicEffect = () => {

    useEffect(()=>{
        console.log("my first useeffect");
    })
  return (
    <div>
        BasicEffect
    </div>
  )
}

export default BasicEffect