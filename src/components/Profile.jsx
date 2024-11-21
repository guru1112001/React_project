import { useState } from "react"

const Profile = () => {
    
    const[profile,Setprofile]=useState({
        'name':'',
        'age':null
    })
    const handlesubmit=e=>{
        e.preventDefault();

    }

  return (
    <div>
        <h1>profile</h1>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your name" />
        </form>

    </div>
  )
}

export default Profile