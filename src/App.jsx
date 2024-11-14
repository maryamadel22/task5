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
import MainNotification from './components/notification/notification';
const App=()=> {
    const notifications = [
        { name: 'Huda Salih', time: '7 months ago', imgSrc: '/h.png' },
        { name: 'Ahmad Ali', time: '2 days ago', imgSrc: '/a.png' },
        { name: 'Sara Khan', time: '5 hours ago', imgSrc: '/s.png' },
      ];
    const { currentScreen, setScreen } = useScreenStore();
    return (
        <div>
         <MainHome/>
        
        </div>
    );
}


export default App;
