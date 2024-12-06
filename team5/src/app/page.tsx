"use client";

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProductPage from './ProductPage';
import DashboardPage from './DashboardPage';
import "../css/App.css";
import Header from '../components/Header';
import MainPage from './MainPage';
import CustomPage from './CustomPage';
import SubPage from './SubPage';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = !!localStorage.getItem("authToken"); // 예시로 localStorage를 사용해 로그인 여부 확인
  return isLoggedIn ? children : <Navigate to="/login" />;
}


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/custom" element={<CustomPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/my-page" element={<LoginPage />} />
        <Route path="/subpage/:productName" element={<SubPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
        </Routes>
    </Router>
  );
};

export default App;
