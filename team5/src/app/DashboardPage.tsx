import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/DashboardPage.css';

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
      <Dashboard_profile/>




      <div className='bages-container'>
        <h2>Badges</h2>
        <div>
          <div className='badge-section'>
            <div className='badge-header'>
              <h2>대표 배지</h2>
            </div>
            <a href='/bages' className='more-link'>더보기</a>
          <div className='badge-list'>
          <img className='badge-icon' src={notebook.src}/>
          <img className='badge-icon' src={waterhand.src}/>
          <img className='badge-icon' src={pngwing.src}/>
          </div>
          </div>
        </div>

        <h2>Quest</h2>

        <div className="quest-list">
      {/* 첫 번째 퀘스트 카드 */}
      <div className="quest-card">
        <div className="quest-info">
          <img src={waterhand.src} alt="활동 퀘스트 아이콘" className="quest-icon" />
          <div>
            <p className="quest-title">활동 퀘스트</p>
            <p className="quest-description">물의 친구 배지 획득하기</p>
          </div>
        </div>
        <div className="quest-progress">
          <button className="progress-button">완료하기</button>
        </div>
      </div>
      </div>

      <div className="quest-list">
      {/* 첫 번째 퀘스트 카드 */}
      <div className="quest-card">
        <div className="quest-info">
          <img src={notebook.src} alt="활동 퀘스트 아이콘" className="quest-icon" />
          <div>
            <p className="quest-title">커뮤니티 퀘스트</p>
            <p className="quest-description">후기 게시물 3건 작성하기</p>
          </div>
        </div>
        <div className="quest-progress">
          <button className="progress-button">2 / 3</button>
        </div>
      </div>
      </div>
      <div className="quest-list">
      {/* 첫 번째 퀘스트 카드 */}
      <div className="quest-card">
        <div className="quest-info">
          <img src={leaf.src} alt="활동 퀘스트 아이콘" className="quest-icon" />
          <div>
            <p className="quest-title">SDGs 퀘스트</p>
            <p className="quest-description">제품 재활용 1건 신청하기</p>
          </div>
        </div>
        <div className="quest-progress">
          <button className="progress-button">0 / 1</button>
        </div>
      </div>

      </div>


      </div>
      </div>
  );
};

export default DashboardPage;
