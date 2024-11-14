import React, { useState } from 'react';
import Container from "../Container/container";
import MainNotification from "../notification/notification";
import "./header.css";
const MainHeader = () => {
 const [showNotifications, setShowNotifications] = useState(false);
const handelclike=()=>{
    setShowNotifications(!showNotifications);

} 
  return (
    <header>
      <Container>
        <div className="content">
          <div className="logo">
            <h1>Freelancer platform</h1>
          </div>
          <div className="menu">
            <a className="active">  Home </a>
            <a>Dashboard </a>
            <a >Settings </a>
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
            <img src={"/noti.png"} onClick={handelclike} />
          </div>
    
        </div>
        <div className="border"></div>
      </Container>
      {showNotifications && (
                <div className="notification-popup">
                    <MainNotification />
                </div>
            )}
    </header>
  );
};

export default MainHeader;