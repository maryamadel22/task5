import React, { useState } from 'react';
import Container from '../../components/Container/container';
import './client.css'
import { useNavigate  } from "react-router-dom";
const ClientScreen =() =>{
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setIsActive(!isActive);
        const inputClass = isActive ? 'input active' : 'input';
       
      };
      const [phoneNumber, setPhoneNumber] = useState('');

      const [isValid, setIsValid] = useState(false);


      const handlePhoneNumberChange = (e) => {
      const inputValue = e.target.value;
      setPhoneNumber(inputValue);
      const regex = /^(077|075|078)\d{8}$/; 
    if (inputValue.length === 11 && !isNaN(inputValue) && regex.test(inputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
}
const btnpath=()=>{
    navigate('/otp');
}
    return(
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
                 <div className='inputNo'>
                    <h1>Phone Number</h1>
                    
               <button>
                <img src={"/iraqF.png"}/> +964</button> 
                <input type="number" inputMode="numeric"
                 placeholder='Enter Your Phone Number'
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}/>
                </div>
                <div className="btn">
         <button onClick={btnpath} style={{
            backgroundColor: isValid ? 'rgba(60, 151, 175, 1)' : '', 
            cursor: isValid ? 'pointer' : 'not-allowed',  
            color: isValid ? 'rgba(255, 255, 255, 1)' :'',
          }}
          disabled={!isValid} 
        > Send verification code</button >
         </div>
       </div>
         </div>
             
                
        
        </Container>   
    
    )
}


export default ClientScreen;