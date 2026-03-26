import { useParams } from "react-router-dom"
import { products } from '../data/products.js'


const ProudctInfo = () => {
    //URL 파라미터에서 id값을 추출
    const {id} = useParams();

    //id로 데이터검색 - find()
    //URL products/1 - > "1", 정수로 형변환
    const product = products.find((p) => p.id === parseInt(id));

    console.log("검색한 상품 : ",product);
    
    return (
        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
            <p>상품명 : {product.name}</p>
            <p>상품가격: {product.price}</p>
            <p>상품설명: {product.description}</p>
        </section>
    )
}

export default ProudctInfo