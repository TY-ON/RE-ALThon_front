"use client";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import "../css/App.css";
import Header from '../components/Header';
import MainPage from './MainPage';
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
