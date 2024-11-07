import Container from "../../components/Container/container";
import './sellectAc.css'
import React,{useState} from "react";
import { useNavigate  } from "react-router-dom";
const SellectAcScreen= () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
      setIsActive(!isActive);
     
    };
    const btnpath=()=>{
        navigate('/client');
    }
      const bordrClass = isActive ? 'Account active' : 'Account';
    return(
    <Container>  
       <div className="Cards">
        <div className="card1">
           <h1>Welcome to Your Freelancing Hub!</h1> 
           <p>We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!</p>
        </div> 
       <div className="card2"> 
        <div className="scrol">
            <div className="rec1" ></div>
            <div className="rec"></div>
            <div className="rec"></div>
        </div>
        <h1>Let’s Get started!</h1>
        <p>How do you plan to use this platform</p>
         <div className="Accounts">
            
            <div className="Account">
                <img src={"/iconF.png"} />
                <h4>Freelancer</h4>
                <p>I’m a freelancer ready to work for projects</p>
            </div> 
       
            <div className={bordrClass}onClick={handleClick} >
            <img src={"/iconC.png"}/>
                <h4>Client</h4>
                <p>I’m a client searching for talented freelancers</p>
            </div>
            
         </div>
    
         <div className="btn">
       
         <button className={bordrClass} onClick={btnpath}
          disabled={!isActive} 
         >Next 
         <img className="image" src={"/image1.png"}/>
         </button > 
         </div>
       </div>
         </div>
    </Container>
    );

};
export default SellectAcScreen;
