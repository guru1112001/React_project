const Greet=()=>{
    const name='nikku'
    const date=new Date().getDate()
    return <div>
        <h1>hello {name}</h1>
        <p>today date is {date}</p>
    </div>
}
export default Greet;