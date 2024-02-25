import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center">
        <div className=" p-8 rounded w-96">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
