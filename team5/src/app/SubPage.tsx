import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/SubPage.css';
import profile from '../png/profileimage.jpg';
import eyecream from '../png/eyecream.png';
import next_eyecream from '../png/next_eyecream.png';
const Product: React.FC = () => {
    return (
<div className='products-item'>
    <div className='products-image'>
        <img src={profile.src} alt="로딩중입니다." />
    </div>
    <div className='products-item-box'>
      <div className='padder'></div>
        <div className='description'>
        <div className='company-name'>
            test
        </div>
        <div className='product-name'>
            test
        </div>
        <div className='product-wrapper'>
        <div className='product-score'>🌿3.5</div>
        <div className='product-price'>7000원</div>
        </div>
        </div>
      </div>
    </div>
    );
}

const SubPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

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
        <div className='itemtitle3'>BEST ITEM</div>
        <div className='itembox'>
            <div>
                <img src={eyecream.src} className='itemimg'/>
            </div>
            <div>
                <img src={next_eyecream.src} className='itemimg'/>
            </div>
        </div>
      </div>
  );
};

export default SubPage;
