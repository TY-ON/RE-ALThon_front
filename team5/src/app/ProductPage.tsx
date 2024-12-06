import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import '../css/ProductPage.css';
import profile from '../png/profileimage.jpg';


interface Props {
  name: string
  company: string
  score: string
  price: string
  image: string
}

const Product: React.FC<Props> = ({ name, company, score, price, image }) => {
    return (
<div className='products-item'>
    <div className='products-image'>
        <img src={image} alt="로딩중입니다." />
    </div>
    <div className='products-item-box'>
      <div className='padder'></div>
        <div className='description'>
        <div className='company-name'>
          {company}
        </div>
        <div className='product-name'>
          {name}
        </div>
        <div className='product-wrapper'>
        <div className='product-score'>🌿{score}</div>
        <div className='product-price'>{price}</div>
        </div>
        </div>
      </div>
    </div>
    );
}

const ProductPage: React.FC = () => {
  const [data, setData] = useState<Record<string, string[]>>({})

    useEffect(()=> {
      fetch('http://localhost:5000/product/list', {    
        method: 'POST',
      })
      .then(response => response.json())
      .then(res => { 
        console.log(res);
        setData(res);
      });
    }, []);

  // const data: Record<string, string[]> = {"1":["0", "1", "2", "3"]}

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
        <h2>BEST ITEM</h2>
        <div className='products-grid'>
        {Object.keys(data).map((keys, index) => 
        <Product key={index}
          name={keys}
          company={data[keys][0]}
          score={data[keys][1]}
          price={data[keys][2]}
          image={data[keys][3]}
        />)}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
