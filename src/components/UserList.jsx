const UserList = () => {
    const users= [
        {id:1,name:"Alice",age:25},
        {id:2,name:"nikku",age:18},
        {id:3,name:"me",age:23}
    ]
  return (
    <div>UserList
        <br />
        {
            users.map(({id,name,age})=>(
                <ul key={id}>
                    <li>{name}</li>
                    <li>{age}</li>

                </ul>
            ))}
        
    </div>
  )
}

export default UserList