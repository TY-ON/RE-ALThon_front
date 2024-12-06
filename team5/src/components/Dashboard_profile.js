// src/components/Header.js
import React from 'react';
import '../css/Dashboard_profile.css';
import profile from '../png/profileimage.jpg';

function Dashboard_profile() {
  return (

    <div className="profile-container">
      <div className="profile-info">
        <img className="profile-avatar" src={profile.src} alt="User Avatar" />
        <div className="profile-details">
          <span className="profile-name">김현경 님</span>
          <span className="profile-subtitle">🌼 Clover</span>
        </div>
      </div>
      <button className="edit-button" >
        수정하기
      </button>
    </div>
);
}

export default Dashboard_profile;
