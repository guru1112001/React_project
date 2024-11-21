import { useContext } from "react"
import { Usercontext } from "./UserContext"

const UserProfile = () => {
    const {user}=useContext(Usercontext)
  return (
    <div>
        <h1>user profile</h1>
        <p>name:{user.name}</p>
    </div>
  )
}

export default UserProfile;