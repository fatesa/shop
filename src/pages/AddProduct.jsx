import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    
    //통합 객체 선언, 객체로 초기화
    const [formData, setFormData] = useState({
        name : '',
        price : '',
        description : ''
    });

    //페이지 이동을 위한 훅
    const navigate = useNavigate();

    //입력값 변경
    const handleChange = (e) => {
        console.log(e.target.name);
        const {name, value}  = e.target;

        setFormData({
            ...formData,
            [name]:value // 변경된 값만 업데이트
        });
    }

    //폼 제출
    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지
        console.log("상품 추가 : ", formData);
        
        //입력값 검증
        if(!formData.name.trim() || !formData.price.trim() || !formData.description.trim()){
            alert('모든 값을 입력해 주세요');
            return; // 즉시 종료
        }

        //가격 검증
        if(isNaN(formData.price) || formData.price <= 0){
            alert('모든 값을 입력해 주세요');
            return; //즉시 종료
        }

        console.log("상품 추가 : "+ formData);
        alert('상품이 추가 되었습니다.');
        
        //완료가 되면 상품 목록 페이지로 이동
        navigate('/products');
    }

    const handleCancel= () =>{
        //폼 초기화
        setFormData({
            name : '',
            price : '',
            description :''
        });
    }

    return (
        <div className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit} className="add-form">
                <div>
                    <label htmlFor="name">상품명</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="상품명을 입력하세요"
                        value={formData.name}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                        type="number" 
                        min={1}
                        name="price" 
                        placeholder="가격을 입력하세요"
                        value={formData.price}
                        onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="description">설명</label>
                    <textarea 
                        placeholder="상품 설명을 입력하세요"                        
                        name="description"  
                        rows={5}
                        cols={30}                       
                        value={formData.description}
                        onChange={handleChange} />
                </div>

                <div>
                    <button type="submit">등록</button>
                    <button type="reset" onClick={handleCancel}>취소</button>                    
                </div>
            </form>
        </div>
    )
}

export default AddProduct