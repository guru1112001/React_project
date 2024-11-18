const UserStatus = ({loggedIn,IsAdmin}) => {
    if(loggedIn===true && IsAdmin===true){
        return (<h1>welcome admin</h1>)
    }
    else if(loggedIn===true && IsAdmin===false)
    {
        return (<h1>welcome user</h1>)
    }
 
}

export default UserStatus