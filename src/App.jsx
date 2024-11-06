import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClientScreen from './screens/Client/client';
import SellectAcScreen from './screens/SellectAccount/sellectAc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OtpScreen from './screens/OTP/otp';
import EmailScreen from './screens/EmailInfo/email';
function App() {
    return (
        <div>
           <Router>
            <Routes>
             <Route path="/"  element={<SellectAcScreen/>}  />
             <Route path="/client"  element={<ClientScreen/>}  />
             <Route path="/otp"  element={<OtpScreen/>}  />
             <Route path="/email"  element={<EmailScreen/>}  />
            </Routes>
           </Router>
        </div>
    );
}


export default App;
