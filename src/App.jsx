import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClientScreen from './screens/Client/client';
import SellectAcScreen from './screens/SellectAccount/sellectAc';
import OtpScreen from './screens/OTP/otp';
import EmailScreen from './screens/EmailInfo/email';
import MainHome from './screens/HomePage/home';
import useScreenStore from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App=()=> {
  
    const { currentScreen, setScreen } = useScreenStore();
    return (
        <div>
         <Router>
      <Routes>
        <Route path="/" element={<SellectAcScreen />} />
        <Route path="/client" element={<ClientScreen />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/email" element={<EmailScreen />} />
        <Route path="/home" element={<MainHome />} />
      </Routes>
    </Router>
        </div>
    );
}


export default App;
