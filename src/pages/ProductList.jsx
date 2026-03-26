import { Link } from "react-router-dom"
import { products } from '../data/products.js'

const ProductList = () => {

    return (
        <section className="product-list">
            <h1>상품 목록</h1>
            <ul>
                {products.map((product)=>(
                    <div key={product.id}>
                        <h3>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </h3>
                        <p>가격 : {product.price}</p>
                        <p>설명 : {product.description}</p>
                    </div>
                ))}
            </ul>
        </section>
    )
}

export default ProductList