import React, { useState, useEffect } from "react";
import Container from "../../components/Container/container";
import { OtpInput } from 'reactjs-otp-input';
import Otp from "../../components/OTP/otp";
import './otp.css'
import { useNavigate  } from "react-router-dom";
const OtpScreen = () => {
    const navigate = useNavigate();
    const btnpath=()=>{
        navigate('/email');
    }
  const initialTime = 60;  
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  const [otp, setOtp] = useState(""); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  

  const handleVerify = () => {
    console.log("OTP Verified:", otp);
  };
  useEffect(() => {
    if (timeLeft <= 0) return; 

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);  
    }, 1000); 

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
            <div className="rec2"></div>
            <div className="rec"></div>
          </div>

          <h1>Enter Your Phone Number</h1>
          <p>Enter your phone number to verify your identity and the validity of your number to safely activate your account on the platform.</p>
          <Otp />
          
       
          <div className="countdown-timer">
            <p>
              {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
            </p>
            {timeLeft === 0 && <p>Didn't receive a message? <a href="">Resend</a></p>}
          </div>
          <div className="btn">
        <button 
          onClick={btnpath}
        > Verify</button >
         </div>
        </div>
      </div>
    </Container>
  );
};

export default OtpScreen;
