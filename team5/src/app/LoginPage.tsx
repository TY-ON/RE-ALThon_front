import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/LoginPage.css';
import logo from '../png/logo.png';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 로그인 유효성 검사 (간단한 예시)
    if (username === '' || password === '') {
      setError('사용자 이름과 비밀번호를 입력하세요.');
      return;
    }

    // 로그인 성공 시 대시보드 페이지로 리디렉션
    navigate(`/dashboard/${username}`);
  };

  return (
    <div className="login-container">
    <img src={logo}/>
      <h2>ONU</h2>
      <h3>당신과 지속가능한 우리</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="login_id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID를 입력하세요"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
