import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/CustomPage.css';
import profile from '../png/profileimage.jpg';
import React from "react";

import img1 from '../png/custom_img/img1.png';
import img2 from '../png/custom_img/img2.png';
import img3 from '../png/custom_img/img3.png';
import img4 from '../png/custom_img/img4.png';
import img5 from '../png/custom_img/img5.png';
import img6 from '../png/custom_img/img6.png';
import img7 from '../png/custom_img/img7.png';
import img8 from '../png/custom_img/img8.png';

interface ProductData {
  src: string;
  explain: string;
  name: string;
}


const Product: React.FC = () => {
  const products: ProductData[] = [
    { src: require("../png/custom_img/img1.png"), explain: "수분충전, 건성 추천", name: "히알루론산" },
    { src: require("../png/custom_img/img2.png"), explain: "피부 장벽 보호", name: "비타민 E" },
    { src: require("../png/custom_img/img3.png"), explain: "피로 회복, 미백 개선", name: "비타민 C" },
    { src: require("../png/custom_img/img4.png"), explain: "피부 진정", name: "로즈마리 오일" },
    { src: require("../png/custom_img/img1.png"), explain: "피부 재생, 촉촉 보습", name: "벌꿀 추출물" },
    { src: require("../png/custom_img/img1.png"), explain: "수분 충전, 피부 재생", name: "알로에베라 추출물" },
    { src: require("../png/custom_img/img1.png"), explain: "여드름 피부 진정", name: "세라마이드" },
    { src: require("../png/custom_img/img1.png"), explain: "", name: "나만의 재료 입력하기" },
  ];

  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="products-item">
          <div className="products-image">
            <img src={product.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"></div>
            <div className="description">
              <div className="product-explain">{product.explain}</div>
              <div className="product-name">{product.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    // 제품명을 클릭했을 때 호출되는 함수
    const handleProductClick = (value:string) => {
        console.log(value);
      setInputValue(value); // input 박스에 '히알루론산'이 입력되도록 상태 업데이트
    }
  


    return (
        <div className="my-page">
        <div className='sidebar'>
          <ul className="menu">
            <li><Link to="/dashboard/profile">Best Item</Link></li>
            <li><Link to="/dashboard/orders">Skin Care</Link></li>
            <li><Link to="/dashboard/posts">Makeup</Link></li>
            <li><Link to="/dashboard/delivery">Hair</Link></li>
          </ul>
        </div>
        <div className='product-container'>
          <h2>CUSTOM ITEM</h2>
          <div className='products-grid'>
          <div className="products-item">
          <div className="products-image">
            <img src={img1.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
              onClick={() => handleProductClick("히알루론산")}
              style={{cursor:"pointer"}}
            
            ></div>
            <div className="description">
              <div className="product-explain">수분충전, 건성 추천</div>
              <div className="product-name"
              onClick={() => handleProductClick("히알루론산")}
              style={{cursor:"pointer"}}
              >히알루론산</div>
            </div>
          </div>
        </div>

        <div  className="products-item">
          <div className="products-image">
            <img src={img2.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
              onClick={() => handleProductClick("비타민 E")}
              style={{cursor:"pointer"}}            
            ></div>
            <div className="description">
              <div className="product-explain">피부 장벽 보호</div>
              <div className="product-name"
              onClick={() => handleProductClick("비타민 E")}
              style={{cursor:"pointer"}}
              >비타민 E</div>
            </div>
          </div>
        </div>


        <div  className="products-item">
          <div className="products-image">
            <img src={img3.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
              onClick={() => handleProductClick("비타민 C")}
              style={{cursor:"pointer"}}              
            ></div>
            <div className="description">
              <div className="product-explain">피로 회복, 미백 개선</div>
              <div className="product-name"
              onClick={() => handleProductClick("비타민 C")}
              style={{cursor:"pointer"}}              
              >비타민 C</div>
            </div>
          </div>
        </div>


        <div  className="products-item">
          <div className="products-image">
            <img src={img4.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
                          onClick={() => handleProductClick("로즈마리 오일")}
                          style={{cursor:"pointer"}}              
            
            ></div>
            <div className="description">
              <div className="product-explain">피부 진정</div>
              <div className="product-name"
              onClick={() => handleProductClick("로즈마리 오일")}
              style={{cursor:"pointer"}}              
              >로즈마리 오일</div>
            </div>
          </div>
        </div>


        <div  className="products-item">
          <div className="products-image">
            <img src={img5.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
                  onClick={() => handleProductClick("벌꿀 추출물")}
                  style={{cursor:"pointer"}}              
            
            ></div>
            <div className="description">
              <div className="product-explain">피부 재생, 촉촉 보습</div>
              <div className="product-name">벌꿀 추출물</div>
            </div>
          </div>
        </div>

        <div  className="products-item">
          <div className="products-image">
            <img src={img6.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
              onClick={() => handleProductClick("알로에베라 추출물")}
              style={{cursor:"pointer"}}              
            ></div>
            <div className="description">
              <div className="product-explain">수분 충전, 피부 재생</div>
              <div className="product-name">알로에베라 추출물</div>
            </div>
          </div>
        </div>

        <div  className="products-item">
          <div className="products-image">
            <img src={img7.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"
            
            ></div>
            <div className="description">
              <div className="product-explain">여드름 피부 진정</div>
              <div className="product-name">세라마이드</div>
            </div>
          </div>
        </div>


        <div  className="products-item">
          <div className="products-image">
            <img src={img8.src} alt="로딩중입니다." />
          </div>
          <div className="products-item-box">
            <div className="padder"></div>
            <div className="description">
              <div className="product-explain"></div>
              <div className="product-name">나만의 재료 입력하기</div>
            </div>
          </div>
        </div>

          </div>
          <input
            type="text"
            id="ingredientname"
            className="inputbox"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="원하는 재료를 선택하세요"
            required
          />

        </div>
      </div>
  
    );
  };
  
export default CustomPage;
  
