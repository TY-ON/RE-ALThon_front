import React from 'react';
import { useParams } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { username } = useParams<{ username: string }>(); // URL 경로에서 username 파라미터를 추출

  return (
    <div className="dashboard-container">
      <h2>{username}님의 대시보드</h2>
      <p>여기는 {username}님의 개인 대시보드입니다.</p>
    </div>
  );
};

export default DashboardPage;
