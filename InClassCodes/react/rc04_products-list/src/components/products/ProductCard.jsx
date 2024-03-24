
const ProductCard = (product) => {
    const {image, price, title}= product
    return(
        <div>
        <div>
            <h3>{price}</h3>
        </div>
        <img src={image} alt={title} />
        <div>
            <h2>{title} </h2>
        </div>
       </div> 
    )
}

export default ProductCard