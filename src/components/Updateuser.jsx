import { useContext, useState } from "react"
import { Usercontext } from "./UserContext"

const Updateuser = () => {
    const {updateuser}=useContext(Usercontext)

    const [newname,Setnewname]=useState('')

    const handlesubmit= e=>{
        e.preventDefault()
        if(newname.trim()){
            updateuser(newname)

            Setnewname('')
        }

    }
  return (
  <h2>
    update user 
    <form onSubmit={handlesubmit}>
        <input type="text"  value={newname} onChange={e=>Setnewname( e.target.value)}/>
        <button type="submit">submit</button>
    </form>
  </h2>
  )
}

export default Updateuser