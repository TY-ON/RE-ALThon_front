import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/DashboardPage.css';
import db from '../png/Dashboard.png';
import writingicon from '../png/writing-icon.png';
import recycle from '../png/recycle.png';
import giftbox from '../png/recycle.png';

import ad from '../png/ad.png';
import leaf from '../png/leaf.png';
import notebook from '../png/notebook.png';
import waterhand from '../png/waterhand.png';
import pngwing from '../png/pngwing.png';
import Dashboard_profile from '../components/Dashboard_profile';


const DashboardPage: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div className="my-page">

      <div className='sidebar'>
        <ul className="menu">
          <li><Link to="/dashboard/profile">내 정보</Link></li>
          <li><Link to="/dashboard/orders">주문조회</Link></li>
          <li><Link to="/dashboard/posts">게시물 관리</Link></li>
          <li><Link to="/dashboard/delivery">배송확인</Link></li>
        </ul>
      </div>

    <div>
      <img src={db.src}/>
    </div>

      </div>


  );
};

export default DashboardPage;
