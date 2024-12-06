import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/MainPage.css';
import green from '../png/green.jpg';
import forest2 from '../png/forest2.png';
import herb from '../png/herb.jpg';

const MainPage: React.FC = () => {
  return (
<div className='body' >
  <div className='flex-container'>
  <h1 className='nature'>NATURE</h1>
  </div>
  <div className='isonu-container'>
    <img src={green.src} className='greenimg'/>
    <div>
      <h2 className='isonu'>is OnU</h2>
      <div className='isnou-text'>
        <div>건강과 지속 가능성을 연결하다</div> 
        <div>OnU는 사람과 지구를 위한 지속 가능한 소비를 지향합니다</div>
        <div>우리는 믿습니다</div> 
        <div>1. 건강은 모두가 추구해야 할 기본 권리입니다 <br/>
            2. 지속 가능한 선택은 우리의 미래를 보호하는 일입니다 <br/>
            3. 개인의 소비 습관이 건강과 환경 모두에 긍정적인 영향을 미칠 수 있습니다
        </div>
      </div>
    </div>
  </div>
  <div className='herbtitle'>
    <div>우리의 소비는 단순히 '구매'를 넘어,<br />
    더 건강한 나와 더 지속 가능한 세상을 만드는 여정입니다</div>
  </div>

  <div className='herbcontainer'>
    <div><span style={{  fontWeight: 'bold' }}>투명한 제품 정보</span><br/> 
    AI 기반 제품 평가 시스템을 통해 제품의 <br/>
    건강 지수와 공정성을 투명하게 공개합니다 <br/><br/>
    <span style={{  fontWeight: 'bold' }}>지속 가능한 대안 제공</span> <br/>
    비건/천연 화장품부터 리필 가능한 헬스케어 제품까지, <br/>
    더 나은 선택을 제안합니다 <br/><br/>
    <span style={{  fontWeight: 'bold' }}>참여와 보상의 연결</span> <br/>
    소비와 소통이 기부와 리워드로 이어지는 <br/>
    Web3 기반의 커뮤니티를 제공합니다 <br/><br/>
    <span style={{  fontWeight: 'bold' }}>개인화된 건강 솔루션</span> <br/>
    AI를 활용해 개개인에 맞는 퍼스널 건강 색상 진단, <br/>
    천연 재료 기반 제품 추천을 제공합니다 <br/><br/>
    <span style={{  fontWeight: 'bold' }}>전문가와 함께하는 건강 관리 </span><br/>
    헬스 케어 전문가와 인플루언서들의 의견을 반영한 <br/>
    제품과 솔루션을 제공합니다</div>
    <img src={herb.src} className='herbimg'/>
  </div>

  <div className="greenline-container">
    <div className="greenline"></div>
  </div>


  <div className='bottomcontainer'>
    <div className='bottomtitle'>
    함께 건강하고 지속 가능한<br/> 라이프스타일을 만들어가는 파트너 🌱
    </div>
    <img src={forest2.src} className='bottomimg'/>
    <div className='bottomlogo'>
    당신과 지속 가능한 우리, OnU
    </div>
  </div>

</div>
  );
};

export default MainPage;
