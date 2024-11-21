import { useState } from "react"

const TodoList = () => {

    const[todos,SetTodos]=useState([])
    const [input,SetInput]=useState('')
    const handleSubmit=e=>{

        e.preventDefault()
        if(input.trim()){
            SetTodos([...todos ,input]);
            SetInput("")
        }

    }
    const handleChange=e=>{
        SetInput(e.target.value)
    }
  return (
    <div>
        <h1>todo list</h1>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="task">task</label> */}
            <input type="text"  value={input} placeholder="add your todo" onChange={handleChange}/>
            <button type="submit">add todo</button>

        </form>
        <ul>
            {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
        )
          )}
        </ul>
    </div>
  )
}

export default TodoList