const ProductList = () => {
    const products=[
        {id:1,name:"phone",price:699},
        {id:2,name:"laptop",price:1200},
        {id:3,name:"headphones",price:200},
    ];
  return (
    <div>
        {products.map(({id,name,price})=>
        <ul key={id}>
            <li>{name}</li>
            <li>{price}</li>

        </ul>
        )}
    </div>
  )
};

export default ProductList;