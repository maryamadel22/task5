import React, { useState } from 'react';
import Container from '../../components/Container/container';
import './email.css'
const EmailScreen=()=>{
return(
   < Container>
   <div className="Cards">
                <div className="card1">
                   <h1>Welcome to Your Freelancing Hub!</h1> 
                   <p>We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
                </div> 
               <div className="card2"> 
                <div className="scrol">
                    <div className="rec1"></div>
                    <div className="rec1"></div>
                    <div className="rec1"></div>
                </div>
                <h1>Enter Your Information</h1>
                <p>Please enter your personal information to complete the registration process.</p>
                 <div className="inputs" >
                    <h4>Name</h4>
                 <input type="text" />
                 <h4>Email</h4>
                 <input type="text" />
                 <h4>Password</h4>
                 <input type="password" />
                 
                 </div>
                 <div className="btn">
         <button > Complete registration</button >
                </div>
                </div>
                </div>
   </Container>
)
}
export default EmailScreen;