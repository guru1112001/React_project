import { createContext, useState } from "react";

const Usercontext=createContext();

const UserProvider=({children})=>{
    const [user,setUser] =useState({"name":"me"})

    const updateuser=(newname)=>{
        setUser({'name':newname})
    }

    return(
        <Usercontext.Provider value={{user,updateuser}}>
            {children}
        </Usercontext.Provider>
    )
}
export {UserProvider,Usercontext}