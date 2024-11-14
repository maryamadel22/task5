
import Container from "../../components/Container/container";
import './sellectAc.css';
import React, { useState } from "react";
import useAuthStore from "../../store";

const SellectAcScreen = () => {
  const [isActive, setIsActive] = useState('');
  const setUserType = useAuthStore((state) => state.setUserType); 

  const handleAccountClick = (type) => {
    setUserType(type); 
    setIsActive(type); 
  };

  return (
    <Container>
      <div className="Cards">
        <div className="card1">
          <h1>Welcome to Your Freelancing Hub!</h1>
          <p>We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
        </div>
        <div className="card2">
          <div className="scrol">
            <div className="rec1"></div>
            <div className="rec"></div>
            <div className="rec"></div>
          </div>
          <h1>Let’s Get started!</h1>
          <p>How do you plan to use this platform</p>
          <div className="Accounts">
            <div
              className={`Account ${isActive === 'Freelancer' ? 'active' : ''}`}
              onClick={() => handleAccountClick('Freelancer')}
            >
              <img src={"/iconF.png"}  />
              <h4>Freelancer</h4>
              <p>I’m a freelancer ready to work for projects</p>
            </div>
            <div
              className={`Account ${isActive === 'Client' ? 'active' : ''}`}
              onClick={() => handleAccountClick('Client')}
            >
              <img src={"/iconC.png"}  />
              <h4>Client</h4>
              <p>I’m a client searching for talented freelancers</p>
            </div>
          </div>

          <div className="btn">
            <button
              onClick={() => alert(`Selected Account: ${isActive}`)}
              disabled={!isActive}
            >
              Next
              <img className="image" src={"/image1.png"} alt="Next Icon" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SellectAcScreen;
