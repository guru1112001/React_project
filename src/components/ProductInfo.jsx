const ProductInfo = () => {
    const Product ={
        "name":"laptop",
        "price":1200,
        "availability":"In stock"
    }
  return (
    <div>ProductInfo <br />
       <p> {Product.name}</p>
       <p> {Product.price}</p>
       <p> {Product.availability}</p>
    </div>
  )
}

export default ProductInfo