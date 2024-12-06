import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/DashboardPage.css';
import profile from '../png/profileimage.jpg';

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
      <div className='content'></div>
      <div className='application-container'>
      <h2>My Application</h2>
      

      <div className="profile-container">
      <div className="profile-header">
        <img src={profile.src} alt="Profile" className="profile-image"/>
        <div className="profile-info">
          <h2>김현경 님 <span className="level">Clover</span></h2>
          <button className="edit-button">수정하기</button>
          <div className="profile-stats">
            <div>포인트</div>
            <div> 4,000p</div>
            <p>쿠폰: 3장</p>
            <p>커뮤니티 레벨: Lv 3</p>
          </div>
          <div className="profile-actions">
          </div>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-menu">
        <div>
          <p>주문내역</p>
          <p>5</p>
          </div>
          <div>
          <p>나의 리뷰</p>
          <p>5</p>
          </div>
          <div>
          <p>문의</p>
          <p>5</p>
          </div>
          <div>
          <p>포인트 마켓</p>
          <p>5</p>
          </div>
        </div>
        <div className="campaign-info">
          <p>ReOnU Campaign</p>
          <p>재활용된 제품 갯수: 2개</p>
          <input type="text" placeholder="가까운 매장 찾고 혜택받기" />
        </div>
      </div>

      <div className="ad-banner">
        <p>대충 광고 이미지 들어갈 위치</p>
      </div>
    </div>



      </div>
      <div className='bages-container'>
        <h2>Badges</h2>
        <h2>Quest</h2>
      </div>
      </div>
  );
};

export default DashboardPage;
