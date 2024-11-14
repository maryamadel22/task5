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
const App=()=> {
  
    const { currentScreen, setScreen } = useScreenStore();
    return (
        <div>
         <MainHome/>
        
        </div>
    );
}


export default App;
