import { useState } from "react"

const ShopingCart = () => {

    const [items,Setitems]=useState([])
    const [name,Setname]=useState('')
    const[quantity,Setquantity]=useState('')

    const handleSubmit=e=>{
        e.preventDefault()
        if(!name || !quantity)return;
        
        const newItems={
            name,
            quantity:parseInt(quantity),
        };
        Setitems((preitems)=>[...preitems,newItems])
        Setname('')
        Setquantity('')
    }
  return (
    <div>
        <h1>shoping cart</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id=""placeholder="enter the name" value={name} onChange={(e)=>Setname(e.target.value)} />
            <input type="number" name="" id=""placeholder="enter the quantity" value={quantity} onChange={(e)=>Setquantity(e.target.value)} />
            <button type="submit">submit</button>

        </form>
        <ul>
          {  items.map((item,index)=>(
            <li key={index}>{item.name }-quantity {item.quantity}</li>
            
         ) )}
        </ul>
    </div>
  )
}

export default ShopingCart